import React from 'react'

const CibalaeOpenCupMain = ({t}) => {
    const tNav = t['nav']
    t = t['competition'];
  return (
    <section className="relative bg-black text-white py-8 pb-32 pt-32 flex flex-col justify-center items-center gap-16 overflow-x-hidden px-4 lg:px-16">
      <div>
        <h1 className="z-10 heading-text text-center">{t['title']}</h1>
        <h2 className="text-center subheading-text mt-4">{t['date']}</h2>
      </div>

      <div className="max-container-sm flex flex-col justify-center items-start gap-16">
        {/* Registration Links */}
        <div className="flex flex-row gap-4 w-full justify-center">
          <a href={'/' + tNav['application-link']} className="btn-primary">
            {t['registrationButton']}
          </a>
          <a href={'/' + tNav['nominations-link']} className="btn-secondary">
            {t['nominationsButton']}
          </a>
        </div>

        {/* Description */}
        <div>
          <p className="text-lg font-semibold">{t['description']}</p>
        </div>

        {/* Schedule */}
        <div>
          <h2 className="subheading-text">{t['scheduleTitle']}</h2>
          <p className="text-sm">{t['scheduleNote']}</p>
          <ul className="mt-8">
            {t['schedule'].map((item, index) => (
              <li key={index} className="flex flex-col gap-2">
                <h3 className="font-semibold">{item.day}</h3>
                <ul className="ml-4">
                  {item.events.map((event, i) => (
                    <li key={i} className="list-disc">{event}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>

        {/* Costs Table */}
        <div>
          <h2 className="subheading-text">{t['costTitle']}</h2>
          <table className="z-10 table-scrollbar table-auto overflow-x-scroll bg-black border-[3px] border-logo-yellow rounded-lg border-collapse border-spacing-0 mx-auto">
            <thead>
              <tr>
                <th className="subheading-text p-4">{t['costHeaders']['item']}</th>
                <th className="subheading-text p-4">{t['costHeaders']['price']}</th>
              </tr>
            </thead>
            <tbody>
              {t['costs'].map((cost, index) => (
                <tr key={index} className="t-row">
                  <td className="t-item">{cost.item}</td>
                  <td className="t-item">{cost.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="text-sm mt-4">{t['costNote']}</p>
        </div>

        {/* Seminar */}
        <div>
          <h2 className="subheading-text">{t['seminarTitle']}</h2>
          <p className="mt-4">{t['seminarDescription']}</p>
        </div>

        {/* Location */}
        <div>
          <h2 className="subheading-text">{t['locationTitle']}</h2>
          <p>{t['location']}</p>
        </div>

        {/* Transportation */}
        <div>
          <h2 className="subheading-text">{t['transportTitle']}</h2>
          <ul className="mt-4">
            {t['transport'].map((item, index) => (
              <li key={index} className="list-disc">{item}</li>
            ))}
          </ul>
        </div>

        {/* Instructions for Foreign Athletes */}
        <div>
          <h2 className="subheading-text">{t['instructionsTitle']}</h2>
          <a href={t['instructionsLink']} className="btn-primary">
            {t['instructionsButton']}
          </a>
        </div>
      </div>
    </section>
  );
}

export default CibalaeOpenCupMain