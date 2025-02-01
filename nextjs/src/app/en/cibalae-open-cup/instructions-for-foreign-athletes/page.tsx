import React from 'react'
import en from '../../../../../messages/en.json'
import Instructions from '@/app/sections/Instructions'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'PLK Galacticos - Cibalae Open Cup - Instructions for foreign athletes',
  };

const CibalaeOpenCup = () => {
  return (
    <main className=" bg-black text-white font-roboto flex flex-col overflow-hidden">
        <section className='px-4 py-8 pb-16 lg:px-16'>
            <Instructions t={en}></Instructions>
        </section>
    </main>
  )
}

export default CibalaeOpenCup