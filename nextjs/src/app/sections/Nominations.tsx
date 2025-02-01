import React from 'react'

const Nominations = ({t}) => {
  const tNav = t['nav']
  t = t['nominations']
  return (
    <section className='relative bg-black text-white px-4 py-8 lg:px-16 pb-32 pt-32 flex flex-col gap-16 overflow-hidden'>
        <h1 className='heading-text text-center z-10'>{t['h']}</h1>
        <div className='flex flex-col gap-12 z-10 max-container-sm'>
            
            
            <div className='flex flex-col gap-8'>
                <h2 className='subheading-text'>{t['h1']}</h2>

                <h3 className='text-lg font-semibold'>{t['h12']}</h3>
                <ol className='flex flex-col gap-4 list-decimal ml-4'>
                    <li className='flex flex-row items-center gap-4'><img className='w-6 h-auto' src="/images/logo/plk-galacticos-logo-round.png" alt="" /><p>{t['l11']} <span className='font-semibold text-logo-yellow'>{t['l12']}</span> {t['l13']} <span className='font-semibold text-logo-yellow'>{t['l14']}</span> {t['l15']}</p></li>
                    <li className='flex flex-row items-center gap-4'><img className='w-6 h-auto' src="/images/logo/plk-galacticos-logo-round.png" alt="" /><p><span className='font-semibold text-logo-yellow'>{t['l21']}</span> {t['l22']} </p></li>
                    <li className='flex flex-row items-center gap-4'><img className='w-6 h-auto' src="/images/logo/plk-galacticos-logo-round.png" alt="" /><p><span className='font-semibold text-logo-yellow'>{t['l31']}</span> {t['l32']} <span className='font-semibold text-logo-yellow'>{t['l33']}</span> {t['l34']} <span className='font-semibold text-logo-yellow'>{t['l35']}</span></p></li>
                </ol>
                
                <h3 className='text-lg font-semibold'>{t['h13']}</h3>
                <ol className='flex flex-col gap-4 list-decimal ml-4'>
                    <li className='flex flex-row items-center gap-4'><img className='w-6 h-auto' src="/images/logo/plk-galacticos-logo-round.png" alt="" /><p>{t['l41']} <span className='font-semibold text-logo-yellow'>{t['l42']}</span> {t['l43']} <span className='font-semibold text-logo-yellow'>{t['l44']}</span> {t['l45']}</p></li>
                    <li className='flex flex-row items-start gap-4'>
                        <img className='w-6 h-auto' src="/images/logo/plk-galacticos-logo-round.png" alt="" />
                        <div>
                            <p>{t['l5']}</p>
                            <ul className='list-disc ml-8'>
                                <li>{t['l61']}<span className='font-semibold text-logo-yellow'> {t['l62']}</span> {t['l63']} <span className='font-semibold text-logo-yellow'>josiptoric1997@gmail.com.</span></li>
                                <li>{t['l71']}<span className='font-semibold text-logo-yellow'> {t['l72']}</span> {t['l73']}</li>
                            </ul>
                        </div>
                     </li>
                     <li className='flex flex-row items-start gap-4'>
                        <img className='w-6 h-auto' src="/images/logo/plk-galacticos-logo-round.png" alt="" />
                        <div>
                            <p className='font-semibold text-logo-yellow'>{t['l8']}</p>
                            <ul className='list-disc ml-8'>
                                <li>{t['l91']}<span className='font-semibold text-logo-yellow'> {t['l92']}</span></li>
                                <li>{t['l101']}<span className='font-semibold text-logo-yellow'> {t['l102']}</span></li>
                            </ul>
                        </div>
                     </li>
                </ol>
                
                <h3 className='text-lg font-semibold'>{t['h14']}</h3>
                <ol className='flex flex-col gap-4 list-decimal ml-4'>
                    <li className='flex flex-row items-center gap-4'><img className='w-6 h-auto' src="/images/logo/plk-galacticos-logo-round.png" alt="" /><p>{t['l11-1']} <span className='font-semibold text-logo-yellow'>{t['l11-2']}</span></p></li>
                </ol>
            </div>

            
            {/* Podnosenje nominacija i izmjena */}
            <div className='mt-8'>
                <h2 className='subheading-text'>{t['h2']}</h2>
                <ol className='flex flex-col gap-4 list-decimal ml-4 mt-8'>
                    <li className='flex flex-row items-center gap-4'><img className='w-6 h-auto' src="/images/logo/plk-galacticos-logo-round.png" alt="" /><p>{t['l12-1']} <a href={'/' + tNav['application-link']} className='font-semibold text-logo-yellow underline'>{t['l12-2']}</a></p></li>
                    <li className='flex flex-row items-center gap-4'><img className='w-6 h-auto' src="/images/logo/plk-galacticos-logo-round.png" alt="" /><p>{t['l13-1']} <span className='font-semibold text-logo-yellow'>josiptoric1997@gmail.com</span> {t['l13-3']}</p></li>
                    <li className='flex flex-row items-start gap-4'>
                        <img className='w-6 h-auto' src="/images/logo/plk-galacticos-logo-round.png" alt="" />
                        <div>
                            <p>{t['l14-1']}</p>
                            <ul className='list-disc ml-8'>
                                <li><span className='font-semibold text-logo-yellow'>{t['l15-1']}</span> {t['l15-2']}</li>
                                <li><span className='font-semibold text-logo-yellow'>{t['l16-1']}</span> {t['l16-2']}</li>
                            </ul>
                        </div>
                    </li>
                </ol>
            </div>



            {/* Rokovi i objave */}
            <div className='mt-8'>
                <h3 className='subheading-text'>{t['h3']}</h3>
                <ol className='flex flex-col gap-4 list-decimal ml-4 mt-8'>
                    <li className='flex flex-row items-start gap-4'>
                        <img className='w-6 h-auto' src="/images/logo/plk-galacticos-logo-round.png" alt="" />
                        <div>
                            <p><span className='font-semibold text-logo-yellow'>{t['l17-1']}</span> {t['l17-2']} <span className='font-semibold text-logo-yellow'>{t['l17-3']}</span></p>
                            <ul className='list-disc ml-8'>
                                <li>{t['l18-1']}<span className='font-semibold text-logo-yellow'> {t['l18-2']}</span></li>
                                <li>{t['l19-1']}<span className='font-semibold text-logo-yellow'> {t['l19-2']}</span></li>
                            </ul>
                        </div>
                     </li>
                     <li className='flex flex-row items-start gap-4'>
                        <img className='w-6 h-auto' src="/images/logo/plk-galacticos-logo-round.png" alt="" />
                        <div>
                            <p><span className='font-semibold text-logo-yellow'>{t['l20-1']}</span> {t['l20-2']} <span className='font-semibold text-logo-yellow'>{t['l17-3']}</span></p>
                            <ul className='list-disc ml-8'>
                                <li>{t['l21-1']}<span className='font-semibold text-logo-yellow'> {t['l21-2']}</span></li>
                                <li>{t['l22-1']}<span className='font-semibold text-logo-yellow'> {t['l22-2']}</span></li>
                            </ul>
                        </div>
                     </li>
                </ol>
            </div>


            {/* Detalji natjecanja */}
            <div className='flex flex-col gap-2 mt-8'>
                <h2 className='subheading-text'>{t['h4']}</h2>
                <ol className='flex flex-col gap-4 list-decimal ml-4 mt-8'>
                    <li className='flex flex-row items-center gap-4'><img className='w-6 h-auto' src="/images/logo/plk-galacticos-logo-round.png" alt="" /><p>{t['l23-1']} <span className='font-semibold text-logo-yellow'>{t['l23-2']}</span></p></li>
                    <li className='flex flex-row items-center gap-4'><img className='w-6 h-auto' src="/images/logo/plk-galacticos-logo-round.png" alt="" /><p>{t['l24-1']} <span className='font-semibold text-logo-yellow'>{t['l24-2']}</span></p></li>
                </ol>
            </div>

            {/* Rezultati */}
            <div className='flex flex-col gap-2 mt-8'>
                <h2 className='subheading-text'>{t['h5']}</h2>
                <ol className='flex flex-col gap-4 list-decimal ml-4 mt-8'>
                    <li className='flex flex-row items-center gap-4'><img className='w-6 h-auto' src="/images/logo/plk-galacticos-logo-round.png" alt="" /><p>{t['l25-1']} <span className='font-semibold text-logo-yellow'>{t['l25-2']}</span></p></li>
                    <li className='flex flex-row items-center gap-4'><img className='w-6 h-auto' src="/images/logo/plk-galacticos-logo-round.png" alt="" /><p>{t['l26-1']} <span className='font-semibold text-logo-yellow'>{t['l26-2']}</span></p></li>
                </ol>
            </div>

            <div className='mt-8'>
                <p className='font-semibold'>{t['p']}</p>
            </div>

        </div>

        <div className='border-4 border-gold rounded-md p-4 rotate-45 absolute -left-44 lg:-left-56 -top-10 lg:-top-0'>
            <div className='border-4 border-gold rounded-md p-4'>
                <div className='border-2 border-gold rounded-md p-4'>
                    <div className='border-2 border-gold rounded-md p-4'>
                        <div className='border-[1px] border-gold rounded-md p-4'>
                            <div className='border-[1px] border-gold rounded-md p-4 min-w-16 min-h-16  lg:min-w-32 lg:min-h-32'></div>
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

export default Nominations