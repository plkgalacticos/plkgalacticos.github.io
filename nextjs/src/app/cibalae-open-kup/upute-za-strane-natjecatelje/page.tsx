import React from 'react'
import hr from '../../../../messages/hr.json'
import { Metadata } from 'next'
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import Instructions from '@/app/sections/Instructions';

export const metadata: Metadata = {
    title: 'Powerlifting klub Galacticos - Cibalae Open Kup',
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