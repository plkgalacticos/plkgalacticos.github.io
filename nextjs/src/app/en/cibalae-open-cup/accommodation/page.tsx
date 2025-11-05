import React from 'react'
import Accommodation from '@/app/sections/Accommodation'
import en from '../../../../../messages/en.json'
import { Metadata } from 'next'


export const metadata: Metadata = {
    title: 'Powerlifting klub Galacticos - Cibalae Open Cup Accommodation',
  };
  
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