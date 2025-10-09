import React from 'react'
import Navbar from '../components/Navbar';
import fetchTasks from '../Api';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';


function DetailsPage() {
    // 1. Get the article ID (which is the article_id string) from the URL parameter
    const { id } = useParams();
    const articleId = id || null; 

    // 2. Use useQuery to get all data (leveraging the cache from HomePage)
    const { data, isLoading, isError, error } = useQuery({
        queryKey: ["results"], // Use the same key as HomePage to share cache
        queryFn: fetchTasks,
        staleTime: 60 * 1000 * 2, 
    });

    const allArticles = data?.results;
    
    // 3. Find the specific article using the unique article_id (string comparison)
    // We use && for short-circuiting: only run find() if allArticles exists.
    const result = allArticles && allArticles.find((r) => r.article_id === articleId);

    if (isLoading) {
        return <div className="p-10 text-center text-lg text-indigo-600">Loading Article Details...</div>;
    }

    if (isError) {
         return <div className="p-10 text-center text-red-600">Error loading data: {error.message}</div>;
    }
    
    // Check if ID was missing or if article was not found
    if (!result) {
        return (
            <div className="min-h-screen bg-gray-50">
                <Navbar />
                <div className="p-10 text-center text-xl text-red-700 mt-10 border border-red-300 bg-red-50 rounded-lg max-w-lg mx-auto shadow-md">
                    <p className="mb-2 font-semibold">Article not found.</p>
                    <p className="text-base text-gray-600">Please return to the <Link to="/" className="text-indigo-600 hover:underline">Home Page</Link>.</p>
                </div>
            </div>
        );
    }

    // 4. Render the details
    return (
      <div className="min-h-screen bg-gray-400">
            <Navbar />
            <div className="max-w-4xl mx-auto p-8 bg-white shadow-2xl rounded-xl mt-8 mb-8 border border-gray-100">
                <img 
                    src={result.image_url || `https://placehold.co/800x400/5B21B6/FFF?text=No+Image+Available`} 
                    alt={result.title} 
                    className="w-full h-96 object-cover rounded-lg mb-6 shadow-md" 
                    // Fallback for missing image URL
                    onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/800x400/5B21B6/FFF?text=No+Image+Available"; }}
                />
                
                {/* Source and Category Info */}
                <div className="flex justify-between items-center mb-4 text-sm text-gray-500">
                    <span className="font-semibold text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">{result.category?.[0] || 'Uncategorized'}</span>
                    <p>Source: <span className="font-medium text-gray-700">{result.source_name}</span></p>
                </div>
                
                {/* Title and Description */}
                <h1 className="text-4xl font-extrabold text-gray-900 my-4 leading-tight">{result.title}</h1>
                <p className="text-lg text-gray-700 mb-6 border-l-4 border-indigo-200 pl-4 italic">
                    {result.description}
                </p>
                
                {/* Footer and Link */}
                <div className="text-sm text-gray-500 border-t pt-4 flex justify-between items-center">
                    <p>Published: {new Date(result.pubDate).toLocaleDateString()}</p>
                    <a 
                        href={result.link} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="bg-indigo-600 text-white font-bold py-2 px-4 rounded-full shadow-lg hover:bg-indigo-700 transition duration-300 transform hover:scale-105"
                    >
                        Read Full Article &rarr;
                    </a>
                </div>
            </div>
        </div>
    );
}

export default DetailsPage;
