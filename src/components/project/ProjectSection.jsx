//import { useEffect, useReducer} from 'react';
import { SectionWrapper } from '../atom/SectionWrapper';
// import { Project } from './Project';
import { Loader } from '../atom/Loader/Loader'
//import { reducer } from '../../hooks/useFetch';
import { Projet } from "./repoDisplay"
import fashion from "../../imgProject/fashion.png"
import kanap from "../../imgProject/kanap.png"
import horizon from "../../imgProject/horizon.png"
import twitch from "../../imgProject/twitch.png"
import zara from "../../imgProject/zara.png"


const displayProjects = [
  {
    url: 'https://site-kanap-git-master-fkz.vercel.app/',
    nom: 'Furniture website',
    img: kanap,
  },
  {
    url: 'https://f-kz.github.io/E-commerce-Fashion/',
    nom: 'E-Commerce',
    img: fashion,
  },
  {
    url: 'https://f-kz.github.io/Twitch-Clone/',
    nom: 'Twitch clone',
    img: twitch,
  },
  {
    url: 'https://f-kz.github.io/ZARA/',
    nom: 'PrestaShop ( pour mobile )',
    img: zara,
  },
  {
    url: 'https://www.horizontransports.fr/',
    nom: 'Projet client',
    img: horizon,
  },
]

export const ProjectSection = () => {


  try {
    if(displayProjects === 'pending' || displayProjects ==='idle'){
      return <Loader/>
    }
    
  } catch (error) {
    return <p> error !</p>
  }
  

  return (
    <SectionWrapper title="Projects">
      <div className="flex flex-wrap w-full justify-evenly content-between ">
        {displayProjects?.map((repository) => {
          return <Projet key={repository.nom}
           {...repository}/>
        })}
      </div>
    </SectionWrapper>
  );
};
