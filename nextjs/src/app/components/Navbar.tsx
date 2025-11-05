'use client';
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import instagramIcon from '../../../public/icons/ig-white.svg'
import tictocIcon from '../../../public/icons/tt-white.svg'
import youtubeIcon from '../../../public/icons/yt-white.svg'
import { useRouter } from 'next/navigation'
import { usePathname } from 'next/navigation'

const Navbar = ({t}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  t = t['nav']

  const routeTranslations = {
    '/cibalae-open-kup': '/en/cibalae-open-cup',
    '/cibalae-open-kup/prijava': '/en/cibalae-open-cup/registration',
    '/cibalae-open-kup/smjestaj': '/en/cibalae-open-cup/accommodation',
    '/cibalae-open-kup/nominacije': '/en/cibalae-open-cup/nominations',
    '/cibalae-open-kup/upute-za-strane-natjecatelje': '/en/cibalae-open-cup/instructions-for-foreign-athletes',
    '/clanovi': '/en/members',
    '/': '/en',

    '/en/cibalae-open-cup': '/cibalae-open-kup',
    '/en/cibalae-open-cup/registration': '/cibalae-open-kup/prijava',
    '/en/cibalae-open-cup/accommodation': '/cibalae-open-kup/smjestaj',
    '/en/cibalae-open-cup/nominations': '/cibalae-open-kup/nominacije',
    '/en/cibalae-open-cup/instructions-for-foreign-athletes': '/cibalae-open-kup/upute-za-strane-natjecatelje',
    '/en/members': '/clanovi',
    '/en': '/'
  };

  const router = useRouter();
  const pathname = usePathname()
  let firstSegment = pathname.split('/')[1];

  const getTranslatedPath = (path, lang) => {
    console.log(path)
    const baseRoute = path.split('/')[1]; // Get the first part of the route after the initial '/'
    const remainingPath = path.substring(baseRoute.length + 1);
    const translatedBaseRoute = routeTranslations[path] || path;
    return translatedBaseRoute;
  };
  
  const [lang, setLang] = useState('hr');
  
  const changeLanguage = (newLang) => {
    const newRoute = getTranslatedPath(pathname, newLang);
    router.push(newRoute);
  };

  const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    changeLanguage(event.target.value);
  };

  useEffect(() => {
    if (firstSegment === 'en') {
        setLang('en')
    } else {
      setLang('hr')
    }
  }, [firstSegment]);

  return (
    <header className={` bg-black text-white z-50`}>
        <nav className='fixed top-0 w-full hidden lg:block py-3 px-4 z-50 bg-black'>
            <div className='max-container flex flex-row justify-between items-center'>
                <div><a href={"/" + t['home-link']}><Image className='max-w-32' src={'/images/logo/plk-galacticos-logo-bright.png'} alt={'PLK Galacticos logo'}  width={1030} height={308}></Image></a></div>
                <div className='flex flex-row justify-center items-center gap-12'>
                    <div className='flex flex-row justify-center items-center gap-3'>
                        <a className=' hover:scale-105' href={"/" + t['home-link']}>{t['home']}</a>
                        <a className=' hover:scale-105' href={"/" + t['members-link']}>{t['members']}</a>
                        {/* <a className=' hover:scale-105' href={"/" + t['kup-link']}>{t['kup']}</a> */}
                        {/* <a className=' hover:scale-105' href={"/" + t['application-link']}>{t['application']}</a> */}
                        {/* <a className=' hover:scale-105' href={"/" + t['accommodation-link']}>{t['accommodation']}</a> */}
                    </div>
                    <div className='flex flex-row justify-center items-center gap-3'>
                        <a href="https://www.instagram.com/plk.galacticos/" target="_blank"><Image className='w-8 h-auto' src={instagramIcon} alt={'Instagram ikona'}></Image></a>
                        <a href="https://www.tiktok.com/@plk.galacticos" target="_blank"><Image className='w-8 h-auto' src={tictocIcon} alt={'TicToc ikona'}></Image></a>
                        <a href="https://www.youtube.com/@PLKGalacticos" target="_blank"><Image className='w-8 h-auto' src={youtubeIcon} alt={'YouTube ikona'}></Image></a>
                    </div>
                    <div>
                        <select className='bg-black cursor-pointer' value={lang} aria-label='Odaberite jezik' onChange={handleLanguageChange}>
                          <option className='' value="en" label="EN">EN</option>
                          <option className='' value="hr" label="HR">HR</option>
                        </select>
                    </div>
                </div>
            </div>
        </nav>

        <nav className={`fixed top-0 w-full block lg:hidden z-50 ${isOpen ? '' : 'pointer-events-none'}`}>
            <div className='flex flex-row justify-between items-center bg-plk-black py-4 z-50 bg-black pointer-events-auto'>
                <div className='ml-2'>
                    <select className='bg-black cursor-pointer' value={lang}  aria-label='Odaberite jezik' onChange={handleLanguageChange}>
                      <option className='' value="en" label='EN'>EN</option>
                      <option className='' value="hr" label='HR'>HR</option>
                    </select>
                </div>
                <div><a href={"/" + t['home-link']}><Image className='max-w-32' src={'/images/logo/plk-galacticos-logo-bright.png'} alt={'PLK Galacticos logo'}  width={1030} height={308}></Image></a></div>
                <div className={`burger mr-2 ${isOpen ? 'toggle' : ''}`} onClick={toggleMenu}>
                  <div className="line1"></div>
                  <div className="line2"></div>
                  <div className="line3"></div>
                </div>
            </div>

            <div className={`flex flex-row justify-center items-center w-full py-12 bg-black text-white transition-all ease-in-out duration-500 ${isOpen ? 'opacity-100 z-50' : '-translate-x-[100%] opacity-0 pointer-events-none'}`}>
                <div className='flex flex-col justify-center items-center gap-3'>
                        <a className=' hover:scale-105' href={"/" + t['home-link']} onClick={toggleMenu}>{t['home']}</a>
                        <a className=' hover:scale-105' href={"/" + t['members-link']} onClick={toggleMenu}>{t['members']}</a>
                        {/* <a className=' hover:scale-105' href={"/" + t['kup-link']} onClick={toggleMenu}>{t['kup']}</a> */}
                </div>
            </div>
        </nav>
    </header>
  )
}

export default Navbar