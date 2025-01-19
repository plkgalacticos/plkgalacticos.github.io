import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Application from './Application'
import hr from '../../../messages/hr.json'

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