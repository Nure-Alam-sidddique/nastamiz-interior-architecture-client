import React, {useState} from 'react';
import {Link} from 'react-scroll';
import { HiMenu, HiX} from "react-icons/hi";
const Header = () => {
    const [click, setClick] = useState(false);
    const handleClick =()=>setClick(!click);
    return (
        <div className='h-12 bg-red-700 sticky top-0 w-full z-100'>
            <div className='flex justify-around py-2'>
            <h1 className='text-center text-2xl text-white'>NastamiZ InteRior </h1>
            <nav className='hidden md:block'>
                <Link className='px-3 text-xl text-white hover:cursor-pointer' to ="home">Home</Link>
                <Link className='px-3 text-xl text-white hover:cursor-pointer' to ="about">About Us</Link>
                <Link className='px-3 text-xl text-white hover:cursor-pointer' to ="services">Services</Link>
                <Link className='px-3 text-xl text-white hover:cursor-pointer' to ="blog">Blog</Link>
                <Link className='px-3 text-xl text-white hover:cursor-pointer' to ="contact">Contact</Link>
            </nav>
            <div className={`block md:hidden`} >
                {click?   <HiX onClick={()=>handleClick()} className='h-6 w-6 text-2xl text-white '/>:  <HiMenu onClick={()=>handleClick()} className='h-6 w-6 text-2xl text-white '/>}
              
            </div>
            </div>
            <div className='relative'>
            <div className={ click?`block md:hidden absolute inset-y-0 right-0 h-screen bg-zinc-700 w-32`: ' hidden' }>
                <div> 
                <nav className='flex flex-col'>
                <Link className='px-3 text-xl text-white hover:cursor-pointer' to ="home">Home</Link>
                <Link className='px-3 text-xl text-white hover:cursor-pointer' to ="about">About Us</Link>
                <Link className='px-3 text-xl text-white hover:cursor-pointer' to ="services">Services</Link>
                <Link className='px-3 text-xl text-white hover:cursor-pointer' to ="blog">Blog</Link>
                <Link className='px-3 text-xl text-white hover:cursor-pointer' to ="contact">Contact</Link>
                </nav>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Header;