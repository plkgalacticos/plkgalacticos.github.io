'use client';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import React, { useState } from 'react'

const LazyRegistrationPopup = dynamic(() => import('@/app/components/RegistrationPopup'), {
  ssr: false,
  loading: () => null, // no skeleton; optional
});

const Hero = ({t}) => {
  const tSwal = t['swal'];
  t = t['hero'];

  const [isOpen, setIsOpen] = useState(false);
  const [shouldMountPopup, setShouldMountPopup] = useState(false);

  React.useEffect(() => {
    const mountWarm = () => {
      // let hydration finish, then mount the popup closed
      if ('requestIdleCallback' in window) {
        (window as any).requestIdleCallback(() => setShouldMountPopup(true), { timeout: 2000 });
      } else {
        setTimeout(() => setShouldMountPopup(true), 1200);
      }
    };

    if (document.readyState === 'complete') mountWarm();
    else window.addEventListener('load', mountWarm);

    return () => window.removeEventListener('load', mountWarm);
  }, []);

  const handleOpen = () => {
    // Trigger first render of LazyInfoPopup -> downloads chunk on demand
    if (!shouldMountPopup) setShouldMountPopup(true);
    setIsOpen(true);
  };

  return (
    <section className='min-w-full min-h-[100vh] bg-blend-darken bg-black/70'>
        {/* <div className='fixed top-0 right-0 left-0 min-w-full min-h-[100vh] -z-10'><Image className='w-full min-h-[100vh] object-cover object-top' src="/images/Walter1.jpg" alt="Cucanj" width={1024} height={572} /></div> */}
        <div className='hidden lg:block absolute inset-0 min-w-full min-h-[100vh] -z-10'><Image className='w-full min-h-[100vh] object-cover object-top' src="/images/hero-bg.png" alt="Cucanj" width={1024} height={572} priority={true} layout='intrinsic' /></div>
        <div className='block lg:hidden absolute inset-0 min-w-full min-h-[100vh] -z-10'><Image className='w-full min-h-[100vh] object-cover object-top' src="/images/bg-hero-mobile.png" alt="Cucanj" width={1024} height={572} priority={true} layout='intrinsic' /></div>
        
        <div className='max-container flex flex-col justify-end items-start min-h-[100vh] gap-4 px-4 pb-20 lg:pb-28'>
            <h1 className='text-3xl lg:text-4xl font-extrabold uppercase leading-none'>{t['h1']}</h1>
            <h1 className='text-3xl lg:text-4xl font-extrabold uppercase leading-3'>{t['h12']}</h1>
            <h2 className='text-xl lg:text-3xl italic max-md:pb-2 max-md:pt-4'>&bdquo;{t['h2']}&#8217;&#8217;</h2>
            <div className='flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8'>
                <button onClick={handleOpen} className='btn-primary-dark max-md:w-full'>{t['btn']}</button>
                <a href='https://www.instagram.com/plk.galacticos/'>
                    <button className='btn-secondary flex flex-row justify-center items-center gap-2'>
                        <img className='w-6 h-auto' src="/icons/ig-white.svg" alt="Instagram ikona" />
                        {t['btn2']}
                    </button>
                </a>
            </div>
        </div>

        {shouldMountPopup && (
          <LazyRegistrationPopup open={isOpen} onClose={() => setIsOpen(false)} tSwal={tSwal} confirmText="Ide gas" />
        )}
    </section>
  )
}

export default Hero