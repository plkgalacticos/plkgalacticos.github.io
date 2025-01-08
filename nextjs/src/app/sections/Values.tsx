'use client'
import React from 'react'
import useInViewAnimation from '../hooks/useInViewAnimation';

const Values = ({t}) => {
  t = t['values']  

  const [h2Ref, h2Animation] = useInViewAnimation({ threshold: 0.1 }, 'slide-top');
  const [d1Ref, d1Animation] = useInViewAnimation({ threshold: 0.1 }, 'slide-right');
  const [d2Ref, d2Animation] = useInViewAnimation({ threshold: 0.1 }, 'slide-left');
  const [d3Ref, d3Animation] = useInViewAnimation({ threshold: 0.1 }, 'slide-right');
  const [d4Ref, d4Animation] = useInViewAnimation({ threshold: 0.1 }, 'slide-left');

  return (
    <section className='relative flex flex-col justify-center items-center z-[1]'>
        <h1 ref={h2Ref as React.RefObject<HTMLHeadingElement>} className={`slide-top-pre ${h2Animation} heading-text mb-16`}>{t['our']}<span className='text-logo-purple'> {t['h']}</span></h1>
        <div className='flex flex-col md:flex-row flex-wrap justify-center items-center gap-12'>
            <div className='transition-transform duration-500 hover:scale-105'>
                <div ref={d1Ref as React.RefObject<HTMLDivElement>} className={`slide-right-pre ${d1Animation} value-card bg-resilience`}>
                    <h2 className='text-2xl font-semibold'>{t['h1']}</h2>
                    <p className=''>{t['p1']}</p>
                </div>
            </div>

            <div className='transition-transform duration-500 hover:scale-105'>
                <div ref={d2Ref as React.RefObject<HTMLDivElement>} className={`slide-left-pre ${d2Animation} lg:delay-200 bg-support value-card bg-top`}>
                    <h2 className='text-2xl font-semibold'>{t['h2']}</h2>
                    <p>{t['p2']}</p>
                </div>
            </div>

            <div className='transition-transform duration-500 hover:scale-105'>
                <div ref={d3Ref as React.RefObject<HTMLDivElement>} className={`slide-right-pre ${d3Animation} lg:delay-400 bg-integrity value-card`}>
                    <h2 className='text-2xl font-semibold'>{t['h3']}</h2>
                    <p>{t['p3']}</p>
                </div>
            </div>

            <div className='transition-transform duration-500 hover:scale-105'>
                <div ref={d4Ref as React.RefObject<HTMLDivElement>} className={`slide-left-pre ${d4Animation} lg:delay-600 bg-health value-card`}>
                    <h2 className='text-2xl font-semibold'>{t['h4']}</h2>
                    <p>{t['p4']}</p>
                </div>
            </div>
        </div>


        <div className='border-4 border-gold rounded-md p-4 rotate-45 absolute -left-44 -top-0 lg:-top-64 -z-10'>
            <div className='border-4 border-gold rounded-md p-4'>
                <div className='border-2 border-gold rounded-md p-4'>
                    <div className='border-2 border-gold rounded-md p-4'>
                        <div className='border-[1px] border-gold rounded-md p-4'>
                            <div className='border-[1px] border-gold rounded-md p-4 min-w-32 min-h-32'></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className='border-4 border-gold rounded-md p-4 rotate-45 absolute -right-44 -bottom-36 -z-10'>
            <div className='border-4 border-gold rounded-md p-4'>
                <div className='border-2 border-gold rounded-md p-4'>
                    <div className='border-2 border-gold rounded-md p-4'>
                        <div className='border-[1px] border-gold rounded-md p-4'>
                            <div className='border-[1px] border-gold rounded-md p-4 min-w-32 min-h-32'></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Values