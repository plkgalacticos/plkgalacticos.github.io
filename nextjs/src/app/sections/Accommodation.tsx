import React from 'react'

const Accommodation = ({t}) => {
  t = t['accommodation']
  return (
    <section className='relative bg-black text-white py-8 pb-32 pt-32 flex flex-col justify-center items-center gap-16 overflow-x-hidden px-4 lg:px-16'>
        <h1 className='z-10 heading-text text-center'>{t['h1']} – <span className='text-logo-yellow'>Hotel Slavonija</span></h1>

        <div className='max-container-sm flex flex-col justify-center items-start gap-24 pt-16'>
            
            <div className='flex flex-col lg:flex-row gap-12 gradient-yellow-bl rounded-xl'>
                <div className='flex-1'>
                    <h2 className='subheading-text'><span className='font-semibold text-logo-yellow'>{t['h2']}</span> </h2>
                    <h3 className='text-xl font-semibold mt-4'>{t['p1']}</h3>
                    <p className='mt-4'>{t['p2']}</p>
                    <p className='font-semibold text-lg mt-4'>{t['p3']}</p>
                </div>
                <div className='flex-1'>
                    <iframe className={`rounded-md min-w-full max-w-full h-72 md:h-96 lg:h-[450px]`}
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2807.039689308962!2d18.8029382!3d45.2874197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47667a16bcca35a9%3A0xa94aabc6ed8f0a55!2sHotel%20Slavonija!5e0!3m2!1shr!2shr!4v1737889144471!5m2!1shr!2shr" width="600" height="450" allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    
                </div>
            </div>

            <div>
                <h2 className='subheading-text'>{t['h31']} <span className='text-logo-yellow'>{t['h32']}</span></h2>
                <ul className='flex flex-col gap-2 mt-8'>
                  <li className='flex flex-row items-start gap-4'><img className='w-6 h-auto max-sm:pt-[0.375rem]' src="/images/logo/plk-galacticos-logo-round.png" alt="" /><span><span className='font-extrabold'>{t['l11']}</span>, {t['l12']}<span className='font-extrabold'> {t['l13']}</span> {t['l14']}</span></li>
                  <li className='flex flex-row items-start gap-4'><img className='w-6 h-auto max-sm:pt-[0.375rem]' src="/images/logo/plk-galacticos-logo-round.png" alt="" /><span><span className='font-extrabold'>{t['l21']}</span> {t['l22']}</span></li>
                  <li className='flex flex-row items-start gap-4'><img className='w-6 h-auto max-sm:pt-[0.375rem]' src="/images/logo/plk-galacticos-logo-round.png" alt="" /><span>{t['l31']} <span className='font-extrabold'>{t['l32']}</span></span></li>
                </ul>
            </div>

            <div className='overflow-x-auto w-full z-10'>
                <table className="z-10 table-scrollbar table-auto overflow-x-scroll bg-black border-[3px] border-logo-yellow rounded-lg border-collapse border-spacing-0 mx-auto">
                    <thead>
                      <tr>
                        <th className="subheading-text p-4" colSpan={4}>{t['tableh']}</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className='t-row'>
                        <td className="t-item"></td>
                        <td className="t-item font-semibold">{t['table11']}</td>
                        <td className="t-item font-semibold">{t['table12']}</td>
                        <td className="t-item font-semibold">{t['table13']}</td>
                      </tr>
                      <tr className='t-row'>
                        <td className="t-item font-semibold">{t['table2']}</td>
                        <td className="t-item">51 EUR</td>
                        <td className="t-item">63 EUR</td>
                        <td className="t-item">73 EUR</td>
                      </tr>
                      <tr className='t-row'>
                        <td className="t-item font-semibold">{t['table3']}</td>
                        <td className="t-item">47 EUR</td>
                        <td className="t-item">59 EUR</td>
                        <td className="t-item">69 EUR</td>
                      </tr>
                      <tr className='t-row'>
                        <td className="t-item font-semibold">{t['table4']}</td>
                        <td className="t-item">43 EUR</td>
                        <td className="t-item">55 EUR</td>
                        <td className="t-item">65 EUR</td>
                      </tr>
                      <tr className='t-row'>
                        <td className="t-item font-semibold">{t['table5']}</td>
                        <td className="t-item">40 EUR</td>
                        <td className="t-item">52 EUR</td>
                        <td className="t-item">62 EUR</td>
                      </tr>
                    </tbody>
                    </table>
            </div>

            <div className='z-10'>
                <h2 className='subheading-text'>{t['h41']} <span className='text-logo-yellow'>{t['h42']}</span></h2>
                <ol className='flex flex-col gap-2 mt-8'>
                <li className='flex flex-row items-center gap-4'><img className='w-6 h-auto' src="/images/logo/plk-galacticos-logo-round.png" alt="" /><span><span className='font-semibold'>{t['l41']}</span> {t['l42']}</span></li>
                <li className='flex flex-row items-center gap-4'><img className='w-6 h-auto' src="/images/logo/plk-galacticos-logo-round.png" alt="" /><span><span className='font-semibold'>{t['l51']}</span> {t['l52']}</span></li>
                <li className='flex flex-row items-start gap-4'><img className='w-6 h-auto ' src="/images/logo/plk-galacticos-logo-round.png" alt="" /><span><span className='font-semibold'>{t['l61']}</span> {t['l62']}</span></li>
                <li className='flex flex-row items-start gap-4'><img className='w-6 h-auto max-sm:pt-[0.375rem]' src="/images/logo/plk-galacticos-logo-round.png" alt="" /><span><span className='font-semibold'>{t['l71']}</span> {t['l72']}</span></li>
                <li className='flex flex-row items-start gap-4'><img className='w-6 h-auto max-sm:pt-[0.375rem]' src="/images/logo/plk-galacticos-logo-round.png" alt="" /><span><span className='font-semibold'>{t['l81']}</span> {t['l82']}</span></li>
                <li className='flex flex-row items-start gap-4'><img className='w-6 h-auto max-sm:pt-[0.375rem]' src="/images/logo/plk-galacticos-logo-round.png" alt="" /><span><span className='font-semibold'>{t['l91']}</span> {t['l92']}</span></li>
             </ol>
            </div>

            <div>
                <h2 className='text-lg font-semibold'>{t['p4']}</h2>
            </div>

            <div className='w-full flex flex-wrap flex-col lg:flex-row justify-center items-center gap-12 z-[1]'>
                <img className='w-full max-w-md h-auto' src="/images/hotel/hotel-slavonija-1.jpg" alt="Hotel Slavonija" />
                <img className='w-full max-w-md h-auto' src="/images/hotel/hotel-slavonija-2.jpg" alt="Hotel Slavonija" />
                <img className="w-full max-w-md h-auto" src="/images/hotel/hotel-slavonija-3.jpg" alt="Hotel Slavonija" />

            </div>
        </div>

        <div className='border-4 border-gold rounded-md p-4 rotate-45 absolute -left-44 lg:-left-56 -top-10 lg:-top-0'>
            <div className='border-4 border-gold rounded-md p-4'>
                <div className='border-2 border-gold rounded-md p-4'>
                    <div className='border-2 border-gold rounded-md p-4'>
                        <div className='border-[1px] border-gold rounded-md p-4'>
                            <div className='border-[1px] border-gold rounded-md p-4 min-w-16 min-h-16 lg:min-w-32 lg:min-h-32'></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className='border-4 border-gold rounded-md p-4 rotate-45 absolute -right-44 lg:-right-56 bottom-[600px] lg:bottom-64 z-0 overflow-hidden'>
            <div className='border-4 border-gold rounded-md p-4'>
                <div className='border-2 border-gold rounded-md p-4'>
                    <div className='border-2 border-gold rounded-md p-4'>
                        <div className='border-[1px] border-gold rounded-md p-4'>
                            <div className='border-[1px] border-gold rounded-md p-4 min-w-16 min-h-16 lg:min-w-32 lg:min-h-32'></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Accommodation