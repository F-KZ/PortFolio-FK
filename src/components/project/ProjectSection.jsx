"use client"
import React from 'react';
import Image from 'next/image';


// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';


// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { SectionWrapper } from '../atom/SectionWrapper';
import horizon from "../../imgProject/horizon.png"
import eShop from "../../imgProject/eShop.png"
import tech from "../../imgProject/techLines.png"
import twitch from "../../imgProject/twitch.png"
import property from "../../imgProject/Property.png"
import { FcInfo } from "react-icons/fc";



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
    url: 'https://twitch-clone-rho-nine.vercel.app/',
    nom: 'Twitch',
    img: twitch,
  },
];

export const ProjectSection = () => {
  return (
    <SectionWrapper title="Mes projets">
      <span className="flex flex-row items-center gap-2 wrap">
        <FcInfo /> À noter que ce sont des prototypes non finalisés servant uniquement de modèles d'exposition
      </span>
      <div className="relative lg:w-[950px] mb-4 overflow-hidden">
        <div className="px-8">
          <Swiper
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView="auto"
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={{ clickable: true }}
            modules={[EffectCoverflow, Pagination]}
            className="mySwiper"
          >
            {displayProjects.map((project, index) => (
              <SwiperSlide key={index}>
                <a href={project.url} target="_blank" rel="noopener noreferrer">
                  <Image
                    src={project.img}
                    alt={project.nom}
                    width={500} // Ajustez selon vos besoins
                    height={300}
                    className="w-full h-full object-cover rounded-lg"
                    loading="lazy"
                  />
                </a>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </SectionWrapper>
  );
};