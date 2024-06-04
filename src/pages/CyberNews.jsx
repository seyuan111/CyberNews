import React from 'react'
import CyberNewsPage from '../components/CyberNewsPage'

const CyberNews = () => {
  return (
    <div>
      <div className="py-40 bg-neutral-800 text-center text-white px-4">
        <h1 className="text-3xl lg:text-5xl leading-snug mb-5">News on <span className="bg-gradient-to-r from-blue-300 to-blue-500 text-transparent bg-clip-text">Cyber Security</span></h1>
      </div>

      <div className="max-w-7xl mx-auto">
        <CyberNewsPage />
      </div>
    </div>
  )
}

export default CyberNews