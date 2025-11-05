import Image from 'next/image'
import React from 'react'

const TextImageContainer = ({text, imgUrl, alt, reverse=false}) => {
  return (
    <div className={`flex flex-col w-full ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} justify-between items-center gap-12`}>
        <div className='flex-1'>
            {text}
        </div>
        <div className={`flex-1 w-full mx-auto rounded-md`}>
            <Image className={`object-cover w-full max-w-lg mx-auto rounded-md ${reverse ? 'border-t-2 border-l-2' : 'border-b-2 border-r-2'} border-gold`} src={imgUrl} alt={alt} loading="lazy" width={1024} height={683} />
        </div>
    </div>
  )
}

export default TextImageContainer