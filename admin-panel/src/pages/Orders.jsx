import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import { backendUrl, currency } from '../App.jsx'
import { assets } from '../assets/assets.js'

const Orders = ({ token }) => {

  const [orders, setOrders] = useState([])

  const fetchAllOrders = async () => {

    if (!token) {
      return null
    }

    try {

      const response = await axios.post(
        backendUrl + '/api/order/list',
        {},
        { headers: { token } }
      )

      if (response.data.success) {

        setOrders(response.data.orders)

      } else {

        toast.error(response.data.message)

      }

    } catch (error) {

      console.log(error)
      toast.error(error.message)

    }

  }
  const statusHandler=async (e,orderId)=>{
    try{
         const response=await axios.post(backendUrl+'/api/order/status',{orderId,status:e.target.value},{headers:{token}})
         if(response.data.success){
          await fetchAllOrders()
         }
    }catch(error){
        console.log(error);
        toast.error(error.message)
    }
  }

  useEffect(() => {
    fetchAllOrders()
  }, [token])

  return (

    <div>

      <h3 className='text-xl font-bold mb-6 text-white'>Order Page</h3>

      <div className='flex flex-col gap-4'>

        {

          orders.map((order, index) => (

            <div
              key={index}
              className='grid grid-cols-1 sm:grid-cols-[0.5fr_2fr_1fr] lg:grid-cols-[0.5fr_2fr_1fr_1fr_1fr] gap-4 items-start rounded-[24px] border border-slate-800 bg-slate-900 p-6 md:p-8 text-sm text-slate-300 shadow-sm'
            >

              <div className='w-12 h-12 rounded-xl overflow-hidden border border-slate-700'>
                <img
                  className='w-full h-full object-cover'
                  src={assets.parcel_icon}
                  alt=""
                />
              </div>

              <div>

                <div>

                  {

                    order.items.map((item, index) => (

                      <p className='py-0.5 text-slate-300' key={index}>

                        {item.name} x {item.quantity}

                        <span> {item.size}</span>

                        {index !== order.items.length - 1 && ','}

                      </p>

                    ))

                  }

                </div>

                <p className='mt-3 mb-2 font-medium text-white'>

                  {order.address.firstName + " " + order.address.lastName}

                </p>

                <div>

                  <p>{order.address.street}</p>

                  <p>

                    {order.address.city},
                    {order.address.state},
                    {order.address.country},
                    {order.address.zipcode}

                  </p>

                </div>

                <p>{order.address.phone}</p>

              </div>

              <div>

                <p className='text-sm sm:text-[15px]'>

                  Items : {order.items.length}

                </p>

                <p className='mt-3'>

                  Method : {order.paymentMethod}

                </p>

                <p>

                  Payment : <span className={order.payment ? 'text-emerald-400' : 'text-amber-400'}>{order.payment ? 'Done' : 'Pending'}</span>

                </p>

                <p>

                  Date : {new Date(order.date).toLocaleDateString()}

                </p>

              </div>

              <p className='text-sm sm:text-[15px] font-semibold text-white'>

                {currency}{order.amount}

              </p>

              <select
               onChange={(e)=>statusHandler(e,order._id)}
                value={order.status}
                className='px-3 py-2 rounded-xl font-medium text-sm'
              >

                <option value="Order Placed">
                  Order Placed
                </option>

                <option value="Packing">
                  Packing
                </option>

                <option value="Shipped">
                  Shipped
                </option>

                <option value="Out For Delivery">
                  Out For Delivery
                </option>

                <option value="Delivered">
                  Delivered
                </option>

              </select>

            </div>

          ))

        }

      </div>

    </div>

  )

}

export default Orders
