import { useQuery } from '@tanstack/react-query';
import React, { useMemo, useState } from 'react'
import fetchTasks from '../Api';
import GeneralCard from '../components/GeneralCard';


function FootballPage() {
  const[searchNews, setSearchNews] = useState("");
  const[selectCategory, setSelectCategory] = useState("All");

  const categories = ["All","sports","politics","education"];

  const{data:results, isloading,error} = useQuery({
    queryKey: ["results"],
    queryFn: fetchTasks,
    staleTime:1000*60*5,
    cacheTime:1000*60*10
  })

  let filtered = results;

  const filterNews = useMemo(() => {
    if(selectCategory !=="All"){
      filtered = filtered.filter((result) => result.category?.some(cate=>cate===selectCategory))
    }
    
    if(searchNews){
    const lowerCaseSearchNews= searchNews.toLowerCase();
    filtered = filtered.filter(result => 
    result.title?.toLowerCase().includes(lowerCaseSearchNews) ||
    result.description?.toLowerCase().includes(lowerCaseSearchNews))
    };
    return filtered;

  },[results,searchNews,selectCategory])
  return (
  <div className='min-h-screen bg-gray-300'>
    <div className="max-w-4xl mx-auto p-4 border-0">
      <h1 className='font-bold text-2xl text-gray-800 text-center mx-auto mb-8 mt-8'>Select News Articles Based on Category and Search Input</h1>
      <div className="mb-8 p-6 bg-white rounded-xl shadow-lg border border-gray-500">
        <input type="text" placeholder='Enter your search here' value={searchNews} onChange={(e)=>setSearchNews(e.target.value)} className='p-4 border border-gray-400 rounded-xl w-full shadow-2xl transition duration-300 focus:ring-gray-700 focus:border-indigo-500 mb-8'/>
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((cate) => (
            <button key={cate}
            onClick={()=>setSelectCategory(cate)}
            className={`
            px-4 py-2 text-sm font-semibold rounded-full transition duration-150 border-2
            ${selectCategory===cate ? 
            'bg-amber-600 text-white shadow-md':
            'bg-gray-200 text-gray-700 hover:bg-gray-300 '
            }`    
          } 
            >
            {cate.charAt(0).toUpperCase() + cate.slice(1)}  
            </button>
          ))}
        </div>
      </div>
   
        {isloading && <p className='p-12 mt-40 mx-auto w-lg font-bold text-2xl border rounded-2xl h-50 text-center shadow-xl/30 hover:shadow-amber-200 hover:bg-indigo-700'>YOur article is loading.....</p>}
        {error && <p className='p-12 mt-40 mx-auto w-lg font-bold text-2xl border rounded-2xl h-50 text-center shadow-xl/30 hover:shadow-amber-200 hover:bg-indigo-700'>Error: Failed to filter news articles</p>}
      <div>
        {filterNews && (
          filterNews.map((result)=> (
            <GeneralCard key={result.article_id} result={result}/>
          ))
        )}
      </div>

    </div>
  </div>

  )
}

export default FootballPage;