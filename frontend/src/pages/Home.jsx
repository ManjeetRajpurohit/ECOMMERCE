import React from 'react'
import Hero from '../components/Hero'
import LatestCollection from '../components/LatestCollection'
import BestSeller from '../components/BestSeller'
import Ourpolicy from '../components/Ourpolicy'
import NewsLetterBox from '../components/NewsLetterBox'
export default function Home() {
  return (
    <div>
      <Hero />
      <LatestCollection />
      <BestSeller/>
      <Ourpolicy/>
      <NewsLetterBox></NewsLetterBox>
    </div>
  )
}
