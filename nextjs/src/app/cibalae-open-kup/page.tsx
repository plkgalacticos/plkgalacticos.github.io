import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import hr from '../../../messages/hr.json'
import Instructions from '../sections/Instructions'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'PLK Galacticos - Cibalae Open Kup',
  };

const CibalaeOpenKup = () => {
  return (
    <main className="overflow-x-hidden">
        <Navbar t={hr}></Navbar>
        <Instructions t={hr}></Instructions>
        <Footer t={hr}></Footer>
    </main>
  )
}

export default CibalaeOpenKup