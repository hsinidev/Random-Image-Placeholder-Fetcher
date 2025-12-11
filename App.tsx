import React, { useState, useCallback, useEffect } from 'react';
import HomePage from './components/HomePage';
import BlogListPage from './components/BlogListPage';
import BlogPostPage from './components/BlogPostPage';
import { staticContent } from './lib/static-content';

type Page = 'home' | 'blog' | 'blogPost';
type ModalType = 'none' | 'contact' | 'about' | 'privacy-policy' | 'terms-of-service' | 'dmca' | 'guide';

const Header: React.FC<{ onNavigate: (page: Page) => void; onOpenModal: (modal: ModalType) => void }> = ({ onNavigate, onOpenModal }) => (
  <header className="glass-container sticky top-0 z-50 border-b border-white/10 backdrop-blur-xl">
    <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-20">
        <div className="flex-shrink-0">
          <button onClick={() => onNavigate('home')} className="flex items-center gap-3 group">
             <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center shadow-lg shadow-purple-500/30 group-hover:scale-105 transition-transform duration-300">
                <span className="text-white font-black text-xl">D</span>
             </div>
             <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300 group-hover:to-white transition-all tracking-tight">
                Doodax
             </span>
          </button>
        </div>
        <div className="hidden md:flex items-center space-x-1">
            <button onClick={() => onNavigate('home')} className="text-gray-300 hover:text-white hover:bg-white/10 px-4 py-2 rounded-lg text-sm font-medium transition-all">Home</button>
            <button onClick={() => onNavigate('blog')} className="text-gray-300 hover:text-white hover:bg-white/10 px-4 py-2 rounded-lg text-sm font-medium transition-all">Blog</button>
            <button onClick={() => onOpenModal('about')} className="text-gray-300 hover:text-white hover:bg-white/10 px-4 py-2 rounded-lg text-sm font-medium transition-all">About</button>
            <button onClick={() => onOpenModal('contact')} className="text-gray-300 hover:text-white hover:bg-white/10 px-4 py-2 rounded-lg text-sm font-medium transition-all">Contact</button>
            <button onClick={() => onOpenModal('guide')} className="ml-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white px-5 py-2.5 rounded-lg text-sm font-bold transition-all shadow-lg shadow-blue-500/25 transform hover:-translate-y-0.5">Start Guide</button>
        </div>
      </div>
    </nav>
  </header>
);

const Footer: React.FC<{ onOpenModal: (modal: ModalType) => void }> = ({ onOpenModal }) => (
  <footer className="glass-container mt-auto border-t border-white/10">
    <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
       <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-center text-sm mb-12">
            <button onClick={() => onOpenModal('about')} className="text-gray-400 hover:text-blue-400 transition-colors font-medium">About Us</button>
            <button onClick={() => onOpenModal('contact')} className="text-gray-400 hover:text-blue-400 transition-colors font-medium">Contact</button>
            <button onClick={() => onOpenModal('guide')} className="text-gray-400 hover:text-blue-400 transition-colors font-medium">User Guide</button>
            <button onClick={() => onOpenModal('privacy-policy')} className="text-gray-400 hover:text-blue-400 transition-colors font-medium">Privacy Policy</button>
            <button onClick={() => onOpenModal('terms-of-service')} className="text-gray-400 hover:text-blue-400 transition-colors font-medium">Terms of Service</button>
            <button onClick={() => onOpenModal('dmca')} className="text-gray-400 hover:text-blue-400 transition-colors font-medium">DMCA</button>
       </div>
      <div className="pt-8 border-t border-white/10 flex flex-col items-center">
        <p className="text-gray-500 text-sm mb-4">
          &copy; {new Date().getFullYear()} Doodax.com. All rights reserved.
        </p>
        <div className="flex items-center gap-2 text-sm text-gray-400">
          <span>Powered by</span>
          <a
              href="https://github.com/hsinidev"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-white hover:text-blue-400 transition-colors flex items-center gap-2 bg-white/5 px-3 py-1 rounded-full border border-white/10 hover:border-blue-500/50 hover:bg-blue-500/10"
          >
              HSINI MOHAMED
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
          </a>
        </div>
      </div>
    </div>
  </footer>
);

// Generic Modal Component
const Modal: React.FC<{ 
    isOpen: boolean; 
    onClose: () => void; 
    title: string; 
    children: React.ReactNode 
}> = ({ isOpen, onClose, title, children }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-black/80 backdrop-blur-md" onClick={onClose} aria-hidden="true" />
            <div className="glass-modal w-full max-w-3xl rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] animate-modal relative border border-white/10">
                <div className="p-6 border-b border-white/10 flex justify-between items-center bg-gradient-to-r from-white/5 to-transparent">
                    <h2 className="text-2xl font-bold text-white tracking-tight">{title}</h2>
                    <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors p-2 rounded-full hover:bg-white/10 group">
                        <svg className="w-6 h-6 group-hover:rotate-90 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <div className="p-8 overflow-y-auto text-gray-300 leading-relaxed custom-scrollbar prose prose-invert max-w-none">
                    {children}
                </div>
                <div className="p-4 bg-yellow-500/10 border-t border-yellow-500/20 text-center backdrop-blur-sm">
                    <p className="text-xs text-yellow-200 uppercase font-bold tracking-wider flex items-center justify-center gap-2">
                         <span className="text-lg">⚠️</span> Important Disclaimer & Compliance
                    </p>
                    <p className="text-xs text-yellow-200/70 mt-1 max-w-xl mx-auto">
                        Doodax.com generates images via third-party APIs (Unsplash). We do not host these images. 
                        Users must comply with all applicable copyright laws and Terms of Service.
                    </p>
                </div>
            </div>
        </div>
    );
};

const App: React.FC = () => {
    const [page, setPage] = useState<Page>('home');
    const [activeSlug, setActiveSlug] = useState<string | null>(null);
    const [activeModal, setActiveModal] = useState<ModalType>('none');

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
            default:
                return <HomePage />;
        }
    };

    const renderModalContent = () => {
        if (activeModal === 'none') return null;
        
        if (activeModal === 'contact') {
             return (
                <div className="space-y-8 text-center py-8">
                    <div className="space-y-2">
                        <h3 className="text-2xl font-bold text-white">Get in Touch</h3>
                        <p className="text-gray-400">We are here to help and answer any questions you might have.</p>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-blue-500/50 transition-colors group">
                            <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                                <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                            </div>
                            <p className="text-sm text-gray-400 uppercase tracking-widest mb-2 font-bold">Email Support</p>
                            <a href="mailto:hsini.web@gmail.com" className="text-lg font-semibold text-white hover:text-blue-400 break-all">
                                hsini.web@gmail.com
                            </a>
                        </div>
                        
                        <div className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-purple-500/50 transition-colors group">
                            <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                                <svg className="w-6 h-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/></svg>
                            </div>
                            <p className="text-sm text-gray-400 uppercase tracking-widest mb-2 font-bold">Official Website</p>
                            <a href="https://doodax.com" target="_blank" className="text-lg font-semibold text-white hover:text-purple-400">
                                doodax.com
                            </a>
                        </div>
                    </div>
                </div>
            );
        }

        const content = staticContent[activeModal];
        return (
            <div dangerouslySetInnerHTML={{ __html: content?.body || "Content loading..." }} />
        );
    };

    const getModalTitle = () => {
        if (activeModal === 'contact') return 'Contact Doodax';
        return staticContent[activeModal]?.title || 'Information';
    };

    // Close modal on escape key
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setActiveModal('none');
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, []);

    return (
        <div className="flex flex-col min-h-screen relative z-0">
            <Header onNavigate={handleNavigate} onOpenModal={setActiveModal} />
            <main className="flex-grow container mx-auto px-4 py-8 md:py-16 flex flex-col items-center">
                {renderPage()}
            </main>
            <Footer onOpenModal={setActiveModal} />

            <Modal 
                isOpen={activeModal !== 'none'} 
                onClose={() => setActiveModal('none')}
                title={getModalTitle()}
            >
                {renderModalContent()}
            </Modal>
        </div>
    );
};

export default App;