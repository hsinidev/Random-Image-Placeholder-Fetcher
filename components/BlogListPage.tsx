import React from 'react';
import { blogPosts } from '../lib/blog-posts';

interface BlogListPageProps {
    onNavigate: (page: 'blogPost', slug: string) => void;
}

const BlogListPage: React.FC<BlogListPageProps> = ({ onNavigate }) => {
    return (
        <div className="w-full max-w-4xl mx-auto glass-container shadow-2xl rounded-2xl p-8 animate-fade-in">
            <h1 className="text-3xl md:text-5xl font-bold text-center text-white mb-8">
                Blog
            </h1>
            <div className="space-y-6">
                {blogPosts.map((post) => (
                    <div key={post.slug} className="p-4 bg-white/10 rounded-lg">
                        <button 
                            onClick={() => onNavigate('blogPost', post.slug)}
                            className="text-xl font-semibold text-blue-400 hover:text-blue-300 text-left w-full"
                        >
                            {post.title}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BlogListPage;
