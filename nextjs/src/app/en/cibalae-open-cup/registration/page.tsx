import React from 'react'
import en from '../../../../../messages/en.json'
import Application from '@/app/sections/Application'
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'PLK Galacticos - Cibalae Open Cup Registration',
  };
  
const page = () => {
  return (
    <main className='overflow-hidden'>
     <Application t={en}></Application>
    </main>
  )
}

export default page