import Image from 'next/image'
import React from 'react'

const Instructions = ({t}) => {
    t = t['instructions']

  return (
    <section className='relative bg-black text-white px-4 py-8 lg:px-16 pb-32 pt-32 flex flex-col gap-16 '>
        <h1 className='heading-text text-center z-10'>{t['h']}</h1>
        <div className='flex flex-col gap-8 z-10 max-container-sm'>
            <h2 className='subheading-text'>{t['h1']}</h2>
            <h3 className='text-lg'>{t['h2']}</h3>
            <ol className='flex flex-col gap-4 list-decimal ml-4'>
                <li><p className='font-semibold text-logo-yellow'>{t['l11']}</p> {t['l12']}</li>
                <li><p className='font-semibold text-logo-yellow'>{t['l21']}</p> {t['l22']} <a href="https://www.hpls-powerlifting.hr/kontakt/" className='text-logo-yellow underline'>{t['l22-2']}</a> {t['l22-3']}</li>
                <li><p className='font-semibold text-logo-yellow'>{t['l31']}</p> {t['l32']}</li>
                <li><p className='font-semibold text-logo-yellow'>{t['l41']}</p> {t['l42']}</li>
                <li><p className='font-semibold text-logo-yellow'>{t['l51']}</p> {t['l52']}</li>
            </ol>

            <div className='mt-8'>
                <h3 className='text-xl font-semibold mb-4'>{t['h3']}</h3>
                <p>{t['p1']}</p>
                <p>{t['p2']} <a href='mailto:plkgalacticos@gmail.com' className='text-logo-yellow underline'>plkgalacticos@gmail.com</a></p>
            </div>

            <div className='flex flex-col gap-2 mt-8'>
             <h3 className='text-xl font-semibold mb-4'>{t['h4']}</h3>
             <p>{t['p3']}:</p>
             <ol className='flex flex-col gap-2'>
                 <li className='flex flex-row items-center gap-4'><Image className='w-6 h-auto' src="/images/logo/plk-galacticos-logo-round.png" alt="" loading='lazy' width={309} height={402} /><span>{t['d1']}.</span></li>
                 <li className='flex flex-row items-center gap-4'><Image className='w-6 h-auto' src="/images/logo/plk-galacticos-logo-round.png" alt="" loading='lazy' width={309} height={402} /><span>{t['d21']} <span className='font-semibold'>{t['d22']}</span>.</span></li>
                 <li className='flex flex-row items-center gap-4'><Image className='w-6 h-auto' src="/images/logo/plk-galacticos-logo-round.png" alt="" loading='lazy' width={309} height={402} /><span>{t['d31']} <span className='font-semibold'>{t['d32']}</span>.</span></li>
                 <li className='flex flex-row items-center gap-4'><Image className='w-6 h-auto' src="/images/logo/plk-galacticos-logo-round.png" alt="" loading='lazy' width={309} height={402} /><span>{t['d41']} <span className='font-semibold'>{t['d42']}</span> {t['d43']}.</span></li>
                 <li className='flex flex-row items-center gap-4'><Image className='w-6 h-auto' src="/images/logo/plk-galacticos-logo-round.png" alt="" loading='lazy' width={309} height={402} /><span>{t['d51']} <span className='font-semibold'>{t['d52']}</span>.</span></li>
             </ol>
            </div>
            <div className='realative flex flex-col lg:flex-row flex-wrap justify-center items-center gap-8 mt-8'>
                <a className='relative' href={`/docs/${t['doc1']}.pdf`} download={`${t['doc1']}.pdf`}>
                    <div className="button" data-tooltip="Size: 195KB">
                        <div className="button-wrapper">
                          <div className="text font-semibold">
                            <span className="mr-4">
                              <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1.6em" height="2em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15V3m0 12l-4-4m4 4l4-4M2 17l.621 2.485A2 2 0 0 0 4.561 21h14.878a2 2 0 0 0 1.94-1.515L22 17"></path></svg>
                            </span>{t['doc1']}</div>
                            
                            <span className="icon">
                              <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="2em" height="2em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15V3m0 12l-4-4m4 4l4-4M2 17l.621 2.485A2 2 0 0 0 4.561 21h14.878a2 2 0 0 0 1.94-1.515L22 17"></path></svg>
                            </span>
                        </div>
                    </div>
                </a>
                <a className='relative' href={`/docs/${t['doc2']}.pdf`} download={`${t['doc2']}.pdf`}>
                    <div className="button" data-tooltip="Size: 233KB">
                        <div className="button-wrapper">
                          <div className="text font-semibold">
                            <span className="mr-4">
                              <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1.6em" height="2em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15V3m0 12l-4-4m4 4l4-4M2 17l.621 2.485A2 2 0 0 0 4.561 21h14.878a2 2 0 0 0 1.94-1.515L22 17"></path></svg>
                            </span>{t['doc2']}</div>

                            <span className="icon">
                              <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="2em" height="2em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15V3m0 12l-4-4m4 4l4-4M2 17l.621 2.485A2 2 0 0 0 4.561 21h14.878a2 2 0 0 0 1.94-1.515L22 17"></path></svg>
                            </span>
                        </div>
                    </div>
                </a>
                <a className='relative' href={`/docs/${t['doc3']}.pdf`} download={`${t['doc3']}.pdf`}>
                    <div className="button" data-tooltip="Size: 190KB">
                        <div className="button-wrapper">
                          <div className="text font-semibold">
                            <span className="mr-4">
                              <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1.6em" height="2em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15V3m0 12l-4-4m4 4l4-4M2 17l.621 2.485A2 2 0 0 0 4.561 21h14.878a2 2 0 0 0 1.94-1.515L22 17"></path></svg>
                            </span>{t['doc3']}</div>

                            <span className="icon">
                              <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="2em" height="2em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15V3m0 12l-4-4m4 4l4-4M2 17l.621 2.485A2 2 0 0 0 4.561 21h14.878a2 2 0 0 0 1.94-1.515L22 17"></path></svg>
                            </span>
                        </div>
                    </div>
                </a>
                <a className='relative' href={`/docs/${t['doc4']}.pdf`} download={`${t['doc4']}.pdf`}>
                    <div className="button" data-tooltip="Size: 143KB">
                        <div className="button-wrapper">
                          <div className="text font-semibold">
                            <span className="mr-4">
                              <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1.6em" height="2em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15V3m0 12l-4-4m4 4l4-4M2 17l.621 2.485A2 2 0 0 0 4.561 21h14.878a2 2 0 0 0 1.94-1.515L22 17"></path></svg>
                            </span>{t['doc4']}</div>

                            <span className="icon">
                              <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="2em" height="2em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15V3m0 12l-4-4m4 4l4-4M2 17l.621 2.485A2 2 0 0 0 4.561 21h14.878a2 2 0 0 0 1.94-1.515L22 17"></path></svg>
                            </span>
                        </div>
                    </div>
                </a>
                {/* <a href="/docs/registracija_eng.pdf" download="registracija_eng.pdf">Click here to download the document</a>
                <a href="/docs/izjava_eng.pdf" download="izjava_eng.pdf">Click here to download the document</a> */}
            </div>

            <div className='mt-8'>
                <p>{t['p4']} <a href="mailto:plkgalacticos@gmail.com" className='text-logo-yellow underline'>{t['p4-2']}</a> {t['p4-3']} <a href="https://www.instagram.com/plk.galacticos/" target='_blank' className='text-logo-yellow underline'>{t['p4-4']}</a></p>
                <p>{t['p5']}</p>
            </div>

        </div>

        <div className='border-4 border-gold rounded-md p-4 rotate-45 absolute -left-56 -top-12 lg:-left-56  lg:-top-0'>
            <div className='border-4 border-gold rounded-md p-4'>
                <div className='border-2 border-gold rounded-md p-4'>
                    <div className='border-2 border-gold rounded-md p-4'>
                        <div className='border-[1px] border-gold rounded-md p-4'>
                            <div className='border-[1px] border-gold rounded-md p-4 min-w-20 min-h-20  lg:min-w-32 lg:min-h-32'></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className='border-4 border-gold rounded-md p-4 rotate-45 absolute -right-44 lg:-right-56 bottom-28 lg:-bottom-8 z-0 overflow-hidden'>
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

export default Instructions