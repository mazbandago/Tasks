import React from 'react'
import { Link } from 'react-router-dom';


function GeneralCard({result}) {
  return (
    <Link to={`/Details/${result.article_id}`}>
      <div className ='p-6 mx-auto max-w-3xl bg-white shadow-2xl mb-4 rounded-2xl border hover:border-blue-300 transition-all transform duration-300 group-hover:scale-[1.02] hover:shadow-lg/500' >
      <img src={result.image_url} alt= {result.source_name} className='w-full h-85 object-cover shadow-lg transition-transform duration-300 hover:scale-105 rounded-xl mb-6 ' />
      <div>
        <h2 className='text-2xl font-extrabold text-gray-700 mb-6'>{result.title}</h2>
        <p className='text-gray-400 text-xl mb-6  border-l-4 pl-3 border-blue-400 italic'>{result.description}</p>
      </div>
      </div>
    </Link> 
  )
}

export default GeneralCard;