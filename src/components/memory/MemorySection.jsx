import { Button } from '../atom/Button';
import { SectionWrapper } from '../atom/SectionWrapper';
import { Typography } from '../atom/Typography';
import { MemoryBoard } from './MemoryBoard';
import { MemoryContextProvider, useMemory } from './MemoryProvider';
import { useState } from 'react';
import Image from 'next/image';
import memory from "../../img/memory.svg"

export const MemorySection = () => {
  const [ show, setShow ] = useState(false)

  return (
    <SectionWrapper title=" A vous de jouer !">
      { show ? <MemoryContextProvider>
        <div className="flex flex-col items-center gap-14">
          <div className="flex flex-col items-center gap-2">
            <Score/>
            <MemoryBoard />
            <Reset/>
          </div>
        </div>
      </MemoryContextProvider> : <Image  data-aos="zoom-in"
            data-aos-duration="1500" src={memory} onClick={() => setShow(true)} width={400}  height={400} className="cursor-pointer" alt="image d'un cerveau à l'éffigie du jeu"/>
      }
    </SectionWrapper>
  );
};

const Score = () => {
  const { tryCount, isFinished } = useMemory()

  if(isFinished){
    return <Typography> Bravo tu as terminé en {tryCount}</Typography>
  }
  return <Typography> you tried {tryCount} time(s)</Typography>

}

const Reset = () => {
  const { reset } = useMemory()

  return  <Button onClick = {reset} >Reset go here</Button>
}
