import React from 'react'
import Navbar from '../components/Navbar';
import fetchTasks from '../Api';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';


function DetailsPage() {
    // using useparams hook to get the article id
    const { id } = useParams();
    const articleId = id || null; 

    // using usequery to fetch data
    const { data:results, isLoading, isError, error } = useQuery({
        queryKey: ["results"], 
        queryFn: fetchTasks,
        staleTime: 60 * 1000*4,
        cacheTime: 60*1000*5
    });

    const result = results && results.find((r) => r.article_id === articleId);

    if (isLoading) {
        return <div className="p-10 text-center text-lg text-indigo-600">Loading Article Details...</div>;
    }

    if (isError) {
         return <div className="p-10 text-center text-red-600">Error loading data: {error.message}</div>;
    }
    
    // Check if ID was missing or if article was not found
    if (!result) {
        return (
            <div className="min-h-screen  bg-gray-50">
                <Navbar />
                <div className="flex justify-center items-center max-w-3xl  p-10 text-xl text-red-700 mt-10 border border-red-300 bg-red-50 rounded-lg  mx-auto shadow-md">
                    <p className="mb-2 font-semibold w-full  ">Article not found.</p>
                </div>
            </div>
        );
    }

    return (
      <div className="min-h-screen bg-gray-50">
            <Navbar />
            <div className="max-w-4xl mx-auto p-8 bg-white shadow-2xl rounded-xl mt-8 mb-10 border border-gray-100">
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
                
                {/* Link to the main article */}
                <div className="text-sm text-gray-500 border-t pt-4 flex justify-between items-center">
                    <p>Published: <span className='font-extrabold text-gray-900'>{new Date(result.pubDate).toLocaleDateString()}</span></p>
                    <p>Author:<span className='font-extrabold text-gray-900'>{result.creator}</span></p>
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
