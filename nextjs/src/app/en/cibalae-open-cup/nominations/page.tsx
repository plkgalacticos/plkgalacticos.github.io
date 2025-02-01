import React from 'react'
import en from '../../../../../messages/en.json'
import { Metadata } from 'next'
import Nominations from '@/app/sections/Nominations';

export const metadata: Metadata = {
    title: 'PLK Galacticos - Cibalae Open Cup Nominations',
  };

const CibalaeOpenCup = () => {
  return (
    <main className=" bg-black text-white font-roboto flex flex-col overflow-hidden">
        <section className='overflow-hidden'>
            <Nominations t={en}></Nominations>
        </section>
    </main>
  )
}

export default CibalaeOpenCup