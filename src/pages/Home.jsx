import React from 'react'
import Banner from '../components/Banner'
import CyberNewsPage from '../components/CyberNewsPage'

const Home = () => {
  return (
    <div>
      <Banner />

      <div className="max-w-7xl mx-auto">
        <CyberNewsPage />
      </div>

    </div>
  )
}

export default Home