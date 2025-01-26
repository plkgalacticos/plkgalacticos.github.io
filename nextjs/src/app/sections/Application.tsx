'use client'
import React from 'react'
import CompetitionForm from '../components/CompetitionForm'

const Application = ({t}) => {
  const tNav = t['nav']
  t = t['application']
  return (
    <div className='bg-black text-white px-4 w-full pb-24 pt-32 overflow-x-hidden'>
        <h1 className='heading-text text-center z-[100]'>{t['h']}</h1>
        <CompetitionForm t={t} tNav={tNav}></CompetitionForm>
    </div>
  )
}

export default Application