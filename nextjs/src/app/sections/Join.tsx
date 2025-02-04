'use client'
import React from 'react'
import useInViewAnimation from '../hooks/useInViewAnimation';
import Swal from 'sweetalert2';

const Join = ({t}) => {
    const tSwal = t['swal']
    t = t['join']
  
  const [h1Ref, h1Animation] = useInViewAnimation({ threshold: 0.1 }, 'slide-top');
  const [h2Ref, h2Animation] = useInViewAnimation({ threshold: 0.1 }, 'slide-bottom');
  const [btnRef, btnAnimation] = useInViewAnimation({ threshold: 0.1 }, 'slide-in-elliptic-top-fwd');
  
  const showAlert = () => {
    Swal.fire({
      title: tSwal['h'],
      html: `<p class="text-left">${tSwal['p']}</p>
            <div class="mt-4 mb-4">
              <ul class="list-disc ml-5">
                <li class="text-left">${tSwal['l11']}
                  <a href="${tSwal['a']}" target="_blank" class="text-blue-500 hover:underline">
                    ${tSwal['l12']}.
                  </a>
                </li>
                <li class="text-left">${tSwal['l21']}
                  <a href="https://www.instagram.com/plk.galacticos/" target="_blank" class="text-blue-500 hover:underline">
                    Instagram.
                  </a>
                  ${tSwal['l22']}
                </li>
              </ul>
            </div>`,
        icon: "info",
        confirmButtonText: "Ide gas"
    });
  };

  return (
    <section className='relative  flex flex-col justify-center items-center gap-12 text-center min-h-[100vh]'>
        <div className='bg-join bg-no-repeat bg-cover bg-fixed bg-center-safari bg-blend-darken bg-black/70 absolute top-0 bottom-0 left-0 right-0'></div>
        <h1 ref={h1Ref as React.RefObject<HTMLHeadingElement>} className={`slide-top-pre ${h1Animation} text-4xl lg:text-6xl font-semibold`}>{t['h1']} <span className='text-logo-yellow'>{t['h2']}</span> {t['h3']}</h1>
        <h2 ref={h2Ref as React.RefObject<HTMLHeadingElement>} className={`slide-botom-pre ${h2Animation} text-2xl lg:text-3xl font-semibold max-w-lg text-center leading-normal`}>{t['p']}</h2>
        <button ref={btnRef as React.RefObject<HTMLButtonElement>} onClick={showAlert} className={`slide-in-elliptic-top-fwd-pre ${btnAnimation} bg-logo-yellow md:text-lg btn-diagonal-swipe max-md:px-4 max-md:py-2 text-white`}>{t['btn']}</button>
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