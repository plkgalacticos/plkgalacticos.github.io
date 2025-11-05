import React from 'react'
import en from '../../../../messages/en.json'
import { Metadata } from 'next'
import CibalaeOpenCupMain from '@/app/sections/CibalaeOpenCupMain';

export const metadata: Metadata = {
    title: 'Powerlifting klub Galacticos - Cibalae Open Cup',
  };

const CibalaeOpenCup = () => {
  return (
    <main className=" bg-black text-white font-roboto flex flex-col overflow-x-hidden">
        <section className=''>
            <CibalaeOpenCupMain t={en}></CibalaeOpenCupMain>
        </section>
    </main>
  )
}

export default CibalaeOpenCup