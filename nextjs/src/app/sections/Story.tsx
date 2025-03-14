'use client'
import React from 'react'
import useInViewAnimation from '../hooks/useInViewAnimation';

const Story = ({t}) => {
    const tNav = t['nav']
    t = t['story']
    const [h1Ref, h1Animation] = useInViewAnimation({ threshold: 0.1 }, 'slide-right');
    const [p1Ref, p1Animation] = useInViewAnimation({ threshold: 0.1 }, 'slide-top');
    const [p2Ref, p2Animation] = useInViewAnimation({ threshold: 0.1 }, 'slide-top');
    const [p3Ref, p3Animation] = useInViewAnimation({ threshold: 0.1 }, 'slide-top');
    const [btnRef, btnAnimation] = useInViewAnimation({ threshold: 0.1 }, 'scale-in-center');

  return (
    <section className={`relative flex flex-col lg:flex-col `}>
        {/* <div className={`flex flex-col justify-center items-start gap-8`}>
            <h1 ref={h1Ref} className={`heading-text slide-right-pre ${h1Animation}`}>{t['h2']}</h1>
            <p ref={p1Ref} className={`slide-top-pre ${p1Animation} max-w-md`}>{t['p1']}</p>
            <p ref={p2Ref} className={`slide-top-pre ${p2Animation} max-w-md`}>{t['p2']}</p>
            <p ref={p3Ref} className={`slide-top-pre ${p3Animation} max-w-md`}>{t['p3']}</p>
            <button ref={btnRef} className={` scale-in-center-pre ${btnAnimation} btn-primary`}>{t['btn']}</button>
        </div> */}

        {/* <div className='w-full max-container flex flex-row justify-center pb-24'>
            <h1 ref={h1Ref} className={`heading-text slide-right-pre ${h1Animation}`}>{t['h2']}</h1>
            
        </div>

        <div className='w-full max-container flex flex-row justify-start'>
            <p ref={p1Ref} className={`slide-top-pre ${p1Animation} max-w-md`}>{t['p1']}</p>
        </div>

        <div className='w-full max-container flex flex-row justify-center'>
            <p ref={p1Ref} className={`slide-top-pre ${p1Animation} max-w-md`}>{t['p2']}</p>
        </div>

        <div className='w-full max-container flex flex-row justify-end'>
            <p ref={p1Ref} className={`slide-top-pre ${p1Animation} max-w-md`}>{t['p3']}</p>
        </div>
        <div className='w-full max-container flex flex-row justify-center pt-24'>
        <button ref={btnRef} className={` scale-in-center-pre ${btnAnimation} btn-primary`}>{t['btn']}</button>
        </div> */}

        <div className={`flex flex-col-reverse lg:flex-row justify-center items-start`}>

            {/* <div className='flex-1 relative min-h- lg:min-h-[100vh] w-full bg-hero bg-center bg-no-repeat bg-cover'>
                <img className='absolute inset-0 object-cover' src="/images/sebo_squat_darken.png" alt="Cucanj" />
            </div> */}

            <div className='flex-1 relative z-[2]'>
                <img className='object-cover lg:min-h-[100vh] min-w-full' src='/images/Marko_Kuzmic.jpg' alt='Clan powerlifting kluba Galacticos radi mrtvo dizanje na natjecanju' loading='lazy'></img>
            </div>

            <div className='flex-1 w-full min-h-full flex flex-col justify-center items-start gap-8 py-24 text-lg px-4'>
                <h1 ref={h1Ref as React.RefObject<HTMLHeadingElement>} className={`heading-text slide-right-pre ${h1Animation} max-w-xl mx-auto`}>{t['h2']}</h1>
                <p ref={p1Ref as React.RefObject<HTMLParagraphElement>} className={`slide-top-pre ${p1Animation} max-w-xl mx-auto`}>{t['p1']}</p>
                <p ref={p2Ref as React.RefObject<HTMLParagraphElement>} className={`slide-top-pre ${p2Animation} max-w-xl mx-auto`}>{t['p2']}</p>
                <p ref={p3Ref as React.RefObject<HTMLParagraphElement>} className={`slide-top-pre ${p3Animation} max-w-xl mx-auto`}>{t['p3']}</p>
                <div className='w-full  max-w-xl mx-auto'>
                    <a href={"/" + tNav['members-link']}>
                        <button ref={btnRef as React.RefObject<HTMLButtonElement>} className={` scale-in-center-pre ${btnAnimation} btn-primary`}>{t['btn']}</button>
                    </a>
                </div>
            </div>
            
        </div>

        <div className='border-4 border-gold rounded-md p-2 rotate-45 absolute -right-16 bottom-24 '>
                <div className='border-2 border-gold rounded-md p-2'>
                        <div className='border-[1px] border-gold rounded-md p-2'>
                            <div className='border-[1px] border-gold rounded-md p-4 min-w-16 min-h-16'></div>
                        </div>
                </div>
        </div>
    </section>
  )
}

export default Story