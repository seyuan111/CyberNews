import React, {useState, useEffect} from 'react'
import CyberCards from '../components/CyberCards'
import Pagination from '../components/Pagination'
import CategorySelection from '../components/CategorySelection'
import SideBar from '../components/SideBar'

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
      <div>
        <CategorySelection onSelectCategory={handleCategoryChange} selectedCategory={selectedCategory} activeCategory={activeCategory}/>
      </div>
      <div className="flex flex-col lg:flex-row gap-12">
        <CyberCards cyberNews={cyberNews} firstPage={firstPage} selectedCategory={selectedCategory} pageSize={pageSize} />

        <div>
          <SideBar />
        </div>

      </div>
      <div>
        <Pagination onPageChange={handlePageChange} firstPage={firstPage} cyberNews={cyberNews} pageSize={pageSize} />
      </div>
    </div>
  )
}

export default CyberNewsPage