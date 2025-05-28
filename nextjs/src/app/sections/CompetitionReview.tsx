'use client';
import React from 'react'
import useInViewAnimation from '../hooks/useInViewAnimation';
import TextImageContainer from '../components/TextImageContainer';

const Competition = ({t}) => {
  const  tNav = t['nav']
  t = t['competitionReview']  

  const [h1Ref, h1Animation] = useInViewAnimation({ threshold: 0.1 }, 'slide-top');
  const [h2Ref, h2Animation] = useInViewAnimation({ threshold: 0.1 }, 'slide-right');
  const [h3Ref, h3Animation] = useInViewAnimation({ threshold: 0.1 }, 'slide-left');
  const [pRef, pAnimation] = useInViewAnimation({ threshold: 0.1 }, 'slide-top');
  const [img1Ref, img1Animation] = useInViewAnimation({ threshold: 0.1 }, 'slide-top');
  const [img2Ref, img2Animation] = useInViewAnimation({ threshold: 0.1 }, 'slide-top');
  const [btnRef, btnAnimation] = useInViewAnimation({ threshold: 0.1 }, 'slide-right');
  const [mapRef, mapAnimation] = useInViewAnimation({ threshold: 0.1 }, 'scale-in-center');

  return (
    <section className='relative flex flex-col justify-center items-center w-full text-lg'>
        <h1 ref={h1Ref as React.RefObject<HTMLHeadingElement>} className={`slide-top-pre ${h1Animation} heading-text mb-16`}>{t['h']}</h1>

        <div className="flex flex-col gap-16 w-full max-w-6xl mx-auto text-lg">
            <TextImageContainer text={t['p1']} imgUrl={'/images/comp-review/otvorenje_powerlifting_natjecanja.png'} alt={'Otvorenje powerlifting natjecanja'}></TextImageContainer>
            <TextImageContainer text={t['p2']} imgUrl={'/images/comp-review/powerlifting_natjecatelj_krastev.jpg'} alt={'Powerlifting natjecatelj Emil Krastev cucanj'} reverse={true}></TextImageContainer>
            <TextImageContainer text={t['p3']} imgUrl={'/images/comp-review/powerlifting_natjecanje_intervju.jpg'} alt={'Powerlifting natjecanje'}></TextImageContainer>
            <TextImageContainer text={t['p4']} imgUrl={'/images/comp-review/powerlifting_natjecanje_cucanj.jpg'} alt={'Powerlifting natjecanje cucanj'} reverse={true}></TextImageContainer>
        </div>

        <h2 className=' text-2xl lg:text-3xl font-semibold font-palanquin mb-8 mt-24 lg:mt-48'>{t['h2']}</h2>

        <div className='relative max-container lg:px-16 flex flex-row justify-center items-center gap-20 flex-wrap pt-24 z-10'>
                <a href="http://www.grad-vinkovci.hr/" target='_blank' className='relative'>
                    <img className='h-16 w-auto'  src="/images/sponsors/grad vinkovci.png" alt="GRAD VINKOVCI" />
                </a>
                <a href="https://www.a7europe.com/" target='_blank' className='relative'>
                    <img className='h-12 w-auto'  src="/images/sponsors/a7.png" alt="A7" />
                </a>
                <a href="https://www.eluir.hr/" target='_blank' className='relative'>
                    <img className='h-12 w-auto'  src="/images/sponsors/eluir.png" alt="ELUIR" />
                </a>
                <a href='https://avancus.com/' target='_blank' className='relative'>
                    <img className='h-28 w-auto'  src="/images/sponsors/Avancus.png" alt="AVANCUS" />
                </a>
                
                <a href="https://visitvinkovci.com/" target='_blank' className='relative'>
                    <img className='h-14 w-auto'  src="/images/sponsors/tz.png" alt="TZ" />
                    {/* <div className='absolute -top-6 -right-8 w-6 h-6 medal-bronze rounded-full'></div> */}
                </a>
                <a href="https://smellslikepr.com/" target='_blank' className='relative'>
                    <img className='h-14 w-auto'  src="/images/sponsors/smells like pr.png" alt="SMELLS LIKE PR" />
                </a>
                <a href="https://www.4za.uk/" target='_blank' className='relative'>
                    <img className='h-14 w-auto' src="/images/sponsors/4za.png" alt="4ZA" />
                </a>
                <a href="https://4rce.hr/" target='_blank' className='relative'>
                    <img className='h-12 w-auto' src="/images/sponsors/4rce.png" alt="4RCE" />
                </a>
                <a href="https://nutrition-shop.hr/" target='_blank' className='relative'>
                    <img className='h-12 w-auto'  src="/images/sponsors/nutrition shop.png" alt="NUTRITION SHOP" />
                </a>
                <a href='https://nutriteka.hr/' target='_blank' className='relative'>
                    <img className='h-20 w-auto'  src="/images/sponsors/NUTRITEKA.svg" alt="NUTRITEKA" />
                </a>
                <a href='https://tti-group.com/' target='_blank' className='relative'>
                    <img className='h-14 w-auto'  src="/images/sponsors/ttigroup.png" alt="TTI-group" />
                </a>
                <a href='https://www.jurcakdesign.com/' target='_blank' className='relative'>
                    <img className='h-12 w-auto'  src="/images/sponsors/Jurcak design.png" alt="JURCAK DESIGN" />
                </a>
                <a href='https://www.poslovna.hr/lite/keramika-babic,-vl-vjekoslav-babic/1687162/subjekti.aspx' target='_blank' className='relative'>
                    <img className='h-20 w-auto'  src="/images/sponsors/Keramika Babic.png" alt="KERAMIKA BABIC" />
                </a>

                <div className=' border-4 border-gold rounded-md p-4 rotate-45 absolute top-1/2 -translate-y-1/2 left-1/2 transform -translate-x-1/2 -z-10'>
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
                
         </div>

         <div className='mt-24 lg:mt-48 flex flex-col gap-8 w-full mx-auto max-w-2xl'>
            <p>{t['p5']}</p>
            <p>{t['p6']}</p>
            <p>{t['p7']}</p>
         </div>
    </section>
  )
}

export default Competition