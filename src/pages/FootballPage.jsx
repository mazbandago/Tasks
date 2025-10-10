import React, { useState } from 'react'

function FootballPage() {
  const[searchNews, setSearchNews] = useState("");
  const[selectCategory, setSelectCategory] = useState("All");

  const categories = ["All","sports","politics","education"];


console.log(searchNews)

  return (
    <div className='min-h-screen bg-gray-50'>
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
    </div>
    </div>
  )
}

export default FootballPage;