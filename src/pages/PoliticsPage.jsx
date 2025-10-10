import React from 'react'

function PoliticsPage() {
  return (
    <div>This is the politics page</div>
  )
}

export default PoliticsPage;


// import React, { useState, useMemo } from 'react'
// import { useQuery } from '@tanstack/react-query';
// import fetchTasks from '../../Api'; // Corrected path assuming API.js is in the root
// import Navbar from './Navbar'; // Corrected path assuming Navbar is in the same folder
// import GeneralCard from './GeneralCard'; // Corrected path assuming GeneralCard is in the same folder


// function HomePage() {
//     // State for filtering
//     const [searchTerm, setSearchTerm] = useState('');
//     const [selectedCategory, setSelectedCategory] = useState('All');

//     // Available categories (must match API categories or 'All')
//     const categories = ['All', 'sports', 'politics', 'education'];

//     const { data, isLoading, error } = useQuery({
//         queryKey: ["results"],
//         queryFn: fetchTasks,
//         staleTime: 60 * 1000 * 2,
//     });

//     const results = data?.results;

//     // Use useMemo to filter results based on state changes (searchTerm and selectedCategory)
//     const filteredResults = useMemo(() => {
//         if (!results) return [];

//         let filtered = results;

//         // 1. Filter by Category
//         if (selectedCategory !== 'All') {
//             filtered = filtered.filter(result =>
//                 // The API result.category is an array, so we use .some() to check if it includes the selected category
//                 result.category?.some(cat => cat.toLowerCase() === selectedCategory.toLowerCase())
//             );
//         }

//         // 2. Filter by Search Term (Title or Description)
//         if (searchTerm) {
//             const lowerSearchTerm = searchTerm.toLowerCase();
//             filtered = filtered.filter(result =>
//                 result.title?.toLowerCase().includes(lowerSearchTerm) ||
//                 result.description?.toLowerCase().includes(lowerSearchTerm)
//             );
//         }

//         return filtered;
//     }, [results, selectedCategory, searchTerm]);

//     return (
//         <div className='min-h-screen bg-gray-50'>
//             <Navbar />
//             <div className="max-w-6xl mx-auto p-4">
//                 <h1 className='font-bold text-3xl mt-8 mb-6 text-gray-800 text-center'>Latest News Articles</h1>

//                 {/* --- Filtering Controls --- */}
//                 <div className="mb-8 p-6 bg-white rounded-xl shadow-lg border border-gray-100">
                    
//                     {/* Search Bar */}
//                     <input
//                         type="text"
//                         placeholder="Search articles by title or description..."
//                         value={searchTerm}
//                         onChange={(e) => setSearchTerm(e.target.value)}
//                         className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 transition duration-150"
//                     />

//                     {/* Category Filters */}
//                     <div className="flex flex-wrap justify-center gap-3">
//                         {categories.map((cat) => (
//                             <button
//                                 key={cat}
//                                 onClick={() => setSelectedCategory(cat)}
//                                 className={`
//                                     px-4 py-2 text-sm font-semibold rounded-full transition duration-150
//                                     ${selectedCategory === cat
//                                         ? 'bg-indigo-600 text-white shadow-md'
//                                         : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
//                                     }
//                                 `}
//                             >
//                                 {cat.charAt(0).toUpperCase() + cat.slice(1)}
//                             </button>
//                         ))}
//                     </div>
//                 </div>
//                 {/* --- End Filtering Controls --- */}

//                 {/* --- Content Display --- */}
//                 {isLoading && <p className="text-center text-indigo-600 font-medium p-4">Loading news articles...</p>}
//                 {error && <p className="text-center text-red-600 font-medium p-4">Error: Failed to fetch articles.</p>}
                
//                 <div className='space-y-6'>
//                     {/* Render filtered articles */}
//                     {filteredResults.length > 0 ? (
//                         filteredResults.map((result) => (
//                             <GeneralCard key={result.article_id} result={result}/>
//                         ))
//                     ) : (
//                         !isLoading && !error && (
//                              <div className="text-center p-10 bg-white rounded-xl shadow-md">
//                                 <p className="text-xl text-gray-600">No articles match your current filters.</p>
//                             </div>
//                         )
//                     )}
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default HomePage;
