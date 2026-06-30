import React from 'react'
import { NavLink } from 'react-router-dom'
import { assets } from '../assets/assets.js'

const Sidebar = () => {
  return (
    <div className='w-[18%] min-h-screen border-r border-slate-800 bg-slate-900/40'>
        <div className='flex flex-col gap-3 pt-6 px-[12%] text-[15px]'>

          <NavLink
            className={({isActive}) =>
              `flex items-center gap-3 border px-3 py-3 rounded-xl transition-all duration-300 ${
                isActive
                  ? 'border-indigo-500 bg-indigo-600/20 text-white'
                  : 'border-slate-800 text-slate-300 hover:border-slate-700 hover:bg-slate-800'
              }`
            }
            to='/add'
          >
            <img className='w-5 h-5 brightness-0 invert' src={assets.add_icon} alt="" />
            <p className='hidden md:block'>Add Items</p>
          </NavLink>

          <NavLink
            className={({isActive}) =>
              `flex items-center gap-3 border px-3 py-3 rounded-xl transition-all duration-300 ${
                isActive
                  ? 'border-indigo-500 bg-indigo-600/20 text-white'
                  : 'border-slate-800 text-slate-300 hover:border-slate-700 hover:bg-slate-800'
              }`
            }
            to='/list'
          >
            <img className='w-5 h-5 brightness-0 invert' src={assets.order_icon} alt="" />
            <p className='hidden md:block'>List Items</p>
          </NavLink>

          <NavLink
            className={({isActive}) =>
              `flex items-center gap-3 border px-3 py-3 rounded-xl transition-all duration-300 ${
                isActive
                  ? 'border-indigo-500 bg-indigo-600/20 text-white'
                  : 'border-slate-800 text-slate-300 hover:border-slate-700 hover:bg-slate-800'
              }`
            }
            to='/orders'
          >
            <img className='w-5 h-5 brightness-0 invert' src={assets.order_icon} alt="" />
            <p className='hidden md:block'>Orders</p>
          </NavLink>

        </div>
    </div>
  )
}

export default Sidebar
