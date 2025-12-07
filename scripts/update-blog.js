/* eslint-disable */
const fs = require('fs');
const path = require('path');
const Parser = require('rss-parser');

const parser = new Parser();
const FEED_URL = 'https://datapecharcha.substack.com/feed';
const AUTHOR_NAME = 'Mahaprasad';
const DATA_FILE = path.join(__dirname, '../data/blog-posts.json');

async function updateBlogPosts() {
    console.log('Fetching RSS feed...');
    try {
        const feed = await parser.parseURL(FEED_URL);

        // Read existing data
        let existingData = { posts: [] };
        if (fs.existsSync(DATA_FILE)) {
            existingData = JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'));
        }

        const currentPosts = existingData.posts || [];
        const currentUrls = new Set(currentPosts.map(p => p.substackUrl));

        let newPostsCount = 0;

        // Process new items
        const rssPosts = feed.items
            .filter((item) => {
                const author = item.creator || item.author || '';
                return author.toLowerCase().includes(AUTHOR_NAME.toLowerCase());
            })
            .map((item) => {
                return {
                    title: item.title || 'Untitled',
                    date: item.isoDate ? new Date(item.isoDate).toISOString().split('T')[0] : new Date().toISOString().split('T')[0],
                    excerpt: item.contentSnippet ? item.contentSnippet.slice(0, 150) + '...' : '',
                    substackUrl: item.link || '#',
                    tags: item.categories ? item.categories.slice(0, 2) : ['technical', 'ai']
                };
            });

        // Merge strategy: Only add if URL is new
        rssPosts.forEach(post => {
            if (!currentUrls.has(post.substackUrl)) {
                currentPosts.push(post);
                newPostsCount++;
            }
        });

        // Sort by date descending
        currentPosts.sort((a, b) => new Date(b.date) - new Date(a.date));

        // Write back
        fs.writeFileSync(DATA_FILE, JSON.stringify({ posts: currentPosts }, null, 4));

        console.log(`Successfully updated blog posts.`);
        console.log(`Added ${newPostsCount} new posts.`);
        console.log(`Total posts in archive: ${currentPosts.length}`);

    } catch (error) {
        console.error('Error updating blog posts:', error);
        process.exit(1);
    }
}

updateBlogPosts();
