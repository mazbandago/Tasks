import React, { useEffect, useState } from 'react'
import DashboardNav from '../components/DashboardNav';

function PoliticsPage() {
  const[ghNews,setGhNews] = useState([]);

  useEffect(() =>{
    const gtvNews = async () =>{
      try {
        const response = await fetch("https://newsdata.io/api/1/latest?apikey=pub_7f5ac2b2fff4443a8ffbc7cee4a196bf&q=election&country=gh&language=en&category=politics")
        if(!response.ok){
          throw new Error("Network Issues, busy.")
        }
        const data = await response.json();
        setGhNews(data.results);
      } catch (error) {
        console.error("Can not fetch dat, try again later")
      }
    }
    gtvNews();
  },[])
  return (
    <div className='bg-gray-100 min-h-screen'>
      <div className='p-6 '>
        <h1 className='p-8 font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl text-gray-900 text-center'>Politics in Ghana</h1>
        <div className=''>
          {ghNews && ghNews.length > 0 && (
            ghNews.map((news) =>(
              <div key={news.article_id} className='mb-10 p-6 mx-auto max-w-4xl bg-white border-0 rounded-2xl shadow hover:shadow-lg/30 '>
                <img src={news.image_url} alt={news.source_name} className='w-full rounded-xl border hover:border-b-blue-500 shadow-xl transition-all duration-300 hover:scale-105 mb-8' />
                  <div className='flex justify-between items-center mb-4'>
                    <span className='border
                   rounded-4xl p-1 bg-black text-white shadow-lg/50 hover:bg-blue-700 '>Source:{news.source_name}</span>
                    <span className='border
                   rounded-4xl p-1 bg-black text-white shadow-lg/50 hover:bg-blue-700 sm:tex-sm '>Publish Date:{news.pubDate}</span>
                  </div>
                <h2 className='text-2xl font-extrabold mb-4 text-gray-950 '>{news.title}</h2>
                <p className='text-gray-900 font-semibold border-l-4 border-indigo-200 pl-4 italic mb-6'>{news.description}</p> 
                <a href={news.source_url} target='_blank'className='border p-3 rounded bg-red-500 text-white font-bold shadow-lg hover:bg-blue-700 '>Detail News</a>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  )
}

export default PoliticsPage;