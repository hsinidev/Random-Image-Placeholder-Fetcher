import React from 'react';
import { staticContent } from '../lib/static-content';

interface StaticPageProps {
    slug: string;
}

const StaticPage: React.FC<StaticPageProps> = ({ slug }) => {
    const content = staticContent[slug];

    if (!content) {
        return (
            <div className="w-full max-w-4xl mx-auto glass-container shadow-2xl rounded-2xl p-8 animate-fade-in text-center">
                <h1 className="text-3xl font-bold text-white mb-4">Page not found</h1>
                <p className="text-gray-300">Sorry, we couldn't find the page you were looking for.</p>
            </div>
        );
    }

    return (
        <div className="w-full max-w-4xl mx-auto glass-container shadow-2xl rounded-2xl p-8 animate-fade-in">
            <h1 className="text-3xl md:text-5xl font-bold text-center text-white mb-8">
                {content.title}
            </h1>
            <div className="prose prose-invert lg:prose-xl mx-auto text-gray-300">
                <p>{content.body}</p>
            </div>
        </div>
    );
};

export default StaticPage;
