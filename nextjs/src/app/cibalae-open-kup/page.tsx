import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import hr from '../../../messages/hr.json'
import { Metadata } from 'next'
import CibalaeOpenCupMain from '../sections/CibalaeOpenCupMain'

export const metadata: Metadata = {
    title: 'Powerlifting klub Galacticos - Cibalae Open Kup',
  };

const CibalaeOpenKup = () => {
  return (
    <main className="overflow-x-hidden">
        <Navbar t={hr}></Navbar>
        <CibalaeOpenCupMain t={hr}></CibalaeOpenCupMain>
        <Footer t={hr}></Footer>
    </main>
  )
}

export default CibalaeOpenKup