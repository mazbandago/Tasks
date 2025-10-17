import React from 'react'
import { useQuery } from '@tanstack/react-query';
import fetchTasks from '../Api';
import Navbar from '../components/Navbar';
import GeneralCard from '../components/GeneralCard';


function HomePage() {
const{data:results, loading, error} = useQuery({
    queryKey: ["results"],
    queryFn: fetchTasks,
    staleTime: 60 * 1000 * 5,
    cacheTime: 60 * 1000 * 10
   
})
  return (
    <div>
      <Navbar />
        <h1 className='font-bold text-2xl mt-8 mb-4 text-gray-800 text-center'>General News Feed</h1>
        {loading && <p className='p-12 mt-40 mx-auto w-lg font-bold text-2xl border rounded-2xl h-50 text-center shadow-xl/30 hover:shadow-amber-200 hover:bg-indigo-700'>Loading...</p>}
        {error && <p className='p-12 mt-40 mx-auto w-lg font-bold text-2xl border rounded-2xl h-50 text-center shadow-xl/30 hover:shadow-amber-200 hover:bg-indigo-700'>SORRY CAN NOT FETCH LATEST NEWS, TRY AGAIN ANOTHER TIME</p>}
        <div className='mx-auto min-h-screen'>
        {results && results.length > 0 && (
            results.map((result) => (
              <GeneralCard key={result.article_id} result={result}/>
            ))
        )}
        </div>
    </div>
  )
}

export default HomePage;