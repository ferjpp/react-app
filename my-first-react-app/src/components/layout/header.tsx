import React, { useState } from 'react';
import CustomButton from '../CustomButton';

// interfaz para describir la estructura de cada enlace
interface Link {
  name: string;
  link: string;
}

const Header = () => {
  // Tipamos el estado 'open' como booleano
  const [open, setOpen] = useState<boolean>(false);

  // Tipamos el array 'links' como un array de objetos Link
  const links: Link[] = [
    { name: "INICIO", link: "/" },
    { name: "SERVICIOS", link: "/" },
    { name: "ACERCA DE", link: "/" },
    { name: "BLOG", link: "/" },
    { name: "CONTACTO", link: "/" },
  ];

  return (
    <div className='shadow-md w-full fixed top-0 left-0'>
      <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
        <div className='font-bold text-4xl cursor-pointer flex items-center font-genos text-slate-800 hover:scale-110 duration-500'>
          <span className='text-4xl text-cyan-600 mr-1 pt-2'>
            <ion-icon name="code-slash"></ion-icon>
          </span>
          FerxxoGeek
        </div>

        <div onClick={() => setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
          <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
        </div>

        <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 opacity-100' : 'top-[-490px]'} md:opacity-100 opacity-0`}>
          {links.map((link) => (
            <li key={link.name} className='md:ml-8 md:text-xl text-base md:my-0 my-7 '>
              <a href={link.link} className='text-slate-800 hover:text-slate-400 duration-500 '>{link.name}</a>
            </li>
          ))}

          <CustomButton text='Comenzar' bgColor='cyan-600'/>
        </ul>
      </div>
    </div>
  );
};

export default Header;