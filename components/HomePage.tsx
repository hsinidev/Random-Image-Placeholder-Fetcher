import React, { useState, useCallback } from 'react';

const Spinner: React.FC = () => (
  <div className="flex justify-center items-center h-full">
    <div className="border-gray-300 h-10 w-10 animate-spin rounded-full border-4 border-t-blue-500" />
  </div>
);

const HomePage: React.FC = () => {
  const [keywords, setKeywords] = useState<string>('futuristic city');
  const [width, setWidth] = useState<string>('800');
  const [height, setHeight] = useState<string>('600');
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
    <div className="w-full max-w-4xl mx-auto">
      <div className="glass-container shadow-2xl rounded-2xl overflow-hidden p-8">
        <h1 className="text-3xl md:text-5xl font-bold text-center text-white mb-2">
          Random Image Fetcher & Simple Editor
        </h1>
        <p className="text-center text-gray-300 mb-8">
          Generate and modify placeholder images from Unsplash instantly.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-6">
          <div className="md:col-span-3">
            <label htmlFor="keywords" className="block text-sm font-medium text-gray-300 mb-1">Keywords</label>
            <input id="keywords" type="text" value={keywords} onChange={(e) => setKeywords(e.target.value)} placeholder="e.g., coffee, city, nature" className="w-full px-4 py-2 bg-gray-900/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition" />
          </div>
          <div className="md:col-span-1">
            <label htmlFor="width" className="block text-sm font-medium text-gray-300 mb-1">Width</label>
            <input id="width" type="number" value={width} onChange={(e) => setWidth(e.target.value)} className="w-full px-4 py-2 bg-gray-900/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition" />
          </div>
          <div className="md:col-span-1">
            <label htmlFor="height" className="block text-sm font-medium text-gray-300 mb-1">Height</label>
            <input id="height" type="number" value={height} onChange={(e) => setHeight(e.target.value)} className="w-full px-4 py-2 bg-gray-900/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition" />
          </div>
        </div>

        {error && <p className="text-red-400 text-center mb-4">{error}</p>}
        
        <button onClick={handleGetImage} className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-800 transition-all duration-300 ease-in-out transform hover:scale-105 disabled:bg-gray-500 disabled:cursor-not-allowed" disabled={isLoading}>
          {isLoading ? 'Fetching...' : 'Get New Image'}
        </button>

        {imageUrl && !isLoading && (
          <div className="mt-8 p-6 bg-white/10 rounded-xl animate-fade-in">
            <h2 className="text-2xl font-bold text-center mb-4">Image Filters & Tools</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
              <div>
                <label htmlFor="filter" className="block text-sm font-medium text-gray-300 mb-1">Filter</label>
                <select id="filter" value={filter} onChange={(e) => setFilter(e.target.value)} className="w-full px-4 py-2 bg-gray-900/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition">
                  <option value="none">None</option>
                  <option value="grayscale">Grayscale</option>
                  <option value="sepia">Sepia</option>
                  <option value="blur">Blur (Simple)</option>
                </select>
              </div>
              <div className="flex items-center justify-center pt-6">
                 <label htmlFor="flip" className="flex items-center cursor-pointer">
                    <input id="flip" type="checkbox" checked={isFlipped} onChange={(e) => setIsFlipped(e.target.checked)} className="h-5 w-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                    <span className="ml-3 text-gray-300">Flip Image (Horizontal)</span>
                </label>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="mt-8 bg-black/30 min-h-[400px] flex items-center justify-center p-4 rounded-xl">
        {isLoading && <Spinner />}
        {!isLoading && imageUrl && (
          <img
            key={imageUrl}
            src={imageUrl}
            alt={keywords || 'A random image from Unsplash'}
            className={`
              transition-all duration-500 ease-in-out rounded-lg shadow-2xl object-contain max-w-full max-h-[600px]
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
        )}
         {!isLoading && !imageUrl && (
            <div className="text-center text-gray-400">
                <p>Your generated image will appear here.</p>
            </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
