export interface Project {
    id: string;
    title: string;
    description: string;
    githubUrl: string;
    tags: string[];
}

export interface BlogPost {
    title: string;
    date: string;
    excerpt: string;
    substackUrl: string;
    tags: string[];
}
