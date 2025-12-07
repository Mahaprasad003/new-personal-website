import fs from 'fs';
import path from 'path';
import { Project, BlogPost } from '@/types';

const DATA_DIR = path.join(process.cwd(), 'data');

export async function getProjects(): Promise<Project[]> {
    const filePath = path.join(DATA_DIR, 'projects.json');
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const data = JSON.parse(fileContents);
    // Handle both array root or object root if needed, but based on view_file it is an array
    return Array.isArray(data) ? data : data.projects || [];
}

export async function getBlogPosts(): Promise<BlogPost[]> {
    const filePath = path.join(DATA_DIR, 'blog-posts.json');
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const data = JSON.parse(fileContents);
    return data.posts || [];
}
