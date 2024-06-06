import React, {useState, useEffect} from 'react'
import CyberCards from '../components/CyberCards'
import Pagination from '../components/Pagination'

const CyberNewsPage = () => {
    const [cyberNews, setCyberNews] = useState([])
    const [firstPage, setFirstPage] = useState(1)
    const pageSize = 12
    const [selectedCategory, setSelectedCategory] = useState(null)
    const [activeCategory, setActiveCategory] = useState(null)

    useEffect(() => {
      async function fetchNews() {
        let url = `http://localhost:4000/cybernews?page=${firstPage}&limit=${pageSize}`

        if(selectedCategory){
          url += `&category=${selectedCategory}`
        }
        const response = await fetch(url)
        const data = await response.json()
        setCyberNews(data)
      }

      fetchNews()
    }, [firstPage, pageSize, selectedCategory])

    const handlePageChange = (pageNumber) => {
      setFirstPage(pageNumber)
    }

    const handleCategoryChange = (category) => {
      setSelectedCategory(category)
      setFirstPage(1)
      setActiveCategory(category)
    }

  return (
    <div>
      <div>CyberNews Categories</div>
      <div>
        <CyberCards cyberNews={cyberNews} firstPage={firstPage} selectedCategory={selectedCategory} pageSize={pageSize} />
      </div>
      <div>
        <Pagination onPageChange={handlePageChange} firstPage={firstPage} cyberNews={cyberNews} pageSize={pageSize} />
      </div>
    </div>
  )
}

export default CyberNewsPage