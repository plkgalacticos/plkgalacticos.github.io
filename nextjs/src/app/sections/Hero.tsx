'use client';
import Image from 'next/image';
import React from 'react'

const Hero = ({t}) => {
  const tSwal = t['swal'];
  t = t['hero'];

  const showAlert = async () => {
      const Swal = (await import('sweetalert2')).default;

      if (Swal) {
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
      }

    };

  return (
    <section className='min-w-full min-h-[100vh] bg-blend-darken bg-black/70'>
        {/* <div className='fixed top-0 right-0 left-0 min-w-full min-h-[100vh] -z-10'><Image className='w-full min-h-[100vh] object-cover object-top' src="/images/Walter1.jpg" alt="Cucanj" width={1024} height={572} /></div> */}
        <div className='absolute inset-0 min-w-full min-h-[100vh] -z-10'><Image className='w-full min-h-[100vh] object-cover object-top' src="/images/Walter1.jpg" alt="Cucanj" width={1024} height={572} priority={true} layout='intrinsic' /></div>
        
        <div className='max-container flex flex-col justify-end items-start min-h-[100vh] gap-4 px-4 pb-20 lg:pb-28'>
            <h1 className='text-3xl lg:text-4xl font-extrabold uppercase leading-none'>{t['h1']}</h1>
            <h1 className='text-3xl lg:text-4xl font-extrabold uppercase leading-3'>{t['h12']}</h1>
            <h2 className='text-xl lg:text-3xl italic max-md:pb-2 max-md:pt-4'>&bdquo;{t['h2']}&#8217;&#8217;</h2>
            <div className='flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8'>
                <button onClick={showAlert} className='btn-primary-dark max-md:w-full'>{t['btn']}</button>
                <a href='https://www.instagram.com/plk.galacticos/'>
                    <button className='btn-secondary flex flex-row justify-center items-center gap-2'>
                        <img className='w-6 h-auto' src="/icons/ig-white.svg" alt="Instagram ikona" />
                        {t['btn2']}
                    </button>
                </a>
            </div>
        </div>
    </section>
  )
}

export default Hero