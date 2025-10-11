import React from 'react'
import { useQuery } from '@tanstack/react-query';
import fetchTasks from '../Api';
import Navbar from '../components/Navbar';
import GeneralCard from '../components/GeneralCard';


function HomePage() {
const{data:results, loading, error} = useQuery({
    queryKey: ["results"],
    queryFn: fetchTasks,
    staleTime: 60 * 1000,
   
})
// const results = data?.results;
console.log(results)
  return (

    <div>
      <Navbar />
        <h1 className='font-bold text-2xl mt-8 mb-4 text-gray-800 text-center'>My Tasks</h1>
        {loading && <p>Loading...</p>}
        {error && <p>Title: Validation failed</p>}
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