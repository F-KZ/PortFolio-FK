import { FULL_NAME } from "../lib/config";
import NavBar from "./NavBar";


export const Header = () => {
  return (
    <header className="flex py-8 flex-wrap md:justify-between justify-center ">
      <span className=" text-2xl font-extrabold text-lime-400 drop-shadow-[0_0px_20px_#fff]">
        {FULL_NAME}
      </span>
      <NavBar/>
    </header>
  );
};
