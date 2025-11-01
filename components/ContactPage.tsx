import React from 'react';

const ContactPage: React.FC = () => {
    return (
        <div className="w-full max-w-4xl mx-auto glass-container shadow-2xl rounded-2xl p-8 animate-fade-in text-center">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
                Contact Us
            </h1>
            <p className="text-gray-300 text-lg">
                For any inquiries, please email us at:{' '}
                <a href="mailto:hsini.web@gmail.com" className="font-semibold text-blue-400 hover:text-blue-300">
                    hsini.web@gmail.com
                </a>
            </p>
        </div>
    );
};

export default ContactPage;
