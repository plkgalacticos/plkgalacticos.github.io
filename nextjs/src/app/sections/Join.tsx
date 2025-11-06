'use client'
import React, { useState } from 'react'
import useInViewAnimation from '../hooks/useInViewAnimation';
import dynamic from 'next/dynamic';

const LazyRegistrationPopup = dynamic(() => import('@/app/components/RegistrationPopup'), {
  ssr: false,
  loading: () => null, // no skeleton; optional
});

const Join = ({t}) => {
  const tSwal = t['swal'];
  t = t['join']

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
  
  const [h1Ref, h1Animation] = useInViewAnimation({ threshold: 0.1 }, 'slide-top');
  const [h2Ref, h2Animation] = useInViewAnimation({ threshold: 0.1 }, 'slide-bottom');
  const [btnRef, btnAnimation] = useInViewAnimation({ threshold: 0.1 }, 'slide-in-elliptic-top-fwd');

  return (
    <section className='relative  flex flex-col justify-center items-center gap-12 text-center min-h-[100vh]'>
        <div className='bg-join bg-no-repeat bg-cover md:bg-fixed bg-center bg-center-safari bg-blend-darken bg-black/70 absolute top-0 bottom-0 left-0 right-0'></div>
        <h1 ref={h1Ref as React.RefObject<HTMLHeadingElement>} className={`slide-top-pre ${h1Animation} text-4xl lg:text-6xl font-semibold`}>{t['h1']} <span className='text-logo-yellow'>{t['h2']}</span> {t['h3']}</h1>
        <h2 ref={h2Ref as React.RefObject<HTMLHeadingElement>} className={`slide-botom-pre ${h2Animation} text-2xl lg:text-3xl font-semibold max-w-lg text-center leading-normal`}>{t['p']}</h2>
        <button ref={btnRef as React.RefObject<HTMLButtonElement>} onClick={handleOpen} className={`slide-in-elliptic-top-fwd-pre ${btnAnimation} bg-yellow-800 md:text-lg btn-diagonal-swipe max-md:px-4 max-md:py-2 text-white`}>{t['btn']}</button>

        {shouldMountPopup && (
          <LazyRegistrationPopup open={isOpen} onClose={() => setIsOpen(false)} tSwal={tSwal} confirmText="Ide gas" />
        )}
    </section>
  )
}

export default Join


// <swal
// #joinSwal
// title='{{"swal.h" | translate}}'
// html='<p class="text-left">{{"swal.p" | translate}}</p>
// <div class="mt-4 mb-4">
//   <ul class="list-disc ml-5">
//     <li class="text-left">{{"swal.l11" | translate}}
//       <a href="{{"swal.a" | translate}}" target="_blank" class="text-blue-500 hover:underline">
//         {{"swal.l12" | translate}}.
//       </a>
//     </li>
//     <li class="text-left">{{"swal.l21" | translate}}
//       <a href="https://www.instagram.com/plk.galacticos/" target="_blank" class="text-blue-500 hover:underline">
//         Instagram.
//       </a>
//       {{"swal.l22" | translate}}
//     </li>
//   </ul>
// </div>'
// icon="info"
// confirmButtonText="Ide gas"
// >
// </swal>