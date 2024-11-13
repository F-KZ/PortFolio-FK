import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { DrawSection } from '../../draw/DrawSection';
import { SocialNetworks } from '../../atom/SocialNetwork';
import ImageHome from './ImageHome';



export const FadeHome = () => {
    return (
        <div className='flex flex-col-reverse lg:flex-row flex-wrap w-full justify-around items-center'>
         <div className='h-full flex flex-col lg:text-left  text-center justify-center gap-8 lg:w-1/2 md:pb-16 pb-24'>
        <h1 className='text-3xl md:text-4xl font-extrabold text-lime-400 drop-shadow-[0_0px_20px_#fff]'>Developpeur Web Fullstack</h1>
        <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'I am Developper',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'I am Available',
        1000,
        'I am Freelance',
        1000,
        'I am Franck Kanza',
        1000
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '2em', display: 'inline-block',  }}
      repeat={Infinity}
    />
    <p className='text-justify px-12 lg:px-0'>
    Développeur freelance passionné avec plus de 3 ans d'expérience dans la conception, le développement et la mise en œuvre d'applications web. je propose des services sur mesure pour répondre aux besoins spécifiques de mes clients..
    </p>

    
            <div className='flex flex-row flex-wrap gap-8 lg:justify-start justify-center'>
              <DrawSection/>
              <SocialNetworks/>
            </div>
        </div>
        <div>
        <ImageHome/>
        </div>
       
            
        </div>
    );
}

export default FadeHome;
