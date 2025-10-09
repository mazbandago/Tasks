import React from 'react'
import { Link } from 'react-router-dom';


function GeneralCard({result}) {
  return (
    <Link to={`/Details/${result.article_id}`}>
      <img src={result.image_url} alt= {result.source_name} />
      <div>
        <h2>{result.title}</h2>
        <p>{result.description}</p>
      </div>
    </Link> 
  )
}

export default GeneralCard;