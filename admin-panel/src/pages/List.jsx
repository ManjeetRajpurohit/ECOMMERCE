import React, { useEffect, useState } from 'react'
import { backendUrl, currency } from '../App.jsx'
import axios from 'axios'
import { toast } from 'react-toastify'

const List = ({ token }) => {

  const [list, setList] = useState([])

  const fetchList = async () => {

    try {

      const response = await axios.get(
        backendUrl + '/api/product/list'
      )

      if (response.data.success) {

        setList(response.data.product)

      } else {

        toast.error(response.data.message)

      }

    } catch (error) {

      console.log(error)
      toast.error(error.message)

    }
  }

  const removeProduct = async (id) => {

    try {

      const response = await axios.post(
        backendUrl + '/api/product/remove',
        { id },
        {
          headers: { token }
        }
      )

      if (response.data.success) {

        toast.success(response.data.message)
        fetchList()

      } else {

        toast.error(response.data.message)

      }

    } catch (error) {

      console.log(error)
      toast.error(error.message)

    }
  }

  useEffect(() => {
    fetchList()
  }, [])

  return (

    <>
      <h2 className='mb-4 text-xl font-bold text-white'>All Products List</h2>

      <div className='flex flex-col gap-2 rounded-[28px] border border-slate-800 bg-slate-900 overflow-hidden shadow-sm'>

        {/* Table Header */}
        <div className='hidden sm:grid grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center py-3 px-5 bg-slate-800/60 text-sm text-slate-300'>
          <b className='font-semibold'>Image</b>
          <b className='font-semibold'>Name</b>
          <b className='font-semibold'>Category</b>
          <b className='font-semibold'>Price</b>
          <b className='font-semibold text-center'>Action</b>
        </div>

        {/* Product List */}
        {
          list.map((item, index) => (

            <div
              key={index}
              className='grid grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center gap-2 py-3 px-5 border-t border-slate-800 text-sm text-slate-300 hover:bg-slate-800/40 transition'
            >

              <img
                className='w-12 h-12 object-cover rounded-lg'
                src={item.image[0]}
                alt=""
              />

              <p className='text-slate-100'>{item.name}</p>

              <p>{item.category}</p>

              <p className='text-white font-medium'>{currency}{item.price}</p>

              <button
                onClick={() => removeProduct(item._id)}
                className='flex items-center justify-center md:justify-self-center w-9 h-9 rounded-full text-slate-400 hover:bg-red-500/10 hover:text-red-500 transition'
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 6h18" />
                  <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
                  <path d="M10 11v6" />
                  <path d="M14 11v6" />
                  <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" />
                </svg>
              </button>

            </div>

          ))
        }

      </div>
    </>
  )
}

export default List
