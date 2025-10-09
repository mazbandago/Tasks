import React from 'react'
import { useQuery } from '@tanstack/react-query';
import fetchTasks from '../Api';
import Navbar from '../components/Navbar';
import GeneralCard from '../components/GeneralCard';


function HomePage() {
const{data, loading, error} = useQuery({
    queryKey: ["results"],
    queryFn: fetchTasks,
    staleTime: 60 * 1000 * 2,
   
})
const results = data?.results;
console.log(results)
  return (

    <div>
      <Navbar />
        <h1>My Tasks</h1>
        {loading && <p>Loading...</p>}
        {error && <p>Title: Validation failed</p>}
        {results && results.length > 0 && (
            results.map((result) => (
              <GeneralCard key={result.article_id} result={result}/>
            ))
        )}
    </div>
  )
}

export default HomePage;