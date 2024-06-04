import React, {useState, useEffect} from 'react'
import CyberCards from '../components/CyberCards'

const CyberNewsPage = () => {
    const [cyberNews, setCyberNews] = useState([])

    useEffect(() => {
      async function fetchNews() {
        let url = `http://localhost:4000/cybernews`

        const response = await fetch(url)
        const data = await response.json()
        setCyberNews(data)
      }

      fetchNews()
    }, [])

  return (
    <div>
      <div>CyberNews Categories</div>
      <div>
        <CyberCards cyberNews={cyberNews} />
      </div>
      <div>Others</div>
    </div>
  )
}

export default CyberNewsPage