import { useEffect, useState} from 'react';
import { SectionWrapper } from '../atom/SectionWrapper';
// import { Project } from './Project';
import { Loader } from '../atom/Loader/Loader'
//import { reducer } from '../../hooks/useFetch';
//import fashion from "../../imgProject/fashion.png"
//import kanap from "../../imgProject/kanap.png"
import horizon from "../../imgProject/horizon.png"
import eShop from "../../imgProject/eShop.png"
//import zara from "../../imgProject/zara.png"
import tech from "../../imgProject/techLines.png"
import twitch from "../../imgProject/twitch.png"
import property from "../../imgProject/Property.png"
import { FcInfo } from "react-icons/fc";

import Image from 'next/image';


const displayProjects = [
  {
    url: 'https://www.horizontransports.fr/',
    nom: 'site formation VTC',
    img: horizon,
  },
  {
    url: 'https://next-js-0-fkz.vercel.app/',
    nom: 'location de maison',
    img: property,
  },
  {
    url: 'https://project3-front-chi.vercel.app/',
    nom: 'e-shop pour mobile',
    img: tech,
  },
  {
    url: 'https://electronic-shop-front.vercel.app/',
    nom: 'E-Shopping',
    img: eShop,
  },
  {
    url: 'twitch-clone-fkz.vercel.app/',
    nom: 'Twitch',
    img: twitch,
  },
]

export const ProjectSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % displayProjects.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? displayProjects.length - 1 : prevSlide - 1
    );
  };

  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 5000); // Change slide every 5 seconds

    return () => {
      clearInterval(slideInterval);
    };
  }, []);


  try {
    if(displayProjects === 'pending' || displayProjects ==='idle'){
      return <Loader/>
    }
    
  } catch (error) {
    return <p> error !</p>
  }
  

  return (
    <SectionWrapper title="Mes Projets">
    <span className='flex flex-row items-center gap-2 wrap'> <FcInfo/> à noter que ce sont des prototypes non finalisés servant uniquement de modèles d'exposition  </span>
      <div className="relative lg:w-[950px] mb-4 overflow-hidden">
      <div className="relative w-full flex transition-transform duration-1000" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        {displayProjects.map((product) => (
          <div key={product._id} className="w-full flex-shrink-0">
            <a href={product.url}>
              <div className="relative">
                <Image 
                src={product.img} 
                alt="capture d'écran representant le site web"
                 className="w-full"
                 loading="lazy"  />
                <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 w-full p-4">
                  <h2 className="text-white text-right">
                    {product.nom}
                  </h2>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
      <button onClick={prevSlide} className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2">
        Prev
      </button>
      <button onClick={nextSlide} className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2">
        Next
      </button>
    </div>
    </SectionWrapper>
  );
};
