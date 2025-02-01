import React from 'react'
import hr from '../../../../messages/hr.json'
import { Metadata } from 'next'
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import Nominations from '@/app/sections/Nominations';

export const metadata: Metadata = {
    title: 'PLK Galacticos - Cibalae Open Kup - Nominacije',
  };

const CibalaeOpenKup = () => {
  return (
    <main className="overflow-x-hidden">
        <Navbar t={hr}></Navbar>
        <Nominations t={hr}></Nominations>
        <Footer t={hr}></Footer>
    </main>
  )
}

export default CibalaeOpenKup