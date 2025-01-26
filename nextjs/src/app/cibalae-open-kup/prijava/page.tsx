import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import hr from '../../../../messages/hr.json'
import Application from '@/app/sections/Application'

const page = () => {
  return (
    <main>
     <Navbar t={hr}></Navbar>
     <Application t={hr}></Application>
     <Footer t={hr}></Footer>
   </main>
  )
}

export default page