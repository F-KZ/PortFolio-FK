import { EMAIL, SOCIAL_NETWORKS } from '../lib/config';
import { SectionWrapper } from './atom/SectionWrapper';
import { Typography } from './atom/Typography';
import FormContact from './FormContact';

const newSocial = SOCIAL_NETWORKS.slice(0,3)

export const Footer = () => {
  return (
    <SectionWrapper title='Contact !'>
    <div  className='flex flex-col lg:flex-row-reverse  gap-12 lg:justify-around w-full '>
    <FormContact/>
    <footer className="flex flex-col items-center justify-between gap-8 p-8 lg:w-[500px] ">
      <div className="flex flex-col items-center justify-between gap-12 h-full">
        <Typography variant="body2">
          I’ll be happy to chat with you about a potential job or a freelance
        </Typography>
        <a 
        href="mailto:franck.kanza@outlook.fr"  
        className="inline-flex animate-bounce cursor-pointer items-center justify-center w-10 h-10 border-2 border-lime-400 rounded-full text-[20px] text-lime-400 mx-2 transition duration-500 hover:bg-lime-400 hover:text-[#1f242d] hover:shadow-[0_0_10px_rgba(124,240,61,1)]">
  {SOCIAL_NETWORKS.find((x) => x.name === 'Mail')?.icon}
</a>
        <div className='flex flex-row w-full justify-around '>
        {newSocial.map((x) => (
          <a 
          href={x.url}
          className="inline-flex cursor-pointer items-center justify-center w-10 h-10 border-2 border-lime-400 rounded-full text-[20px] text-lime-400 mx-2 transition duration-500 hover:bg-lime-400 hover:text-[#1f242d] hover:shadow-[0_0_10px_rgba(124,240,61,1)]">{x.icon}</a>
        ))}
        </div>
      </div>
    </footer>
    </div>
    </SectionWrapper>
  );
  
};
