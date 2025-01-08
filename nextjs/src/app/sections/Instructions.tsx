import React from 'react'

const Instructions = ({t}) => {
    t = t['instructions']

  return (
    <section className='relative bg-black text-white px-4 py-8 lg:px-16 lg:pb-32 pt-32 flex flex-col gap-16'>
        <h1 className='heading-text text-center z-10'>{t['h']}</h1>
        <div className='flex flex-col gap-6 z-10 max-container-sm'>
            <h2 className='subheading-text'>{t['h1']}</h2>
            <ol className='flex flex-col gap-2'>
                <li className='flex flex-row items-center gap-4'><img className='w-6 h-auto' src="/images/logo/plk-galacticos-logo-round.png" alt="" />{t['l1']}</li>
                <li className='flex flex-row items-center gap-4'><img className='w-6 h-auto' src="/images/logo/plk-galacticos-logo-round.png" alt="" />{t['l2']}</li>
                <li className='flex flex-row items-center gap-4'><img className='w-6 h-auto' src="/images/logo/plk-galacticos-logo-round.png" alt="" />{t['l3']}</li>
                <li className='flex flex-row items-center gap-4'><img className='w-6 h-auto' src="/images/logo/plk-galacticos-logo-round.png" alt="" />{t['l4']}</li>
                <li className='flex flex-row items-center gap-4'><img className='w-6 h-auto' src="/images/logo/plk-galacticos-logo-round.png" alt="" />{t['l5']}</li>
            </ol>
            <div>
                <p>{t['p1']}</p>
                <p>{t['p2']} <a href='mailto:plkgalacticos@gmail.com' className='text-logo-yellow underline'>plkgalacticos@gmail.com</a>.</p>
                <p>{t['p3']}</p>
            </div>
            <div className='realative flex flex-col lg:flex-row flex-wrap justify-center items-center gap-8 mt-8'>
                <a className='relative' href="/docs/obrazac_pristupnica_eng.docx" download="obrazac_pristupnica_eng.docx">
                    <div className="button" data-tooltip="Size: 2470KB">
                        <div className="button-wrapper">
                          <div className="text font-semibold">
                            <span className="mr-4">
                              <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1.6em" height="2em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15V3m0 12l-4-4m4 4l4-4M2 17l.621 2.485A2 2 0 0 0 4.561 21h14.878a2 2 0 0 0 1.94-1.515L22 17"></path></svg>
                            </span>obrazac_pristupnica_eng</div>
                            
                            <span className="icon">
                              <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="2em" height="2em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15V3m0 12l-4-4m4 4l4-4M2 17l.621 2.485A2 2 0 0 0 4.561 21h14.878a2 2 0 0 0 1.94-1.515L22 17"></path></svg>
                            </span>
                        </div>
                    </div>
                </a>
                <a className='relative' href="/docs/registracija_eng.docx" download="registracija_eng.docx">
                    <div className="button" data-tooltip="Size: 103KB">
                        <div className="button-wrapper">
                          <div className="text font-semibold">
                            <span className="mr-4">
                              <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1.6em" height="2em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15V3m0 12l-4-4m4 4l4-4M2 17l.621 2.485A2 2 0 0 0 4.561 21h14.878a2 2 0 0 0 1.94-1.515L22 17"></path></svg>
                            </span>registracija_eng</div>

                            <span className="icon">
                              <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="2em" height="2em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15V3m0 12l-4-4m4 4l4-4M2 17l.621 2.485A2 2 0 0 0 4.561 21h14.878a2 2 0 0 0 1.94-1.515L22 17"></path></svg>
                            </span>
                        </div>
                    </div>
                </a>
                <a className='relative' href="/docs/izjava_eng.docx" download="izjava_eng.docx">
                    <div className="button" data-tooltip="Size: 99KB">
                        <div className="button-wrapper">
                          <div className="text font-semibold">
                            <span className="mr-4">
                              <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1.6em" height="2em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15V3m0 12l-4-4m4 4l4-4M2 17l.621 2.485A2 2 0 0 0 4.561 21h14.878a2 2 0 0 0 1.94-1.515L22 17"></path></svg>
                            </span>izjava_eng</div>

                            <span className="icon">
                              <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="2em" height="2em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15V3m0 12l-4-4m4 4l4-4M2 17l.621 2.485A2 2 0 0 0 4.561 21h14.878a2 2 0 0 0 1.94-1.515L22 17"></path></svg>
                            </span>
                        </div>
                    </div>
                </a>
                {/* <a href="/docs/registracija_eng.docx" download="registracija_eng.docx">Click here to download the document</a>
                <a href="/docs/izjava_eng.docx" download="izjava_eng.docx">Click here to download the document</a> */}
            </div>

        </div>

        <div className='border-4 border-gold rounded-md p-4 rotate-45 absolute -left-44 -top-0'>
            <div className='border-4 border-gold rounded-md p-4'>
                <div className='border-2 border-gold rounded-md p-4'>
                    <div className='border-2 border-gold rounded-md p-4'>
                        <div className='border-[1px] border-gold rounded-md p-4'>
                            <div className='border-[1px] border-gold rounded-md p-4 min-w-16 min-h-16'></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className='border-4 border-gold rounded-md p-4 rotate-45 absolute -right-44 -bottom-24 lg:-bottom-8 z-0 overflow-x-hidden'>
            <div className='border-4 border-gold rounded-md p-4'>
                <div className='border-2 border-gold rounded-md p-4'>
                    <div className='border-2 border-gold rounded-md p-4'>
                        <div className='border-[1px] border-gold rounded-md p-4'>
                            <div className='border-[1px] border-gold rounded-md p-4 min-w-28 min-h-28'></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Instructions