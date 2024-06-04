import React, {useState} from 'react'
import {NavLink} from 'react-router-dom'
import { FaFacebook, FaLinkedinIn, FaInstagram, FaDiscord, FaBars, FaX   } from "react-icons/fa6";

const NavBar = () => {
  const [openMenu, setOpenMenu] = useState(false)

  const toggleMenu = () => {
    setOpenMenu(!openMenu)
  }

    const navItems = [
        {path: '/', link: "Home"},
        {path: '/about', link: "About"},
        {path: '/contact', link: "Contact"},
        {path: '/cybernews', link: "Cybernews"},
        {path: '/login', link: "Login"},
    ]
  return (
    <div className="bg-neutral-800 fixed top-0 right-0 left-0">
        <nav className="px-4 py-4 max-w-7xl mx-auto flex justify-between items-center">
            <a href="/"><span className="border-2 rounded px-4 py-2 text-xl font-bold text-white">CyberNews</span></a>

            <ul className="md:flex gap-10 text-lg hidden font-bold">
              {
                navItems.map(({path, link}) => <li className="text-white hover:text-orange-700 duration-300" key={path}>
                <NavLink to={path}>{link}</NavLink>
                </li>)
              }
            </ul>

            <div className="text-white lg:flex gap-4 items-center hidden">
              <a href="/" className="hover:text-orange-700 duration-300"><FaFacebook /></a>
              <a href="/" className="hover:text-orange-700 duration-300"><FaLinkedinIn /></a>
              <a href="/" className="hover:text-orange-700 duration-300"><FaInstagram /></a>
              <a href="/" className="hover:text-orange-700 duration-300"><FaDiscord /></a>
            </div>

            <div className="md:hidden">
              <button onClick={toggleMenu} className="cursor-pointer">
                {
                  openMenu ? <FaX className="w-5 h-5 text-white" /> : <FaBars className="w-5 h-5 text-white" />
                }
              </button>
            </div>
        </nav>

        <div>
          <ul className={`first:md:hidden gap-10 text-lg font-bold block space-y-4 px-4 py-6 mt-14 bg-white ${openMenu ? "fixed top-0 left-0 w-full transition-all ease-out duration-300" : "hidden"}`}>
            {
              navItems.map(({path, link}) => <li className="text-black hover:text-orange-700 duration-300" key={path}>
                <NavLink onClick={toggleMenu} to={path}>{link}</NavLink>
              </li>)
        }
          </ul>
        </div>

    </div>
  )
}

export default NavBar