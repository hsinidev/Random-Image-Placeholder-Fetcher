import React, { useState, useCallback } from 'react';
import HomePage from './components/HomePage';
import BlogListPage from './components/BlogListPage';
import BlogPostPage from './components/BlogPostPage';
import StaticPage from './components/StaticPage';
import ContactPage from './components/ContactPage';

type Page = 'home' | 'blog' | 'blogPost' | 'static' | 'contact';

const Header: React.FC<{ onNavigate: (page: Page) => void }> = ({ onNavigate }) => (
  <header className="glass-container sticky top-0 z-50">
    <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-16">
        <div className="flex-shrink-0">
          <button onClick={() => onNavigate('home')} className="text-2xl font-bold text-white hover:text-amber-400 transition-colors">
            RandomImage
          </button>
        </div>
        <div className="hidden md:flex items-center space-x-4">
            <button onClick={() => onNavigate('home')} className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Home</button>
            <button onClick={() => onNavigate('blog')} className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Blog</button>
            <button onClick={() => onNavigate('contact')} className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Contact</button>
        </div>
      </div>
    </nav>
  </header>
);

const Footer: React.FC<{ onNavigate: (page: Page, slug: string) => void }> = ({ onNavigate }) => (
  <footer className="glass-container mt-auto">
    <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
       <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center">
            <button onClick={() => onNavigate('static', 'privacy-policy')} className="text-gray-400 hover:text-white transition-colors">Privacy Policy</button>
            <button onClick={() => onNavigate('static', 'terms-of-service')} className="text-gray-400 hover:text-white transition-colors">Terms of Service</button>
            <button onClick={() => onNavigate('static', 'dmca')} className="text-gray-400 hover:text-white transition-colors">DMCA</button>
            <button onClick={() => onNavigate('static', 'about')} className="text-gray-400 hover:text-white transition-colors">About</button>
            <button onClick={() => onNavigate('static', 'guide')} className="text-gray-400 hover:text-white transition-colors">Guide</button>
       </div>
      <div className="mt-8 pt-8 border-t border-gray-700 text-center">
        <p className="text-sm text-gray-400">
          Powered by{' '}
          <a
            href="https://github.com/hsinidev"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-amber-400 hover:text-amber-300 transition-colors"
          >
            HSINI MOHAMED
          </a>
        </p>
      </div>
    </div>
  </footer>
);

const App: React.FC = () => {
    const [page, setPage] = useState<Page>('home');
    const [activeSlug, setActiveSlug] = useState<string | null>(null);

    const handleNavigate = useCallback((newPage: Page, slug: string | null = null) => {
        setPage(newPage);
        setActiveSlug(slug);
        window.scrollTo(0, 0);
    }, []);

    const renderPage = () => {
        switch (page) {
            case 'home':
                return <HomePage />;
            case 'blog':
                return <BlogListPage onNavigate={handleNavigate} />;
            case 'blogPost':
                return activeSlug ? <BlogPostPage slug={activeSlug} /> : <BlogListPage onNavigate={handleNavigate} />;
            case 'static':
                return activeSlug ? <StaticPage slug={activeSlug} /> : <HomePage />;
            case 'contact':
                return <ContactPage />;
            default:
                return <HomePage />;
        }
    };
    
    return (
        <div className="flex flex-col min-h-screen">
            <Header onNavigate={handleNavigate} />
            <main className="flex-grow container mx-auto px-4 py-8 flex items-center justify-center">
                {renderPage()}
            </main>
            <Footer onNavigate={handleNavigate} />
        </div>
    );
};

export default App;