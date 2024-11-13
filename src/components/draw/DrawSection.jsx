


const PDF_CV = "https://www.franck-kanza.fr/Kanza.pdf"

export const DrawSection = () => {

  const downloadFiles = (url) => {
    const link = document.createElement('a')
    const fileName = url.split('/').pop()

   // link.download = "image.png"
    link.href = url
    link.setAttribute('download', fileName)
    link.click()
  }
  
  

  return  <button className="inline-block px-8 py-2 bg-lime-400 border-2 border-lime-400 rounded-full shadow-[0_0_10px_rgba(124,240,61,1)] text-[#1f242d] text-[16px] font-semibold cursor-pointer transition duration-500 hover:bg-transparent hover:text-lime-400"  onClick={() => {downloadFiles(PDF_CV)}} alt='CV'> Voir mon CV</button>;
};
