import React, { useState } from 'react'
import { assets } from '../assets/assets.js'
import axios from 'axios'
import { backendUrl } from '../App.jsx'
import { toast } from 'react-toastify'

const Add = ({ token }) => {

  const [image1, setImage1] = useState(false)
  const [image2, setImage2] = useState(false)
  const [image3, setImage3] = useState(false)
  const [image4, setImage4] = useState(false)

  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [price, setPrice] = useState("")
  const [category, setCategory] = useState("Men")
  const [subCategory, setSubCategory] = useState("Topwear")
  const [bestSeller, setBestseller] = useState(false)
  const [sizes, setSizes] = useState([])

  const onSubmitHandler = async (e) => {

    e.preventDefault()

    try {

      const formData = new FormData()

      formData.append("name", name)
      formData.append("description", description)
      formData.append("price", price)
      formData.append("category", category)
      formData.append("subCategory", subCategory)
      formData.append("bestseller", bestSeller)
      formData.append("sizes", JSON.stringify(sizes))

      image1 && formData.append("image1", image1)
      image2 && formData.append("image2", image2)
      image3 && formData.append("image3", image3)
      image4 && formData.append("image4", image4)

      const response = await axios.post(
        backendUrl + "/api/product/add",
        formData,
        {
          headers: { token }
        }
      )

      if (response.data.success) {

        toast.success(response.data.message)

        setName("")
        setDescription("")
        setPrice("")
        setImage1(false)
        setImage2(false)
        setImage3(false)
        setImage4(false)
        setSizes([])
        setBestseller(false)

      } else {
        toast.error(response.data.message)
      }

    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }

  const sizeOptions = ["S", "M", "L", "XL", "XXL"]

  return (

    <form
      onSubmit={onSubmitHandler}
      className='flex flex-col w-full items-start gap-6 rounded-[28px] border border-slate-800 bg-slate-900 p-8 shadow-sm'
    >

      <h2 className='text-xl font-bold text-white'>Add New Product</h2>

      <div>
        <p className='mb-3 text-slate-300 font-medium'>Upload Image</p>

        <div className='flex gap-3'>

          {[
            [image1, setImage1, "image1"],
            [image2, setImage2, "image2"],
            [image3, setImage3, "image3"],
            [image4, setImage4, "image4"],
          ].map(([image, setImage, id]) => (
            <label
              key={id}
              htmlFor={id}
              className='w-20 h-20 rounded-xl border border-dashed border-slate-700 bg-slate-950 overflow-hidden flex items-center justify-center cursor-pointer hover:border-indigo-500 transition'
            >
              <img
                className='w-full h-full object-cover'
                src={!image ? assets.upload_area : URL.createObjectURL(image)}
                alt=""
              />
              <input
                onChange={(e) => setImage(e.target.files[0])}
                type="file"
                id={id}
                hidden
              />
            </label>
          ))}

        </div>
      </div>

      <div className='w-full'>
        <p className='mb-2 text-slate-300 font-medium'>Product Name</p>

        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          className='w-full max-w-[500px] px-4 py-3 rounded-xl'
          type="text"
          placeholder='Type here'
          required
        />
      </div>

      <div className='w-full'>
        <p className='mb-2 text-slate-300 font-medium'>Product Description</p>

        <textarea
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          className='w-full max-w-[500px] px-4 py-3 rounded-xl min-h-[100px]'
          placeholder='Write content here'
          required
        />
      </div>

      <div className='flex flex-col sm:flex-row gap-4 w-full sm:gap-8'>

        <div>
          <p className='mb-2 text-slate-300 font-medium'>Product Category</p>

          <select
            onChange={(e) => setCategory(e.target.value)}
            value={category}
            className='w-full px-4 py-3 rounded-xl'
          >
            <option value="Men">Men</option>
            <option value="Women">Women</option>
            <option value="Kids">Kids</option>
          </select>
        </div>

        <div>
          <p className='mb-2 text-slate-300 font-medium'>Sub Category</p>

          <select
            onChange={(e) => setSubCategory(e.target.value)}
            value={subCategory}
            className='w-full px-4 py-3 rounded-xl'
          >
            <option value="Topwear">Topwear</option>
            <option value="Bottomwear">Bottomwear</option>
            <option value="Winterwear">Winterwear</option>
          </select>
        </div>

        <div>
          <p className='mb-2 text-slate-300 font-medium'>Product Price</p>

          <input
            onChange={(e) => setPrice(e.target.value)}
            value={price}
            className='w-full px-4 py-3 rounded-xl sm:w-[120px]'
            type="number"
            placeholder='25'
          />
        </div>

      </div>

      <div>
        <p className='mb-3 text-slate-300 font-medium'>Product Sizes</p>

        <div className='flex gap-3'>

          {sizeOptions.map((size) => (
            <div
              key={size}
              onClick={() =>
                setSizes(prev =>
                  prev.includes(size)
                    ? prev.filter(item => item !== size)
                    : [...prev, size]
                )
              }
            >
              <p
                className={`px-4 py-2 rounded-xl border cursor-pointer font-medium transition-all duration-300 ${
                  sizes.includes(size)
                    ? "bg-indigo-600 border-indigo-500 text-white"
                    : "bg-slate-800 border-slate-700 text-slate-300 hover:border-slate-600"
                }`}
              >
                {size}
              </p>
            </div>
          ))}

        </div>
      </div>

      <div className='flex gap-3 items-center mt-2'>

        <input
          onChange={() => setBestseller(prev => !prev)}
          checked={bestSeller}
          type="checkbox"
          id="bestseller"
          className='w-4 h-4 accent-indigo-600'
        />

        <label
          className='cursor-pointer text-slate-300'
          htmlFor="bestseller"
        >
          Add to Bestseller
        </label>

      </div>

      <button
        type='submit'
        className='px-10 py-3 mt-4 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold transition-all duration-300 hover:-translate-y-0.5'
      >
        ADD PRODUCT
      </button>

    </form>
  )
}

export default Add
