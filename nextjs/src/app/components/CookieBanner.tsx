'use client';

import { clearLocalStorage, getLocalStorage, setLocalStorage } from '@/app/lib/storageHelper';
import { useState, useEffect } from 'react';
import hr from '../../../messages/hr.json'
import en from '../../../messages/en.json'
import { usePathname, useRouter } from 'next/navigation';

export default function CookieBanner(){
    const [cookieConsent, setCookieConsent] = useState(false);
    const [t, setT] = useState(hr['cookies']);

    const pathname = usePathname()

    useEffect(() => {
      if (pathname.includes('/en')) {
        setT(en['cookies'])
      } else {
        setT(hr['cookies'])
      }
    }, [pathname]);

    useEffect (() => {
        const storedCookieConsent = getLocalStorage("cookie_consent", null)


        setCookieConsent(storedCookieConsent)
    }, [setCookieConsent])

    
    useEffect(() => {
        const newValue = cookieConsent ? 'granted' : 'denied'

        window.gtag("consent", 'update', {
            'analytics_storage': newValue
        });


        setLocalStorage("cookie_consent", cookieConsent)

    }, [cookieConsent]);

    return (
        <div className={`${cookieConsent != null ? "hidden" : "flex"}
                        my-10 mx-auto max-w-max md:max-w-screen-sm
                        fixed bottom-0 left-0 right-0 z-40
                        px-3 md:px-4 py-3 justify-between items-center flex-col sm:flex-row gap-4  
                         bg-logo-black rounded-lg shadow text-white `}>

            <div className='text-center'>
                <p>{t['p1']}<span className='font-bold'>{t['p2']}</span>{t['p3']}.</p>
            </div>

            
            <div className='flex gap-2 font-semibold'>
                <button className='px-5 py-2 border-2 border-gold rounded-md ' onClick={() => setCookieConsent(false)}>{t['decline']}</button>
                <button className='bg-gold px-5 py-2 rounded-lg' onClick={() => setCookieConsent(true)}>{t['allow']}</button>
            </div>   
        </div>
    )}