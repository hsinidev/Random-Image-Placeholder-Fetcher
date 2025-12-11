import React, { useState, useCallback } from 'react';

const Spinner: React.FC = () => (
  <div className="flex justify-center items-center h-full">
    <div className="relative">
        <div className="w-16 h-16 rounded-full border-4 border-blue-500/30 border-t-blue-500 animate-spin"></div>
        <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
        </div>
    </div>
  </div>
);

const SeoArticle: React.FC = () => {
    const [expanded, setExpanded] = useState(false);

    return (
        <article className="glass-container mt-20 p-8 md:p-12 rounded-3xl max-w-5xl w-full mx-auto relative overflow-hidden transition-all duration-500 border border-white/5 shadow-2xl shadow-black/50">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-8 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent text-center">
                The Ultimate Guide to Random Image Placeholders
            </h2>
            
            <div className={`prose prose-invert prose-lg max-w-none text-gray-300 transition-all duration-700 leading-loose ${expanded ? 'expanded-article' : 'line-clamp-2'}`}>
                
                <p className="lead text-xl text-gray-200 text-center mb-10 max-w-3xl mx-auto">
                    Welcome to <strong>Doodax.com</strong>, your premier destination for generating high-quality, contextual random placeholder images. 
                    Whether you are a seasoned frontend engineer, a UI/UX designer, or a content creator, visuals are the heartbeat of your digital presence. 
                    This comprehensive guide explores the power of dynamic placeholders, image optimization, and how Doodax streamlines your workflow.
                </p>

                <div className="my-8 p-6 bg-white/5 rounded-2xl border border-white/10">
                    <h3 className="text-2xl font-bold text-white mb-4">Table of Contents</h3>
                    <ul className="grid md:grid-cols-2 gap-2 list-none pl-0">
                        <li><a href="#introduction" className="no-underline hover:text-blue-400 flex items-center gap-2"><span>➡️</span> Introduction to Placeholders</a></li>
                        <li><a href="#why-doodax" className="no-underline hover:text-blue-400 flex items-center gap-2"><span>➡️</span> Why Choose Doodax?</a></li>
                        <li><a href="#technical-deep-dive" className="no-underline hover:text-blue-400 flex items-center gap-2"><span>➡️</span> Technical Deep Dive</a></li>
                        <li><a href="#seo-impact" className="no-underline hover:text-blue-400 flex items-center gap-2"><span>➡️</span> SEO & Performance</a></li>
                        <li><a href="#user-guide" className="no-underline hover:text-blue-400 flex items-center gap-2"><span>➡️</span> Step-by-Step Guide</a></li>
                        <li><a href="#faq" className="no-underline hover:text-blue-400 flex items-center gap-2"><span>➡️</span> Frequently Asked Questions</a></li>
                    </ul>
                </div>

                <h3 id="introduction" className="text-3xl font-bold text-white mt-12 mb-6">Introduction to Modern Placeholder Images</h3>
                <p>
                    In the early days of the web, developers used simple grey rectangles to hold space for images. 
                    Today, the standard has shifted. Clients and stakeholders expect high-fidelity prototypes that mimic the final product's emotional tone. 
                    A "random image placeholder" is more than just a space-filler; it is a design element that provides context, scale, and mood.
                </p>
                <p>
                    <strong>Doodax</strong> leverages the robust Unsplash Source API to deliver photography-grade images instantly. 
                    Instead of seeing a blank box labeled "300x200", you see a vibrant cityscape, a serene nature shot, or a tech-focused abstract background 
                    that aligns with your project's theme.
                </p>

                <h3 id="why-doodax" className="text-3xl font-bold text-white mt-12 mb-6">Why Doodax is the Developer's Choice</h3>
                <p>
                    We built Doodax with a "Developer First" mindset. The interface is clean, dark-mode native, and distraction-free.
                    Here is why thousands of users prefer our tool:
                </p>
                <ul className="space-y-4 mb-8">
                    <li className="flex items-start gap-3">
                        <span className="bg-blue-500/20 text-blue-400 p-1 rounded">✓</span>
                        <div><strong>Contextual Relevance:</strong> Unlike static placeholder services, we allow you to define <em>keywords</em>. Building a food blog? Type "food, restaurant". Working on a fitness app? Type "gym, workout".</div>
                    </li>
                    <li className="flex items-start gap-3">
                        <span className="bg-purple-500/20 text-purple-400 p-1 rounded">✓</span>
                        <div><strong>Zero Backend Latency:</strong> Our application runs entirely in your browser. We don't store your data, and the images are fetched directly from the source, ensuring maximum privacy and speed.</div>
                    </li>
                    <li className="flex items-start gap-3">
                        <span className="bg-pink-500/20 text-pink-400 p-1 rounded">✓</span>
                        <div><strong>Integrated Editor:</strong> Why open Photoshop just to check how an image looks in B&W? Doodax includes real-time CSS filters for Grayscale, Sepia, and Blur, plus flipping capabilities.</div>
                    </li>
                </ul>

                <h3 id="technical-deep-dive" className="text-3xl font-bold text-white mt-12 mb-6">Technical Deep Dive: How It Works</h3>
                <p>
                    Doodax operates as a sophisticated frontend interface for the Unsplash Source API. When you click "Generate":
                </p>
                <ol>
                    <li>The app constructs a specific URL string containing your dimensions (e.g., `/1920x1080`) and your comma-separated keywords.</li>
                    <li>We append a unique timestamp ("cache buster") to the request. This forces the browser to fetch a fresh image every time, rather than loading a cached version.</li>
                    <li>The image is rendered into a secure HTML5 Canvas-ready image element, allowing for immediate manipulation via CSS filters.</li>
                </ol>

                <h3 id="seo-impact" className="text-3xl font-bold text-white mt-12 mb-6">SEO Benefits of Optimized Imagery</h3>
                <p>
                    While Doodax is a prototyping tool, the principles we promote—correct sizing and relevance—are crucial for live SEO (Search Engine Optimization).
                </p>
                <p>
                    <strong>Core Web Vitals & CLS:</strong> One of Google's key ranking factors is Cumulative Layout Shift (CLS). 
                    By defining explicit `width` and `height` attributes (as you do in our generator), you reserve the correct amount of space in the DOM. 
                    This prevents the page from "jumping" as images load, providing a superior user experience.
                </p>
                <p>
                    <strong>Relevance & Dwell Time:</strong> High-quality, relevant images keep users on your page longer. 
                    Dwell time is a significant signal to search engines that your content is valuable. 
                    Using Doodax to test different image styles during the design phase helps you identify what visual language resonates best with your audience.
                </p>

                <h3 id="user-guide" className="text-3xl font-bold text-white mt-12 mb-6">Step-by-Step User Guide</h3>
                <div className="bg-blue-900/20 p-6 rounded-xl border border-blue-500/20">
                    <p className="font-bold text-blue-300 mb-2">1. Define Your Canvas</p>
                    <p>Enter your target Width and Height in pixels. Common standards include 1920x1080 (Hero), 800x600 (Blog), or 1080x1080 (Social).</p>
                    
                    <p className="font-bold text-blue-300 mt-4 mb-2">2. Set the Mood</p>
                    <p>Enter keywords into the search bar. Be specific for best results. Try "abstract neon" for tech sites or "minimalist interior" for architecture.</p>
                    
                    <p className="font-bold text-blue-300 mt-4 mb-2">3. Generate & Edit</p>
                    <p>Click the gradient button. Once loaded, use the "Editor Studio" below the image to apply filters. If you don't like the image, simply click Generate again!</p>
                </div>

                <h3 id="faq" className="text-3xl font-bold text-white mt-12 mb-6">Frequently Asked Questions (FAQ)</h3>
                <div className="space-y-4" itemScope itemType="https://schema.org/FAQPage">
                    <details className="group bg-white/5 rounded-lg p-4 open:bg-white/10 transition-colors" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                        <summary className="font-bold cursor-pointer list-none text-white flex items-center justify-between select-none" itemProp="name">
                            <span>Is Doodax free to use?</span>
                            <span className="group-open:rotate-180 transition-transform">▼</span>
                        </summary>
                        <div className="mt-4 text-gray-300 pl-4 border-l-2 border-blue-500" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                            <div itemProp="text">
                                Yes, Doodax is 100% free for personal and commercial prototyping. The images are sourced from Unsplash, which offers a generous license for creators.
                            </div>
                        </div>
                    </details>
                    
                    <details className="group bg-white/5 rounded-lg p-4 open:bg-white/10 transition-colors" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                        <summary className="font-bold cursor-pointer list-none text-white flex items-center justify-between select-none" itemProp="name">
                            <span>How do I save the generated image?</span>
                            <span className="group-open:rotate-180 transition-transform">▼</span>
                        </summary>
                        <div className="mt-4 text-gray-300 pl-4 border-l-2 border-purple-500" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                            <div itemProp="text">
                                Simply right-click (or long-press on mobile) on the generated image and select "Save Image As...". You can then use it in your local design files or upload it to your CMS.
                            </div>
                        </div>
                    </details>

                    <details className="group bg-white/5 rounded-lg p-4 open:bg-white/10 transition-colors" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                        <summary className="font-bold cursor-pointer list-none text-white flex items-center justify-between select-none" itemProp="name">
                            <span>What if the image doesn't load?</span>
                            <span className="group-open:rotate-180 transition-transform">▼</span>
                        </summary>
                        <div className="mt-4 text-gray-300 pl-4 border-l-2 border-pink-500" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                            <div itemProp="text">
                                Occasionally, extremely specific keywords might return no results. Try broadening your search terms (e.g., change "cyberpunk neon rain taxi" to just "cyberpunk city"). Also, ensure you have an active internet connection.
                            </div>
                        </div>
                    </details>

                    <details className="group bg-white/5 rounded-lg p-4 open:bg-white/10 transition-colors" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                        <summary className="font-bold cursor-pointer list-none text-white flex items-center justify-between select-none" itemProp="name">
                            <span>Can I hotlink the images?</span>
                            <span className="group-open:rotate-180 transition-transform">▼</span>
                        </summary>
                        <div className="mt-4 text-gray-300 pl-4 border-l-2 border-green-500" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                            <div itemProp="text">
                                While you can copy the URL, we recommend saving the image. Hotlinking to Unsplash Source is subject to their rate limits and API changes, which might break your images in production.
                            </div>
                        </div>
                    </details>
                </div>
                
                <div className="mt-12 pt-8 border-t border-white/10 text-center">
                    <p className="text-gray-400 italic">
                        Article by <a href="https://github.com/hsinidev" className="text-blue-400 hover:text-white transition-colors">HSINI MOHAMED</a> • Last Updated: October 2024
                    </p>
                </div>
            </div>

            <div className={`absolute bottom-0 left-0 w-full p-8 flex justify-center bg-gradient-to-t from-[#030014] via-[#030014]/95 to-transparent pt-32 transition-opacity duration-500 ${expanded ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
                <button 
                    onClick={() => setExpanded(true)} 
                    className="group relative px-8 py-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white font-bold tracking-wide transition-all shadow-[0_0_20px_rgba(59,130,246,0.5)] hover:shadow-[0_0_30px_rgba(59,130,246,0.8)]"
                >
                    <span className="flex items-center gap-2">
                        Read Full Guide 
                        <svg className="w-4 h-4 group-hover:translate-y-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                    </span>
                </button>
            </div>
            
            {expanded && (
                <div className="mt-8 text-center">
                    <button 
                        onClick={() => {
                            setExpanded(false);
                            // Smooth scroll back to top of article
                            const article = document.querySelector('article');
                            if(article) article.scrollIntoView({behavior: 'smooth'});
                        }} 
                        className="px-6 py-2 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors text-sm"
                    >
                        Collapse Article ▲
                    </button>
                </div>
            )}
        </article>
    );
};

const HomePage: React.FC = () => {
  const [keywords, setKeywords] = useState<string>('cosmic nebula');
  const [width, setWidth] = useState<string>('1200');
  const [height, setHeight] = useState<string>('800');
  const [imageUrl, setImageUrl] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  
  const [filter, setFilter] = useState<string>('none');
  const [isFlipped, setIsFlipped] = useState<boolean>(false);

  const handleGetImage = useCallback(() => {
    setIsLoading(true);
    setError('');
    setImageUrl('');

    const numWidth = parseInt(width, 10);
    const numHeight = parseInt(height, 10);

    if (isNaN(numWidth) || isNaN(numHeight) || numWidth <= 0 || numHeight <= 0) {
      setError('Please enter valid, positive numbers for width and height.');
      setIsLoading(false);
      return;
    }

    const formattedKeywords = keywords.trim().replace(/[\s,]+/g, ',');
    const cacheBuster = `_=${new Date().getTime()}`;
    let baseUrl = `https://source.unsplash.com/random/${numWidth}x${numHeight}`;
    
    if (formattedKeywords) {
      baseUrl += `/?${formattedKeywords}`;
      setImageUrl(`${baseUrl}&${cacheBuster}`);
    } else {
      setImageUrl(`${baseUrl}?${cacheBuster}`);
    }

    setFilter('none');
    setIsFlipped(false);
  }, [keywords, width, height]);

  return (
    <div className="w-full flex flex-col items-center animate-fade-in">
      <div className="w-full max-w-6xl mx-auto glass-container shadow-2xl rounded-3xl overflow-hidden p-6 md:p-12 relative border-t border-white/20">
        
        <div className="text-center mb-12">
            <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/30 text-blue-300 text-xs font-bold tracking-widest uppercase">
                Version 2.0 • Nebula Edition
            </div>
            <h1 className="text-4xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-indigo-200 to-blue-200 mb-6 tracking-tight drop-shadow-2xl">
            Imagine. Generate. Create.
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            The most advanced random image generator for modern web designers.
            Instant, high-quality placeholders powered by the cosmos.
            </p>
        </div>

        <div className="bg-black/20 p-6 md:p-8 rounded-2xl border border-white/5 backdrop-blur-sm mb-10">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <div className="md:col-span-6">
                <label htmlFor="keywords" className="block text-xs font-bold text-blue-300 uppercase tracking-wider mb-3 ml-1">Creative Prompt</label>
                <div className="relative group">
                    <input 
                        id="keywords" 
                        type="text" 
                        value={keywords} 
                        onChange={(e) => setKeywords(e.target.value)} 
                        placeholder="e.g., galaxy, technology, abstract" 
                        className="w-full px-6 py-4 bg-gray-900/60 border border-white/10 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-white placeholder-gray-500 shadow-inner" 
                    />
                    <div className="absolute right-4 top-4 text-gray-600 group-focus-within:text-blue-400 transition-colors">
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    </div>
                </div>
            </div>
            <div className="md:col-span-3">
                <label htmlFor="width" className="block text-xs font-bold text-purple-300 uppercase tracking-wider mb-3 ml-1">Width</label>
                <input id="width" type="number" value={width} onChange={(e) => setWidth(e.target.value)} className="w-full px-6 py-4 bg-gray-900/60 border border-white/10 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all text-white shadow-inner" />
            </div>
            <div className="md:col-span-3">
                <label htmlFor="height" className="block text-xs font-bold text-pink-300 uppercase tracking-wider mb-3 ml-1">Height</label>
                <input id="height" type="number" value={height} onChange={(e) => setHeight(e.target.value)} className="w-full px-6 py-4 bg-gray-900/60 border border-white/10 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition-all text-white shadow-inner" />
            </div>
            </div>
        </div>

        {error && (
            <div className="bg-red-500/10 border border-red-500/20 text-red-200 px-6 py-4 rounded-xl mb-8 flex items-center gap-3">
                <svg className="w-6 h-6 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                {error}
            </div>
        )}
        
        <button 
            onClick={handleGetImage} 
            disabled={isLoading}
            className="w-full group relative overflow-hidden bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-bold py-5 px-8 rounded-2xl focus:outline-none focus:ring-4 focus:ring-blue-500/30 transition-all duration-300 shadow-xl shadow-indigo-500/30 transform hover:-translate-y-1 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
        >
            <span className="relative z-10 flex items-center justify-center gap-3 text-xl tracking-wide">
                {isLoading ? (
                    <>
                        <svg className="animate-spin h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                        Initializing Core...
                    </>
                ) : (
                    <>
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                        Generate Universe
                    </>
                )}
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
        </button>

        {imageUrl && !isLoading && (
          <div className="mt-8 p-6 bg-white/5 rounded-2xl border border-white/10 animate-fade-in flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3 text-white">
                <div className="bg-blue-500/20 p-2 rounded-lg">
                    <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" /></svg>
                </div>
                <span className="font-bold text-lg">Studio Controls</span>
            </div>
            
            <div className="flex flex-wrap items-center gap-4">
                <div className="relative">
                    <select 
                        id="filter" 
                        value={filter} 
                        onChange={(e) => setFilter(e.target.value)} 
                        className="appearance-none pl-4 pr-10 py-2.5 bg-black/40 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none text-white cursor-pointer hover:bg-black/60 transition-colors"
                    >
                        <option value="none">Normal Mode</option>
                        <option value="grayscale">Noir (B&W)</option>
                        <option value="sepia">Vintage (Sepia)</option>
                        <option value="blur">Soft Focus (Blur)</option>
                    </select>
                    <div className="absolute right-3 top-3 pointer-events-none text-gray-400">
                         <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                    </div>
                </div>
                
                 <button 
                    onClick={() => setIsFlipped(!isFlipped)}
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-lg border transition-all ${isFlipped ? 'bg-blue-600/20 border-blue-500 text-blue-300' : 'bg-black/40 border-gray-600 text-gray-400 hover:text-white'}`}
                 >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" /></svg>
                    Flip
                 </button>
            </div>
          </div>
        )}
      </div>

      <div className="w-full max-w-6xl mx-auto mt-12 mb-12 relative group">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
        
        <div className="bg-black/40 backdrop-blur-md min-h-[600px] flex items-center justify-center p-4 md:p-8 rounded-3xl border border-white/10 relative overflow-hidden">
            
            {!imageUrl && (
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="text-center opacity-40">
                         <div className="w-32 h-32 mx-auto border-2 border-dashed border-gray-500 rounded-2xl flex items-center justify-center mb-6">
                            <svg className="w-12 h-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                         </div>
                         <p className="text-2xl font-bold text-white tracking-wide">Ready to Visualize</p>
                         <p className="text-gray-400 mt-2">Enter your parameters above to begin.</p>
                    </div>
                </div>
            )}

            {isLoading && <Spinner />}
            
            {!isLoading && imageUrl && (
                <div className="relative z-10 shadow-2xl transition-transform duration-500 group-hover:scale-[1.01]">
                    <img
                        key={imageUrl}
                        src={imageUrl}
                        alt={keywords || 'A random image from Unsplash'}
                        className={`
                        transition-all duration-500 ease-in-out rounded-lg shadow-2xl max-w-full max-h-[80vh] object-contain
                        ${filter === 'grayscale' ? 'grayscale' : ''}
                        ${filter === 'sepia' ? 'sepia' : ''}
                        ${filter === 'blur' ? 'blur-md' : ''}
                        ${isFlipped ? 'scale-x-[-1]' : ''}
                        `}
                        onLoad={() => setIsLoading(false)}
                        onError={() => {
                        setError('Failed to load image. Try different keywords.');
                        setIsLoading(false);
                        }}
                    />
                </div>
            )}
        </div>
      </div>
      
      <SeoArticle />
    </div>
  );
};

export default HomePage;