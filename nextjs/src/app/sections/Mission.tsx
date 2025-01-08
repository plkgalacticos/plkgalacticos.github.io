'use client'
import React from 'react'
import useInViewAnimation from '../hooks/useInViewAnimation';

const Mission = ({t}) => {
  t = t['mission']
  const [h1Ref, h1Animation] = useInViewAnimation({ threshold: 0.1 }, 'slide-top');
  const [pRef, pAnimation] = useInViewAnimation({ threshold: 0.1 }, 'slide-top');

  return (
    <section className='relative flex flex-col lg:flex-row justify-center items-center z-[1]'>
        <div className='flex-1 flex flex-col justify-center items-center'>
            <div className='px-4 py-24'>
                <h1 ref={h1Ref as React.RefObject<HTMLHeadingElement>} className={`slide-top-pre ${h1Animation} heading-text`}>{t['our']} <span className='text-logo-purple'>{t['h']}</span></h1>
                <p ref={pRef as React.RefObject<HTMLParagraphElement>} className={`slide-top-pre ${pAnimation} text-lg max-w-md mt-6`}>{t['p']}</p>
            </div>
        </div>

        <div className='flex-1 relative'>
            <img className='object-cover' src='/images/Jakov_Mrso.jpg' alt='Clan powerlifting kluba Galacticos radi mrtvo dizanje na natjecanju'></img>
        </div>

        <div className='border-4 border-gold rounded-md p-2 rotate-45 absolute max-lg:-right-8 lg:-left-8 -top-4 lg:top-24 -z-10'>
                <div className='border-2 border-gold rounded-md p-2'>
                        <div className='border-[1px] border-gold rounded-md p-2'>
                            <div className='border-[1px] border-gold rounded-md p-4 min-w-4 min-h-4'></div>
                        </div>
                </div>
        </div>
    </section>
  )
}

export default Mission