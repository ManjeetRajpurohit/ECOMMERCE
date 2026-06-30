import React, { useState } from 'react'
import axios from 'axios'
import { backendUrl } from '../App.jsx'
import { toast } from 'react-toastify'
import { assets } from '../assets/assets.js'

const Login = ({ setToken }) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const onSubmitHandler = async (e) => {
        try {
            e.preventDefault()

            const response = await axios.post(
                backendUrl + '/api/user/admin',
                { email, password }
            )

            if (response.data.success) {
                setToken(response.data.token)
            } else {
                toast.error(response.data.message)
            }

        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }
    }

    return (
        <div className='min-h-screen flex items-center justify-center w-full bg-slate-950 px-4'>
            <div className='w-full max-w-md rounded-[28px] border border-slate-800 bg-slate-900 shadow-2xl px-8 py-10'>

                <img src={assets.logo} alt="" className='w-40 mx-auto mb-8' />

                <h1 className='text-2xl font-bold mb-6 text-white text-center'>
                    Admin Login
                </h1>

                <form onSubmit={onSubmitHandler} className='flex flex-col gap-4'>

                    <div>
                        <p className='text-sm font-medium text-slate-300 mb-2'>
                            Email Address
                        </p>

                        <input
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            className='rounded-xl w-full px-4 py-3 border border-slate-700 bg-slate-950 text-white outline-none focus:border-indigo-500 transition'
                            type="email"
                            placeholder='Enter Your Email Address'
                            required
                        />
                    </div>

                    <div>
                        <p className='text-sm font-medium text-slate-300 mb-2'>
                            Password
                        </p>

                        <input
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            className='rounded-xl w-full px-4 py-3 border border-slate-700 bg-slate-950 text-white outline-none focus:border-indigo-500 transition'
                            type="password"
                            placeholder='Enter Your Password'
                            required
                        />
                    </div>

                    <button
                        className='mt-3 w-full py-3 px-4 rounded-xl text-white bg-indigo-600 hover:bg-indigo-700 font-semibold transition-all duration-300 hover:-translate-y-0.5'
                        type="submit"
                    >
                        Login
                    </button>

                </form>
            </div>
        </div>
    )
}

export default Login
