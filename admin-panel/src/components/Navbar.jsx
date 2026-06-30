import React from 'react'
import {assets} from '../assets/assets.js'

const Navbar = ({setToken}) => {
  return (
    <div className='flex items-center py-4 px-[4%] justify-between border-b border-slate-800 bg-slate-900/80 backdrop-blur-xl sticky top-0 z-20'>
        <img className='w-[max(10%,80px)]' src={assets.logo} alt="" />
        <button
          onClick={()=>setToken('')}
          className='bg-indigo-600 hover:bg-indigo-700 transition-all duration-300 text-white px-5 py-2 sm:px-7 sm:py-2 rounded-full text-xs sm:text-sm font-semibold'
        >
          Logout
        </button>
    </div>
  )
}

export default Navbar
