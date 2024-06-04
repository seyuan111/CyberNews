import React from 'react'
import {Link} from 'react-router-dom'

const CyberCards = ({cyberNews}) => {
    const filterCyberNews = cyberNews;

  return (
    <div>
        {
            filterCyberNews.map((cyber) => <Link key={cyber.id}>
                <img src={cyber.image} className="w-full"></img>
                <h3 className="mt-4 mb-2 font-bold cursor-pointer">{cyber.title}</h3>
                <p className="mb-2 text-neutral-600">{cyber.author}</p>
                <p>Published: {cyber.published_date}</p>
            </Link>)
        }
    </div>
  )
}

export default CyberCards