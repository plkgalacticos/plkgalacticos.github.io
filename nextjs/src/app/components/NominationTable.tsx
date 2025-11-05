'use client'
import React, { useState } from 'react'
import { BENCH_ONLY, FEMALE, FULL_POWER, JUNIOR, MALE, MASTER_I, MASTER_II, nominations, OPEN, SUB_JUNIOR } from '../constants/nominationData';
import { Nomination } from '../constants/nomination';

const NominationTable = ({t}) => {
   
    const [competitionType, setCompetitionType] = useState(FULL_POWER);
    const [gender, setGender] = useState(MALE);
    const [category, setCategory] = useState(OPEN);
    const [table, setTable] = useState(nominations[FULL_POWER][MALE][OPEN])

  return (
    <div className='bg-icon bg-repeat bg-blend-darken bg-black/70 w-full lg:px-24 py-24'>
        <div className="max-container-sm">
            <div className='flex flex-row justify-center items-center gap-4'>
                <button className={`${competitionType == FULL_POWER ? 'btn hover:bg-logo-yellow' : 'btn-secondary'} w-full`} onClick={() => {setCompetitionType(FULL_POWER); setTable(nominations[FULL_POWER][gender][category])}}>{t['powerlifting']}</button>
                <button className={`${competitionType == BENCH_ONLY ? 'btn hover:bg-logo-yellow' : 'btn-secondary'} w-full`} onClick={() => {setCompetitionType(BENCH_ONLY); setTable(nominations[BENCH_ONLY][gender][category])}}>{t['bench']}</button>
            </div>
        
            <div className='flex flex-row justify-center items-center gap-4 mt-8'>
                <button className={`${gender == MALE ? 'btn hover:bg-logo-yellow' : 'btn-secondary'} w-full`} onClick={() => {setGender(MALE); setTable(nominations[competitionType][MALE][category])}}>{t['male']}</button>
                <button className={`${gender == FEMALE ? 'btn hover:bg-logo-yellow' : 'btn-secondary'} w-full`} onClick={() => {setGender(FEMALE); setTable(nominations[competitionType][FEMALE][category])}}>{t['female']}</button>
            </div>
        
            <div className='flex flex-row justify-center items-center max-md:flex-wrap gap-4 mt-8'>
                <button className={`${category == SUB_JUNIOR ? 'btn hover:bg-logo-yellow' : 'btn-secondary'} w-full`} onClick={() => {setCategory(SUB_JUNIOR); setTable(nominations[competitionType][gender][SUB_JUNIOR])}}>{t['sub-junior']}</button>
                <button className={`${category == JUNIOR ? 'btn hover:bg-logo-yellow' : 'btn-secondary'} w-full`} onClick={() => {setCategory(JUNIOR); setTable(nominations[competitionType][gender][JUNIOR])}}>{t['junior']}</button>
                <button className={`${category == OPEN ? 'btn hover:bg-logo-yellow' : 'btn-secondary'} w-full`} onClick={() => {setCategory(OPEN); setTable(nominations[competitionType][gender][OPEN])}}>{t['open']}</button>
                <button className={`${category == MASTER_I ? 'btn hover:bg-logo-yellow' : 'btn-secondary'} w-full`} onClick={() => {setCategory(MASTER_I); setTable(nominations[competitionType][gender][MASTER_I])}}>{t['master-i']}</button>
                <button className={`${category == MASTER_II ? 'btn hover:bg-logo-yellow' : 'btn-secondary'} w-full`} onClick={() => {setCategory(MASTER_II); setTable(nominations[competitionType][gender][MASTER_II])}}>{t['master-ii']}</button>
            </div>
        
        
            <div className='overflow-x-auto '>
                <table className="w-full mt-12 z-10 table-scrollbar overflow-x-scroll bg-black border-collapse border-2 border-logo-yellow rounded-lg m-2 border-spacing-8 mx-auto">
                    <thead className='p-2 bg-logo-yellow'>
                        <tr className='text-left p-2'>
                            <th className=''>#</th>
                            <th>{t['competitor']}</th>
                            <th className='min-w-[15ch]'>{t['yob']}</th>
                            <th>{t['club']}</th>
                            <th>{t['total']}</th>
                            <th>{t['country']}</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                                Object.entries(table).map(([weight,competitors]) => (
                                    <>
                                        <tr key={`${competitionType}-${gender}-${category}-${weight}`}>
                                            <td colSpan={6} className="font-semibold text-logo-yellow bg-indigo-950">{weight}</td>
                                        </tr>
                                        {(competitors as Nomination[]).map((competitor, index) => (
                                            <tr key={index}>
                                              <td>{index + 1}</td>
                                              <td>{competitor.name}</td>
                                              <td>{competitor.yearOfBirth}</td>
                                              <td>{competitor.club}</td>
                                              <td>{competitor.total}</td>
                                              <td className='rounded-sm'><img className='w-9 h-auto' src={`/icons/${competitor.country}.svg`} alt={competitor.country} loading='lazy' /></td>
                                            </tr>
                                        ))}
                                    </>
                                )) 
                
                        }
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  )
}

export default NominationTable