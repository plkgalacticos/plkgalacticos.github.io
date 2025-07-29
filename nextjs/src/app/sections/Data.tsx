import React from 'react'
import Counter from '../components/Counter'

const Data = ({t}) => {
  t = t['hero']['data']
  return (
    <section className='flex flex-col md:flex-row flex-wrap justify-evenly items-center gap-12'>
        <div className='w-full max-w-64 min-h-32 rounded-md gradient-yellow'>
            <p className='text-3xl lg:text-4xl font-extrabold'><Counter targetValue={37}></Counter></p>
            <p className='text-xl lg:text-2xl'>{t['h1']}</p>
        </div>

        <div className='w-full max-w-64 min-h-32 rounded-md gradient-yellow'>
            <p className='text-3xl lg:text-4xl font-extrabold'><Counter targetValue={114}></Counter></p>
            <p className='text-xl lg:text-2xl'>{t['h2']}</p>
        </div>

        <div className='w-full max-w-64 min-h-32 rounded-md gradient-yellow'>
            <p className='text-3xl lg:text-4xl font-extrabold'><Counter targetValue={15}></Counter></p>
            <p className='text-xl lg:text-2xl'>{t['h3']}</p>
        </div>

        <div className='w-full max-w-64 min-h-32 rounded-md gradient-yellow'>
            <p className='text-3xl lg:text-4xl font-extrabold'><Counter targetValue={17}></Counter></p>
            <p className='text-xl lg:text-2xl'>{t['h4']}</p>
        </div>
    </section>
  )
}

export default Data