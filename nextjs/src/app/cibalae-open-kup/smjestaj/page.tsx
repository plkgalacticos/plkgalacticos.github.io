import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import hr from '../../../../messages/hr.json'
import Accommodation from '@/app/sections/Accommodation'

const page = () => {
  return (
    <main className=''>
     <Navbar t={hr}></Navbar>
     <div className='bg-black text-white'>
        <Accommodation t={hr}></Accommodation>
     </div>
     <Footer t={hr}></Footer>
   </main>
  )
}

export default page