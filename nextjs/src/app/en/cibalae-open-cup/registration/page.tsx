import React from 'react'
import en from '../../../../../messages/en.json'
import Application from '@/app/sections/Application'

const page = () => {
  return (
    <main className='overflow-hidden'>
     <Application t={en}></Application>
    </main>
  )
}

export default page