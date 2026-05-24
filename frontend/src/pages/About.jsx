import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsLetterBox'

export default function About() {

  return (
    <div>

      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>

        <img
          className='w-full md:max-w-[450px]'
          src={assets.about_img}
          alt=""
        />

        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>

          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Deserunt soluta earum vitae tempora repudiandae deleniti
            doloribus repellat quas perspiciatis? Eaque quibusdam
            assumenda ab, velit saepe architecto, beatae modi ipsam
            debitis illum dicta suscipit! Veniam architecto incidunt
            natus mollitia dolore laudantium modi aperiam. Blanditiis,
            mollitia molestiae?
          </p>

          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Veniam blanditiis et expedita deleniti, repudiandae vel cum
            adipisci fugit fuga. Harum voluptatibus quia, laudantium
            cupiditate, mollitia, sed saepe quibusdam magnam facilis
            culpa consequuntur! Ex quod perspiciatis quisquam sequi
            officia aliquid impedit animi suscipit vero recusandae
            debitis nisi omnis quibusdam tempora beatae qui quis
            nostrum ipsum architecto ducimus nobis nulla, laudantium
            soluta?
          </p>

          <b className='text-gray-800'>Our Mission</b>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Aut sunt nobis temporibus modi, velit est? Architecto
            officiis quia at soluta, alias voluptate? Vero,
            ab necessitatibus!
          </p>

        </div>

      </div>

      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>

        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance</b>

          <p className='text-gray-600'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Soluta, velit.
          </p>
        </div>

        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience</b>

          <p className='text-gray-600'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Soluta, velit.
          </p>
        </div>

        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service</b>

          <p className='text-gray-600'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Soluta, velit.
          </p>
        </div>

      </div>

      <NewsletterBox />

    </div>
  )
}