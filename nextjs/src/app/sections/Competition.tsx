'use client';
import React from 'react'
import useInViewAnimation from '../hooks/useInViewAnimation';

const Competition = ({t}) => {
  const  tNav = t['nav']
  t = t['comp']  

  const [h1Ref, h1Animation] = useInViewAnimation({ threshold: 0.1 }, 'slide-top');
  const [h2Ref, h2Animation] = useInViewAnimation({ threshold: 0.1 }, 'slide-right');
  const [h3Ref, h3Animation] = useInViewAnimation({ threshold: 0.1 }, 'slide-left');
  const [pRef, pAnimation] = useInViewAnimation({ threshold: 0.1 }, 'slide-top');
  const [img1Ref, img1Animation] = useInViewAnimation({ threshold: 0.1 }, 'slide-top');
  const [img2Ref, img2Animation] = useInViewAnimation({ threshold: 0.1 }, 'slide-top');
  const [btnRef, btnAnimation] = useInViewAnimation({ threshold: 0.1 }, 'slide-right');
  const [mapRef, mapAnimation] = useInViewAnimation({ threshold: 0.1 }, 'scale-in-center');

  return (
    <section className='relative flex flex-col justify-center items-center w-full'>
        <h1 ref={h1Ref as React.RefObject<HTMLHeadingElement>} className={`slide-top-pre ${h1Animation} heading-text mb-16`}><span className='text-logo-yellow'>Cibalae </span>Open <span className='text-logo-yellow'>Kup</span> 2025</h1>

        <div className="flex flex-col lg:flex-row justify-between items-start gap-4 mt-24 max-container z-[1]">
            <div className="flex-1 mx-auto">
              <h3 ref={h2Ref as React.RefObject<HTMLHeadingElement>} className={`slide-right-pre ${h2Animation} text-2xl lg:text-3xl font-semibold font-palanquin leading-3`}>
                {t['h1']}
              </h3>
              <p ref={pRef as React.RefObject<HTMLParagraphElement>} className={`slide-top-pre ${pAnimation} info-text font-montserrat leading-normal max-w-md mt-4 lg:mt-8`}>
                {t['p']}
              </p>

              <div ref={img1Ref  as React.RefObject<HTMLDivElement>} className={`slide-top-pre ${img1Animation} flex flex-row justify-start items-center gap-4 flex-wrap mt-4`}>
                <img className="w-14 h-auto" src="/icons/germany.svg" alt="GERMANY" />
                <img className="w-14 h-auto" src="/icons/france.svg" alt="FRANCE" />
                <img className="w-14 h-auto" src="/icons/hungary.svg" alt="HUNGARY" />
                <img className="w-14 h-auto" src="/icons/slovenia.svg" alt="SLOVENIA" />
              </div>

              <div ref={img2Ref  as React.RefObject<HTMLDivElement>} className={`slide-top-pre ${img2Animation} flex flex-row justify-start items-center gap-4 flex-wrap mt-4`}>
                <img className="w-14 h-auto" src="/icons/serbia.svg" alt="SERBIA" />
                <img className="w-14 h-auto" src="/icons/bulgaria.svg" alt="BULGARIA" />
                <img className="w-14 h-auto" src="/icons/greece.svg" alt="GREECE" />
                <img className="w-14 h-auto" src="/icons/croatia.svg" alt="CROATIA" />
              </div>

                <div className='flex flex-col'>
                    <a href="https://www.instagram.com/plk.galacticos/" target="_blank"
                      className="w-full">
                      <button ref={btnRef as React.RefObject<HTMLButtonElement>} className={`slide-right-pre ${btnAnimation} btn-primary py-3 mt-8 flex flex-row justify-center items-center gap-4 min-md:my-2`}>
                        <img className="w-4 lg:w-5 h-auto" src="/icons/ig-white.svg" alt="INSTAGRAM" />
                        <p className="text-base lg:text-lg font-semibold">{t['btn']}</p>
                      </button>
                    </a>
                    <a href={tNav['kup-link']}
                      className="w-full">
                      <button ref={btnRef as React.RefObject<HTMLButtonElement>} className={`slide-right-pre ${btnAnimation} btn-secondary py-3 mt-8 flex flex-row justify-center items-center gap-4 min-md:my-2`}>
                        <img className="w-4 lg:w-6 h-auto" src="/icons/winner.svg" alt="INSTAGRAM" />
                        <p className="text-base lg:text-lg font-semibold">{t['btn2']}</p>
                      </button>
                    </a>
                </div>
            </div>
            <div className="flex-1  max-lg:w-full">
              <h3 ref={h3Ref as React.RefObject<HTMLDivElement>} className={`slide-left-pre ${h3Animation} text-2xl lg:text-3xl font-semibold font-palanquin leading-3 mb-8 mt-24 lg:mt-0`}>
                {t['h2']}
              </h3>
              <iframe  ref={mapRef as React.RefObject<HTMLIFrameElement>} className={`scale-in-center-pre ${mapAnimation} rounded-md min-w-full h-72 md:h-96 lg:h-[450px]`}
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2806.698479927844!2d18.790913875918918!3d45.294314344758305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475c8ae094d7cb09%3A0x2df59e6296b69211!2sElementary%20school%20Antun%20Gustav%20Matos!5e0!3m2!1sen!2shr!4v1730482835010!5m2!1sen!2shr"
                      loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                      title="Cibalae Open Kup Google Maps Location">
              </iframe>
            </div>

            
        </div>

        <div className='flex flex-row justify-center items-center gap-24 flex-wrap mt-24 z-10'>
                <img className='w-28 h-auto'  src="/images/sponsors/nutrition shop.png" alt="NUTRITION SHOP" />
                <img className='w-28 h-auto'  src="/images/sponsors/smells like pr.png" alt="SMELLS LIKE PR" />
                <img className='w-28 h-auto' src="/images/sponsors/4za.png" alt="4ZA" />
                <img className='w-28 h-auto'  src="/images/sponsors/a7.png" alt="A7" />
                <img className='w-28 h-auto'  src="/images/sponsors/ttigroup.png" alt="TTI-group" />
                <img className='w-28 h-auto'  src="/images/sponsors/tz.png" alt="TZ" />
         </div>


        <div className=' border-4 border-gold rounded-md p-4 rotate-45 absolute top-1/2 left-1/2 transform -translate-x-1/2 translate-y-[35rem] lg:translate-y-72'>
            <div className='border-4 border-gold rounded-md p-4'>
                <div className='border-2 border-gold rounded-md p-4'>
                    <div className='border-2 border-gold rounded-md p-4'>
                        <div className='border-[1px] border-gold rounded-md p-4'>
                            <div className='border-[1px] border-gold rounded-md p-4 min-w-48 min-h-48'></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='absolute bottom-0 -left-4 -right-4 min-h-8 translate-y-[9rem] shadow-inset-black-bottom'>

        </div>
    </section>
  )
}

export default Competition