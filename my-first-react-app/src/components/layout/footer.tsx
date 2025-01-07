import React from 'react';

const Footer = () => (
	
	<div className='w-full fixed bottom-0 left-0 bg-slate-950 py-4 md:px-10 px-7'>

		<div className='flex md:flex-row flex-col items-center justify-center md:justify-between pb-4'>

			<div className='font-bold text-2xl cursor-pointer flex items-center font-genos text-white hover:scale-105 duration-500'>
				<span className='text-2xl text-cyan-600 mr-1 pt-2'>
				<ion-icon name="code-slash"></ion-icon>
				</span>
				FerxxoGeek
			</div>

			<div className='flex items-center text-2xl text-white space-x-4'>
				<a href="#" target="_blank" className='cursor-pointer hover:text-slate-400 duration-500'><ion-icon name="logo-facebook"></ion-icon></a>
				<a href="#" target="_blank" className='cursor-pointer hover:text-slate-400 duration-500'><ion-icon name="logo-instagram"></ion-icon></a>
				<a href="#" target="_blank" className='cursor-pointer hover:text-slate-400 duration-500'><ion-icon name="logo-discord"></ion-icon></a>
				<a href="#" target="_blank" className='cursor-pointer hover:text-slate-400 duration-500'><ion-icon name="logo-github"></ion-icon></a>
			</div>

		</div>

		<div className='flex items-center justify-center'>
			<p className='text-white'>&copy; {new Date().getFullYear()} FerxxoGeek - Todos los derechos reservados.</p>
		</div>
	</div>
);

export default Footer;

