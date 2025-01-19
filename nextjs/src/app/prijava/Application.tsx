'use client'
import React from 'react'
import CompetitionForm from '../components/CompetitionForm'

const Application = ({t}) => {
  t = t['application']
  return (
    <div className='bg-black text-white px-4 w-full py-8 pt-32'>
        <h1 className='heading-text text-center'>{t['h']}</h1>
        <CompetitionForm t={t}></CompetitionForm>
    </div>
  )
}

export default Application