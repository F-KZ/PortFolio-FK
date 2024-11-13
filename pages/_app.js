import "../src/styles/globals.css";
import "../src/styles/theme.css";



const MyApp = ({ Component, pageProps }) => (
 
    <div className=" flex flex-col px-4 m-auto max-w-7xl h-full gap-40 ">
      <Component {...pageProps} />
    </div>
   
 
);

export default MyApp;
