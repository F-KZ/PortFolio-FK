import React from 'react';
//import Link from 'next/link';

const NavbarLinks = [
    {
      url: '#home',
      name: 'Accueil',
    },
    {
      url: '#projet',
      name: 'Projets',
    },
    {
      url: '#contact',
      name: 'Contact',
    },
    {
      url: '#jeu',
      name: 'Jeu',
    }
  ];

const NavBar = () => {
    return (
      <div className='relative z-10 md:flex flex-row gap-12 hidden'>
      {NavbarLinks.map((link, index) => (
        <a href={link.url} key={index} className='hover:no-underline'>
          <h2 className=" hover:no-underline cursor-pointer text-[20px] font-medium transition duration-500 hover:text-lime-400 active:text-lime-400">
            {link.name}
          </h2>
          </a>
       
      ))}
    </div>
    );
}

export default NavBar;
