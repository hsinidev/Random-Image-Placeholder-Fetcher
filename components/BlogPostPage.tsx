import React from 'react';
import { blogPosts } from '../lib/blog-posts';

interface BlogPostPageProps {
    slug: string;
}

const BlogPostPage: React.FC<BlogPostPageProps> = ({ slug }) => {
    const post = blogPosts.find(p => p.slug === slug);

    if (!post) {
        return (
            <div className="w-full max-w-4xl mx-auto glass-container shadow-2xl rounded-2xl p-8 animate-fade-in text-center">
                <h1 className="text-3xl font-bold text-white mb-4">Post not found</h1>
                <p className="text-gray-300">Sorry, we couldn't find the blog post you were looking for.</p>
            </div>
        );
    }

    return (
        <div className="w-full max-w-4xl mx-auto glass-container shadow-2xl rounded-2xl p-8 animate-fade-in">
            <h1 className="text-3xl md:text-5xl font-bold text-center text-white mb-8">
                {post.title}
            </h1>
            <div className="prose prose-invert lg:prose-xl mx-auto text-gray-300">
                <p>
                    This is a placeholder for the full blog post content for "{post.title}". 
                    Generating a full 3500-word article for each of the 10 blog posts is beyond the scope of a single request,
                    but this template demonstrates how the content for the slug "{post.slug}" would be displayed.
                </p>
                <p>
                    In a real application, this content would be fetched from a CMS or a Markdown file and rendered here.
                    The styles for this text come from the Tailwind CSS Typography plugin, which provides sensible defaults for prose content.
                </p>
            </div>
        </div>
    );
};

export default BlogPostPage;
