import React from 'react';
import Image from 'next/image';
import iphone from '../homeImg/iphone4.png'
import google from '../homeImg/google.svg'
import apple from '../homeImg/apple.svg'


export const FadeHome = () => {
    return (
        <div className='flex flex-row flex-wrap w-full justify-around items-center'>
        <div  data-aos="fade-right" className='flex flex-col space-y-4 items-center'>
        <h1 className='py-4 text-2xl' data-aos="fade-right" data-aos-duration="1500">DEVELOPPEUR FREELANCE</h1>
        <span data-aos="fade-right" data-aos-duration="1700" className='border-red-900 border-2 rounded-full px-2 py-1'> E-commerce</span>
        <span data-aos="fade-right" data-aos-duration="2000" className='border-red-900 border-2 rounded-full px-2 py-1'> Website</span>
        <span data-aos="fade-right" data-aos-duration="2300" className='border-red-900 border-2 rounded-full px-2 py-1'> Applications</span>
        </div>
        <div className='flex flex-col'>
        <div className='relative'>
        <Image
        priority
        src={iphone}
        alt="image d'un portable de la marque iphone."
        width={300}
        height={500}
        className="w-full h-auto max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl"
      />
      <div className='flex flex-col justify-evenly items-center absolute top-[70%] left-[20%]'>
      <Image
      data-aos="fade-right" data-aos-duration="1000"
        width={100}
        height={50}
        src={google}
        alt="logo google"
        loading='lazy'
      />
        <Image
        data-aos="fade-right" data-aos-duration="1500"
         width={100}
        height={50}
        src={apple}
        alt="logo apple"
         loading='lazy'
      />
      </div>
      </div>
        </div>

            
        </div>
    );
}

export default FadeHome;
