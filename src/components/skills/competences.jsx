
import js from "../../img/js.svg"
import react from "../../img/rjs.svg"
import njs from "../../img/njs.svg"
import css from "../../img/css.svg"
import html from "../../img/html.svg"
import tailwind from "../../img/twc.svg"
import mongo from "../../img/mongo.svg"
import git from "../../img/git.svg"
import next from "../../img/next-js.svg"
import Image from "next/image";
import { SectionWrapper } from "../atom/SectionWrapper"


const skills = [
  { name: "Next.js", logo: next },
  { name: "JavaScript", logo: js },
  { name: "React", logo: react },
  { name: "MongoDB", logo: mongo },
  { name: "Git", logo: git },
  { name: "Node.js", logo: njs },
  { name: "HTML", logo: html },
  { name: "CSS", logo: css },
  { name: "Tailwind CSS", logo: tailwind },
];

export const Skills = () => {
  const skillsLoop = skills.slice(0, -1); 

return (
  <SectionWrapper title="Mes Compétences Techniques">
  <div className="relative overflow-hidden w-full py-4 flex flex-col gap-16 lg:gap-20 text-center">
  <div className="flex animate-marquee whitespace-nowrap">
    {skills.map((skill, index) => (
      <div key={index} className="flex-shrink-0 w-32 h-32 mx-4">
        <Image src={skill.logo}
        width={128}
        height={128}
         alt={`${skill.name} logo`} className="w-full h-full object-contain" />
      </div>
    ))}
    {skills.map((skill, index) => (
      <div key={`copy-${index}`} className="flex-shrink-0 w-32 h-32 mx-4">
        <Image 
        src={skill.logo} 
        width={128}
        height={128}
        alt={`${skill.name} logo`} className="w-full h-full object-contain" />
      </div>
    ))}
  </div>
</div>
</SectionWrapper>
);
}



