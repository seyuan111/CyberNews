import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'

const SideBar = () => {
    const [popularNews, setPopularNews] = useState([])

    useEffect(() => {
        fetch('http://localhost:4000/cybernews').then(res => res.json()).then(data => setPopularNews(data.slice(0,15)))
    }, [])

  return (
    <div className="border-l-2 px-6">
        <div>
            <h3 className="text-xl font-bold px-4 mb-4">Most Recent</h3>
            <div>
                {
                    popularNews.slice(0,5).map(news => <div key={news.id} className="my-8 border-spacing-2 px-4">
                            <h4 className="mb-6">{news.title}</h4>
                            <Link to="/about" className="hover:text-orange-700 border-2 px-4 py-2 rounded font-bold duration-300">Read More</Link>
                        </div>)
                }
            </div>
        </div>
    </div>
  )
}

export default SideBar