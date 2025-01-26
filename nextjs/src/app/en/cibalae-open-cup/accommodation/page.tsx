import React from 'react'
import Accommodation from '@/app/sections/Accommodation'
import Navbar from '@/app/components/Navbar'
import Footer from '@/app/components/Footer'
import en from '../../../../../messages/en.json'

const page = () => {
  return (
    <main className=''>
     <div className='bg-black text-white'>
        <Accommodation t={en}></Accommodation>
     </div>
   </main>
  )
}

export default page