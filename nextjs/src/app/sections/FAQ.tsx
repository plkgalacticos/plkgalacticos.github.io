'use client';
import React, { useState, useEffect, useRef } from 'react';

const FAQ = ({ t }) => {
  t = t['faq']
  const [isActive, setIsActive] = useState(new Array(14).fill(false));
  const [isInView, setIsInView] = useState(new Array(14).fill(false));
  const [hasBeenInView, setHasBeenInView] = useState(new Array(14).fill(false));
  const divRefs = useRef([]);

  const toggleClass = (index: number) => {
    setIsActive((prev) => {
      const newState = [...prev];
      newState[index] = !newState[index];
      return newState;
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = parseInt(entry.target.getAttribute('data-index'), 10);
          if (!hasBeenInView[index] && entry.isIntersecting) {
            setIsInView((prev) => {
              const newState = [...prev];
              newState[index] = true;
              return newState;
            });
            setHasBeenInView((prev) => {
              const newState = [...prev];
              newState[index] = true;
              return newState;
            });
          }
        });
      },
      { threshold: 0.5 }
    );

    divRefs.current.forEach((div, index) => {
      if (div) {
        div.setAttribute('data-index', index);
        observer.observe(div);
      }
    });

    return () => observer.disconnect();
  }, [hasBeenInView]);

  return (
    <section className="max-container padding max-w-6xl flex flex-col justify-start items-start gap-12">
        <h2
            // @ts-ignore
            ref={(el) => (divRefs.current[0] = el)}
            className={`heading-text text-left md:text-center w-full ${isInView[0] ? 'slide-top' : 'slide-top-pre'}`}
        >
            {t['h1']}
            <span className="text-logo-yellow">{t['h2']}</span>
            {t['h3']}
        </h2>

        <div className="w-full max-w-4xl m-auto">
            {Array.from({ length: 13 }, (_, index) => (
                <div
                    key={index + 1}
                    // @ts-ignore
                    ref={(el) => (divRefs.current[index + 1] = el)}
                    className={`mt-6 pt-4 w-full border-t-2 border-logo-white ${isInView[index + 1] ? 'slide-top' : 'slide-top-pre'}`}
                >
                    <div
                      className="flex flex-row justify-start items-center gap-4 cursor-pointer"
                      onClick={() => toggleClass(index + 1)}
                    >
                      <img
                        className={`w-4 lg:w-6 h-auto transition-all duration-300 ${isActive[index + 1] ? 'rotate-90' : ''}`}
                        src="/icons/arrow-right.svg"
                        alt="ARROW"
                         loading='lazy'
                      />
                      <h2 className="font-semibold text-xl">
                        {t[`q${index + 1}`]}
                      </h2>
                    </div>
                    <div className={`pt-4 pl-8 lg:pl-10 ${isActive[index + 1] ? 'active' : 'hidden'}`}>
                        <span
                          dangerouslySetInnerHTML={{
                            __html: t[`a${index + 1}`],
                          }}
                        >
                        </span>
                        {index == 12 ? 
                                                <span><a href={t['join-link']} className='text-logo-yellow cursor-pointer'>{t['a132']}</a> {t['a133']}</span>
                        
                                                : ''
                        }
                    </div>
                    
                </div>
            ))}
        </div>
    </section>
  );
};

export default FAQ;
