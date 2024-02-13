
import styles from "./hero.module.css"
//import styles from "./fade.module.css"



export const HeroSection = () => {
  


  return (
    <div data-aos="zoom-in" data-aos-duration="1500" className="relative flex flex-col items-center w-full m-auto  gap-20 ">
      <img
        src="/images/presentation.svg"
        alt="avatar"
      />
      {/* Hero - Exercise
      <div className="flex flex-col gap-4 md:relative md:mr-16 w-full">
        <h1 className="text-6xl drop-shadow-[0_0px_20px_rgba(0,0,0,0.25)] md:text-8xl">
          I'm a {" "}
          <span className={[styles.text]}>
            
          </span>
        </h1>
        <p className="max-w-xl text-xl">
          <b>Apprenti React.</b> I’m a software developer that make thing on
          internet, very happy to see your here, place holder please fill
          something here please fill something here.
        </p>
      </div>
      
      */}
      {/*
      <div className={[styles.animatedText]}>
        <div className={[styles.line]}>Franck Kanza</div>
        <div className={[styles.line]}>Developpeur</div>
        <div className={[styles.line]}>Disponible</div>
        <div className={[styles.line]}>Freelanceur</div>
      </div>
      */}

      <div className="flex flex-col gap-4 md:relative md:mr-16 ">
        <h1 className="text-5xl drop-shadow-[0_0px_20px_rgba(0,0,0,0.25)] md:text-8xl w-full">
          I'm  {" "}
          <span className={[styles.text]}></span>
         
            
          
        </h1>
        <p  data-aos="fade-up"
              data-aos-delay="600" className=" text-xl">
          <b>Hello i am Franck Kanza !</b>  <br/> person entitled of a Master's degree in Web Architect, but above all passionate about the world of development
          I am now looking to put my knowledge into practice in order to carry out your projects.
        </p>
      </div>
    </div>
  );
};
