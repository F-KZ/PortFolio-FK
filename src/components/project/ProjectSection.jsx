import { useEffect, useReducer} from 'react';
import { SectionWrapper } from '../atom/SectionWrapper';
// import { Project } from './Project';
import { GITHUB_USERNAME } from '../../lib/config';
import { getListOfUrlRepositoriesUrl } from '../../lib/api-url';
import { Loader } from '../atom/Loader/Loader'
import { reducer } from '../../hooks/useFetch';
import { Projet } from "./repoDisplay"
import fashion from "../../imgProject/fashion.png"
import kanap from "../../imgProject/kanap.png"
import marseille from "../../imgProject/marseille.png"
import twitch from "../../imgProject/twitch.png"
import zara from "../../imgProject/zara.png"


const displayProjects = [
  {
    url: 'https://site-kanap-git-master-fkz.vercel.app/',
    nom: 'Kanap',
    img: kanap,
  },
  {
    url: 'https://f-kz.github.io/E-commerce-Fashion/',
    nom: 'E-Commerce',
    img: fashion,
  },
  {
    url: 'https://f-kz.github.io/Twitch-Clone/',
    nom: 'TwitchClone',
    img: twitch,
  },
  {
    url: 'https://f-kz.github.io/ZARA/',
    nom: 'Zara',
    img: zara,
  },
  {
    url: 'https://f-kz.github.io/Reservia/',
    nom: 'Marseille',
    img: marseille,
  },
]

export const ProjectSection = () => {
  const [{status, data : repo , error}, dispatch] = useReducer(reducer,{ status : "idle" , data : null, error : null})
  // GitHub Repository - Exercise

  useEffect(() => {
    dispatch({ type : "pending"})
    fetch(getListOfUrlRepositoriesUrl(GITHUB_USERNAME))
    .then((res) => res.json())
    .then((repo) => dispatch({ type : "resolved", data : repo}))
    .catch((error) => dispatch({ type : "rejected", error : error}))
    
  },[]);

  if(status === 'pending' || status ==='idle'){
    return <Loader/>
  }

  if(error){
    return <p> error !</p>
  }
  

  return (
    <SectionWrapper title="Projects">
      <div className="flex flex-wrap w-full justify-between content-between">
        {displayProjects?.map((repository) => {
          return <Projet key={repository.nom}
           {...repository}/>
        })}
      </div>
    </SectionWrapper>
  );
};
