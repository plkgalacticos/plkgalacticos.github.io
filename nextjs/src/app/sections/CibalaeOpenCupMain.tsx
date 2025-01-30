import React from 'react'

const CibalaeOpenCupMain = ({t}) => {
    const tNav = t['nav']
    t = t['competition'];
  return (
    <section className="relative w-full overflow-hidden bg-black text-white py-8 pb-32 pt-32 flex flex-col justify-center items-center gap-16 overflow-x-hidden px-4 lg:px-16">
      <div className=''>
        <h1 className="z-10 heading-text text-center">{t['h']}</h1>
        <h2 className="text-center subheading-text mt-4">{t['date']}</h2>
      </div>

      <div className="w-full flex flex-col justify-center items-start gap-16">
        {/* Registration Links */}
        <div className="flex flex-row gap-4 w-full justify-center">
          <a href={'/' + tNav['application-link']} className="btn-primary">
            {t['btn1']}
          </a>
          <a href={'/' + tNav['nominations-link']} className="btn-secondary">
            {t['btn2']}
          </a>
        </div>

        <div className='max-container-sm'>
            <a href={'/' + tNav['foreign-link']} className='text-logo-yellow underline font-semibold text-xl'><p>{t['p1']}</p></a>
        </div>

        {/* Competition */}
        <div className='max-container-sm'>
          <h2 className='subheading-text'>{t['h2']}</h2>
          <p className="max-w-2xl font-semibold mt-4">{t['p2']}</p>
        </div>

        {/* Schedule */}
        <div className='max-container-sm'>
          <h2 className="subheading-text">{t['h31']} <span className='text-logo-yellow'>{t['h32']}</span></h2>
          <p className="mt-4">{t['p3']}</p>
          <ul className="mt-16 flex flex-row justify-center md:justify-between items-start flex-wrap gap-12">
            <li className='flex flex-col justify-start items-start gap-6 gradient-yellow p-2 rounded-md min-h-80 w-64'>
                <p className='font-semibold text-lg'>{t['s1']}</p>
                <div>
                    <p>{t['s11']}</p>
                    <p className='flex flex-row items-center gap-4 mt-2'><img className='w-4 h-auto' src="/images/logo/plk-galacticos-logo-round.png" alt="" /><span>{t['s12']}</span></p>
                    <p className='flex flex-row items-center gap-4'><img className='w-4 h-auto' src="/images/logo/plk-galacticos-logo-round.png" alt="" /><span>{t['s13']}</span></p>
                </div>
                <div>
                    <p>{t['s14']}</p>
                    <p className='flex flex-row items-center gap-4 mt-2'><img className='w-4 h-auto' src="/images/logo/plk-galacticos-logo-round.png" alt="" /><span>{t['s15']}</span></p>
                    <p className='flex flex-row items-center gap-4'><img className='w-4 h-auto' src="/images/logo/plk-galacticos-logo-round.png" alt="" /><span>{t['s16']}</span></p>
                </div>
                <div>
                    <p>{t['s17']}</p>
                </div>
            </li>
            <li className='flex flex-col justify-start items-start gap-6 gradient-yellow p-2 rounded-md min-h-80 w-64'>
                <p className='font-semibold text-lg'>{t['s2']}</p>
                <div>
                    <p>{t['s21']}</p>
                    <p className='flex flex-row items-center gap-4 mt-2'><img className='w-4 h-auto' src="/images/logo/plk-galacticos-logo-round.png" alt="" /><span>{t['s22']}</span></p>
                    <p className='flex flex-row items-center gap-4'><img className='w-4 h-auto' src="/images/logo/plk-galacticos-logo-round.png" alt="" /><span>{t['s23']}</span></p>
                </div>
            </li>
            <li className='flex flex-col justify-start items-start gap-6 gradient-yellow p-2 rounded-md min-h-80 w-64'>
                <p className='font-semibold text-lg'>{t['s3']}</p>
                <div>
                    <p>{t['s31']}</p>
                    <p className='flex flex-row items-center gap-4'><img className='w-4 h-auto' src="/images/logo/plk-galacticos-logo-round.png" alt="" /><span>{t['s32']}</span></p>
                </div>
            </li>
          </ul>
        </div>

        {/* Costs Table */}
        <div className='mx-auto min-w-full bg-icon bg-repeat bg-blend-darken bg-black/70 py-24 lg:px-24'>
          <div className='max-container-sm'>
            <h2 className="subheading-text text-logo-yellow">{t['h4']}</h2>
            <table className="z-10 table-scrollbar table-auto overflow-x-scroll bg-black border-[3px] border-logo-yellow rounded-lg border-collapse border-spacing-0 mx-auto mt-8">
              <tbody>
                  <tr className="t-row">
                    <td className="t-item-md font-extrabold"><span className='text-xl'>{t['th1']}</span></td>
                    <td className="t-item-md">
                      <span className='font-extrabold text-xl'>{t['tp12']}</span>
                      <p className='mt-2'>{t['tt12']}</p>
                    </td>
                  </tr>
                  <tr className="t-row">
                    <td className="t-item-md">
                      <span className='font-extrabold text-xl'>{t['th2']}</span>
                      <p className='mt-2'>{t['tt21']}</p>
                    </td>
                    <td className="t-item-md">
                      <span className='font-extrabold text-xl'>{t['tp22']}</span>
                      <p className='mt-2'>{t['tt22']}</p>
                    </td>
                  </tr>
                  <tr className="t-row">
                    <td className="t-item-md">
                    <span className='font-extrabold text-xl'>{t['th3']}</span>
                      <br />
                      <p className='mt-2'>{t['tt31']}</p>
                    </td>
                    <td className="t-item-md">
                      <span className='font-extrabold text-xl'>{t['tp32']}</span>
                      <p className='mt-2'>{t['tt32']}</p>
                    </td>
                  </tr>
              </tbody>
            </table>
            <p className="mt-8 italic">{t['p4']}</p>
          </div>
        </div>

        {/* Seminar */}
        <div className='max-container-sm'>
            <h2 className="subheading-text">{t['h5']}</h2>
            <p className="mt-4">{t['p51']} <span className='font-extrabold text-logo-yellow'>{t['p52']}</span> {t['p53']}</p>
            <p className='mt-4 text-lg font-semibold'>{t['p54']} <span className=' text-logo-yellow'>{t['p55']}</span></p>
            <p className='mt-4'>{t['p56']}</p>
        </div>

        {/* Location */}
        <div className='flex flex-col lg:flex-row flex-wrap justify-center lg:justify-between items-center gap-12 w-full max-container-sm py-16'>
          {/* <h2 className="subheading-text">{t['h6']}</h2> */}

            <div className="card">
                <span></span>
                <div className="content flex flex-col justify-start items-start">
                    <h3 className='uppercase font-semibold text-lg'>{t['h6']}</h3>
                    <p className='mt-2'>Vinkovci, {t['cro']}</p>
                    <div className='overflow-hidden border-white'>
                        <iframe className='absolute bottom-[-292px] left-[6px] right-0 w-[242px] h-[180px] rounded-b-[1em] border-2' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d89861.33024828765!2d18.7910944!3d45.264643549999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475c8a8883c30259%3A0x400ad50862bceb0!2sVinkovci!5e0!3m2!1shr!2shr!4v1738249615301!5m2!1shr!2shr" width="600" height="450" allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>

            <div className="card">
                <span></span>
                <div className="content flex flex-col justify-start items-start">
                    <h3 className='uppercase font-semibold text-lg'>{t['h7']}</h3>
                    <p className='mt-2'>{t['school']} Antun Gustav Matoš </p>
                    <p className='mt-2'>Ohridska ulica 21</p>
                    <p>32100, Vinkovci</p>
                    <p>{t['cro']}</p>
                    <div className='overflow-hidden border-white'>
                        <iframe className='absolute bottom-[-188px] left-[6px] right-0 w-[242px] h-[180px] rounded-b-[1em] border-2' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2806.6986652633864!2d18.7934888!3d45.294310599999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475c8ae094d7cb09%3A0x2df59e6296b69211!2sOsnovna%20%C5%A1kola%20Antun%20Gustav%20Mato%C5%A1!5e0!3m2!1shr!2shr!4v1738250208732!5m2!1shr!2shr" width="600" height="450" allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>

            <div className="card">
                <span></span>
                <div className="content flex flex-col justify-start items-start">
                    <h3 className='uppercase font-semibold text-lg'>{t['h81']} {t['h82']}</h3>
                    <p className='mt-2'>Hotel Slavonija</p>
                    <p className='mt-2'>Duga ulica 1</p>
                    <p>32100, Vinkovci</p>
                    <p>{t['cro']}</p>
                    <div className='overflow-hidden border-white'>
                        <iframe className='absolute bottom-[-190px] left-[6px] right-0 w-[242px] h-[180px] rounded-b-[1em] border-2' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2807.039689308962!2d18.8029382!3d45.2874197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47667a16bcca35a9%3A0xa94aabc6ed8f0a55!2sHotel%20Slavonija!5e0!3m2!1shr!2shr!4v1738250299008!5m2!1shr!2shr" width="600" height="450" allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>
        </div>

        {/* Transportation table*/}
        <div className='max-container-sm overflow-x-auto w-full z-10'>
                <h2 className='subheading-text'>{t['h9']}</h2>
                <p className='mt-8'>{t['p9']}</p>
                <table className="w-full mt-12 z-10 table-scrollbar table-auto overflow-x-scroll bg-black border-[3px] border-logo-yellow rounded-lg border-collapse border-spacing-0 mx-auto">
                    <thead>
                      <tr>
                        <th className="subheading-text p-4" colSpan={4}>{t['t8h']}</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className='t-row'>
                        <td className="t-item-xl font-semibold">{t['t8-11']}</td>
                        <td className="t-item-md">
                            <a href="https://maps.app.goo.gl/K6wRcqh2ijDxCVbn6" target='_blank' className='text-logo-yellow underline'>{t['t8-12']}</a>
                         </td>
                      </tr>
                      <tr className='t-row'>
                        <td className="t-item-xl font-semibold">{t['t8-21']}</td>
                        <td className="t-item-md">
                            {t['t8-221']} (<a href='https://www.zagreb-airport.hr/en/passengers/to-from-the-airport/35' target='_blank' className='text-logo-yellow underline'>{t['t8-222']}</a>)

                            <p><a href="https://www.google.com/maps/dir/Zra%C4%8Dna+luka+Franjo+Tu%C4%91man+Zagreb+(ZAG),+Ul.+Rudolfa+Fizira+21,+10410,+Velika+Gorica/Glavni+Kolodvor,+Trg+Kralja+Tomislava+12,+10000,+Zagreb/@45.7610057,15.8624718,11z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x47667ee85c7fab29:0x9ef60b3c28e288f6!2m2!1d16.069055!2d45.740726!1m5!1m1!1s0x4765d6f81f0bee31:0xea394188e3910463!2m2!1d15.9788122!2d45.804671!3e3?entry=ttu&g_ep=EgoyMDI1MDEyMC4wIKXMDSoASAFQAw%3D%3D" target='_blank' className='text-logo-yellow underline'>{t['t8-223']}</a> {t['t8-224']}</p>
                            <p><a href="https://www.google.com/maps/dir/Zra%C4%8Dna+luka+Franjo+Tu%C4%91man+Zagreb+(ZAG),+Ul.+Rudolfa+Fizira+21,+10410,+Velika+Gorica/Autobusni+Kolodvor+Zagreb,+Avenija+Marina+Dr%C5%BEi%C4%87a+4,+10000,+Zagreb/@45.7630868,15.9573508,12z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x47667ee85c7fab29:0x9ef60b3c28e288f6!2m2!1d16.069055!2d45.740726!1m5!1m1!1s0x4765d6502fa47c33:0x17708cd8e68aaed2!2m2!1d15.9931168!2d45.8038303!3e3?entry=ttu&g_ep=EgoyMDI1MDEyMC4wIKXMDSoASAFQAw%3D%3D" target='_blank' className='text-logo-yellow underline'>{t['t8-223']}</a> {t['t8-225']}</p>
                        </td>
                      </tr>
                      <tr className='t-row'>
                        <td className="t-item-xl font-semibold">
                            {t['t8-31']}

                            <div className='text-base font-normal mt-4'>
                                <p>{t['t8-312']}</p>
                                <ul className='list-disc ml-8 mt-2'>
                                    <li>{t['t8-313']}</li>
                                    <li>{t['t8-314']}</li>
                                </ul>
                            </div>
                        </td>
                        <td className="t-item-md">
                            {t['t8-321']} (<a href='https://prodaja.hzpp.hr/en/Ticket/Journey?StartId=72480&DestId=71160&DepartureDate=2025-03-06&DirectTrains=True&Class=2&ReturnTrip=False&Passenger1Count=1&Passenger2Count=0&Benefit1Id=11&Bicycle=False&Reservation=False&ReturnBicycle=False&ReturnReservation=False' target='_blank' className='text-logo-yellow underline'>{t['t8-322']}</a>) {t['t8-323']} (<a href='https://getbybus.com/en-gb/bus-routes/zagreb-1510/vinkovci-1445/2025-03-06/-?adults=1' target='_blank' className='text-logo-yellow underline'>{t['t8-324']}</a>)
                        </td>
                      </tr>
                      <tr className='t-row'>
                        <td className="t-item-xl font-semibold">{t['t8-41']}</td>
                        <td className="t-item-md">
                            {t['t8-421']}
                            <p><a href='https://www.google.com/maps/dir/Vinkovci,%C5%BDeljeznicki+kolodvor,+Kolodvorska+ul.,+32100,+Vinkovci/Hotel+Slavonija,+Duga+ulica,+Vinkovci/@45.2934641,18.7887862,15z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x475c8b93dd30b4f7:0x5dcc9c81ebb8a8cb!2m2!1d18.8024247!2d45.2993972!1m5!1m1!1s0x47667a16bcca35a9:0xa94aabc6ed8f0a55!2m2!1d18.8029382!2d45.2874197?entry=ttu&g_ep=EgoyMDI1MDEyMC4wIKXMDSoASAFQAw%3D%3D' target='_blank' className='text-logo-yellow underline'>{t['t8-422']}</a></p>
                        </td>
                      </tr>
                      <tr className='t-row'>
                        <td className="t-item-xl font-semibold">{t['t8-51']}</td>
                        <td className="t-item-md">
                            <a href='https://www.google.com/maps/dir/Hotel+Slavonija,+Duga+ulica,+Vinkovci/Osnovna+%C5%A1kola+Antun+Gustav+Mato%C5%A1,+Ohridska+ulica,+Vinkovci/@45.2914515,18.786775,15z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x47667a16bcca35a9:0xa94aabc6ed8f0a55!2m2!1d18.8029382!2d45.2874197!1m5!1m1!1s0x475c8ae094d7cb09:0x2df59e6296b69211!2m2!1d18.7934888!2d45.2943106?entry=ttu&g_ep=EgoyMDI1MDEyMC4wIKXMDSoASAFQAw%3D%3D' target='_blank' className='text-logo-yellow underline'>{t['t8-52']}</a>
                        </td>
                      </tr>
                    </tbody>
                </table>
            </div>

        {/* Sponsors */}
       
      </div>

      <div className='border-4 border-gold rounded-md p-4 rotate-45 absolute -left-60 lg:-left-56 -top-8 lg:-top-0'>
            <div className='border-4 border-gold rounded-md p-4'>
                <div className='border-2 border-gold rounded-md p-4'>
                    <div className='border-2 border-gold rounded-md p-4'>
                        <div className='border-[1px] border-gold rounded-md p-4'>
                            <div className='border-[1px] border-gold rounded-md p-4 min-w-20 min-h-20  lg:min-w-48 lg:min-h-48'></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className='border-4 border-gold rounded-md p-4 rotate-45 absolute -right-48 lg:-right-56 bottom-28 lg:bottom-20 z-0 overflow-hidden'>
            <div className='border-4 border-gold rounded-md p-4'>
                <div className='border-2 border-gold rounded-md p-4'>
                    <div className='border-2 border-gold rounded-md p-4'>
                        <div className='border-[1px] border-gold rounded-md p-4'>
                            <div className='border-[1px] border-gold rounded-md p-4 min-w-32 min-h-32 lg:min-w-48 lg:min-h-48'></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}

export default CibalaeOpenCupMain