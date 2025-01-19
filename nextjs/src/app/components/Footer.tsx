'use client';
import React from 'react'
import Image from 'next/image'
import Swal from 'sweetalert2'

const Footer = ({t}) => {
  const tNav = t['nav']
  const tSwal = t['swal']
  t = t['footer']
  
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
    <footer className='flex flex-col justify-end py-8 bg-footer bg-no-repeat bg-cover bg-blend-darken bg-black/90 text-white px-4  shadow-inset-black'>
        <div className='max-container flex flex-col justify-center items-center'>
            <div><img className='max-w-64 lg:max-w-96' src='/images/logo/plk-galacticos-logo-bright.png' alt='PLK Galacticos logo'></img></div>
            <div className='flex flex-col md:flex-row justify-start md:justify-evenly items-start w-full'>
                <div className='pt-16'>
                    <h2 className='font-semibold text-xl pb-4'>{t['h1']}</h2>
                    <ul className='flex flex-col gap-1'>
                        <li><a href={"/" + tNav['home-link']} className='link'>{t['l11']}</a></li>
                        <li><a href={"/" + tNav['members-link']} className='link'>{t['l12']}</a></li>
                        {/* <li><a href={"/" + tNav['kup-link']} className='link'>{t['l13']}</a></li> */}
                        <li><a onClick={showAlert} className='link'>{t['l14']}</a></li>
                    </ul>
                </div>

                <div className='pt-16'>
                    <h2 className='font-semibold text-xl pb-4'>{t['h2']}</h2>
                    <a className='link'></a>
                    <div className="cursor-pointer">
                       <a className="flex flex-row justify-start items-center gap-4" href="https://drive.google.com/file/d/16YUQ_Z4-4CFqka4kyYpcMGQHbenAAczY/view?usp=sharing" target="_blank">
                         <img className="w-8 h-auto" src="/icons/pdf.svg" alt="PDF icon"/>
                         <p className="link">{t['l21']}</p>
                       </a>
                    </div>
                </div>

                <div className="flex flex-col justify-start items-start pt-16">
                  <h2 className="font-semibold text-xl">{t['h3']}</h2>
                  <div className="flex flex-row justify-center items-start gap-8 pt-4">
                    <a href="https://www.instagram.com/plk.galacticos/" target="_blank"><img className="w-10 h-auto" src="/icons/ig-white.svg" alt="Instagram white icon" /></a>
                    <a href="https://www.tiktok.com/@plk.galacticos" target="_blank"><img className="w-10 h-auto" src="/icons/tt-white.svg" alt="Tik Tok white icon" /></a>
                    <a href="https://www.youtube.com/@PLKGalacticos" target="_blank"><img className="w-10 h-auto" src="/icons/yt-white.svg" alt="YouTube white icon" /></a>
                  </div>
                  <div className='pt-4'>
                    <a className="flex flex-row justify-center items-center" href="mailto:plkgalacticos@gmail.com">
                      <img className="w-12 h-auto pr-2" src="/icons/mail-white.svg" alt="Mail white icon" />
                      plkgalacticos&#64;gmail.com
                    </a>
                  </div>
                </div>
            </div>

            
        </div>

        <div className='pt-2 w-full flex flex-col justify-center items-center'>
          <div className="w-full max-container flex flex-row justify-center items-center gap-4 pt-4 border-t-2 border-logo-yellow">
            <a href="https://www.powerlifting.sport/" target="_blank"><img className="w-16 h-auto" src="/images/ipf_logo.png" alt="Internation Powerligting Federation logo"/></a>
            <a href="https://www.europowerlifting.org/" target="_blank"><img className="w-16 h-auto" src="/images/epf_logo.png" alt="European Powerlifting Federation logo"/></a>
            <a href="https://www.hpls-powerlifting.hr/" target="_blank"><img className="w-16 h-auto rounded-md" src="/images/hpls_logo_t.png" alt="Croatian Powerlifting Federation logo"/></a>
          </div>

          <div className="w-full flex flex-col md:flex-row justify-center items-center gap-4 md:gap-12 mt-8 text-sm">
            <p>WebDesign by Patrick&Petar</p>
            <p>© 2025 Powerlifting klub Galacticos. {t['footer.copy']} </p>
          </div>
        </div>
    </footer>
  )
}

export default Footer