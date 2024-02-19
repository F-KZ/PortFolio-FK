import { SectionWrapper } from '../atom/SectionWrapper';
import Image from 'next/image';
import cvPic from "../../img/cvPic.png"


const PDF_CV = "https://port-folio-fkkp2cupy-fkz.vercel.app/Franck-CV.pdf"

export const DrawSection = () => {

  const downloadFiles = (url) => {
    const link = document.createElement('a')
    const fileName = url.split('/').pop()

   // link.download = "image.png"
    link.href = url
    link.setAttribute('download', fileName)
    link.click()
  }
  
  

  return (
    <SectionWrapper title="Téléchargez mon CV !">
      <Image  onClick={() => {downloadFiles(PDF_CV)}} src={cvPic} className='cursor-pointer' height={200} width={150} />
    </SectionWrapper>
  );
};
