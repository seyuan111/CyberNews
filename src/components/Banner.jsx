import React from 'react'
import {Link} from 'react-router-dom'

const Banner = () => {
  return (
    <div className="px-4 py-32 bg-neutral-800 mx-auto">
        <div className="text-white text-center">
            <h1 className="text-3xl lg:text-5xl leading-snug mb-5">Welcome to <span className="bg-gradient-to-r from-blue-300 to-blue-500 text-transparent bg-clip-text">CyberNews</span></h1>
            <p className="text-white lg:w-3/5 mx-auto mb-5">Start sharing your stories about your journey in cyber security. Share with others about what you did in Linux, Defcon, CyberSecurity groups, and what you achieved in CyberSecurity</p>
            <div>
              <Link to="/about" className="hover:text-orange-700 border rounded px-4 py-2 duration-300">About</Link>
            </div>
        </div>
    </div>
  )
}

export default Banner