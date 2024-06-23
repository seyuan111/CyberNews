import React from 'react'
import {Link} from 'react-router-dom'

const CyberCards = ({cyberNews, firstPage, selectedCategory, pageSize}) => {
    const filterCyberNews = cyberNews.filter((cyber) => !selectedCategory || cyber.category === selectedCategory).slice((firstPage -1) * pageSize, firstPage * pageSize);

  return (
    <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
        {
            filterCyberNews.map((cyber) => <Link to={`/cybernews/${cyber.id}`} key={cyber.id} className="p-5 mx-4 shadow-lg bg-gray-100 rounded cursor-pointer">
                <img src={cyber.image} className="w-full rounded"></img>
                <h3 className="mt-4 mb-2 font-bold cursor-pointer">{cyber.title}</h3>
                <p className="mb-2 text-neutral-600">{cyber.author}</p>
                <p className="text-sm text-neutral-500">Published: {cyber.published_date}</p>
            </Link>)
        }
    </div>
  )
}

export default CyberCards