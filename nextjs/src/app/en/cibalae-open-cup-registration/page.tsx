import React from 'react'
import Navbar from '@/app/components/Navbar'
import Footer from '@/app/components/Footer'
import en from '../../../../messages/en.json'
import Application from '@/app/prijava/Application'

const page = () => {
  return (
    <main className='overflow-hidden'>
     <Application t={en}></Application>
    </main>
  )
}

export default page