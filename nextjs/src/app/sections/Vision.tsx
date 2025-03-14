'use client';
import React from 'react'
import useInViewAnimation from '../hooks/useInViewAnimation';

const Vision = ({t}) => {
  t = t['vision']  
  const [h1Ref, h1Animation] = useInViewAnimation({ threshold: 0.1 }, 'slide-top');
  const [pRef, pAnimation] = useInViewAnimation({ threshold: 0.1 }, 'slide-top');

  return (
    <section className='relative flex flex-col-reverse lg:flex-row justify-center items-center'>
        <div className='flex-1 relative'>
            <img className='object-cover min-w-full' src='/images/tara_deadlift.png' alt='Clan powerlifting kluba Galacticos radi mrtvo dizanje na natjecanju' loading='lazy'></img>
        </div>
        <div className='flex-1 flex flex-col justify-center items-center'>
            <div className='px-4 py-24'>
                <h1 ref={h1Ref as React.RefObject<HTMLHeadingElement>} className={`slide-top-pre ${h1Animation} heading-text`}>{t['our']} <span className='text-logo-yellow'>{t['h']}</span></h1>
                <p  ref={pRef as React.RefObject<HTMLParagraphElement>} className={`slide-top-pre ${pAnimation} text-lg max-w-md mt-6`}>{t['p']}</p>
            </div>
        </div>
    </section>
  )
}

export default Vision