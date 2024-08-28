import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import searchIcon from '../../src/assets/icons/search.png';
import mesrakreal from '../../src/assets/images/mesrakreal.png'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import ThemeChanger from './themeChanger';
import about from './about'

const Header = () => {
  const [header, setHeader] = useState(false);
  const [headerColor, setHeaderColor] = useState('#58555dea')
  const [headerText, setHeaderText] = useState('white');

  const handleHeader = () => {
    setHeader(!header);
  };

  const handleMobileHeader = () => {
    setHeader(false);
  };

 useEffect(() => {
   const handleColorChange = () => {
     if (window.scrollY >= 250) {
      //  setHeaderColor('linear-gradient(to left, black, white)')
      // setHeaderColor('linear-gradient(to right, black, transparent 80%, black)')
      setHeaderColor('#58555dea')
       setHeaderText('#ffffff')
     } else{
       setHeaderColor('#5b5a5bea')
       setHeaderText('#ffffff')
     }
     
   }
   window.addEventListener('scroll', handleColorChange)
 }, [])

  return (
    <div
      style={{ background: `${headerColor}` }}
      className=" fixed top-0 left-0 w-full h-20 shadow-xl flex justify-between items-center z-30 ease-in duration-300"
    >
      {/* Menu + Name */}

      <div className="max-w-[1240px] m-5 flex justify-between items-center p-4">
        <Link href="/">
          <Image
            src={mesrakreal}
            alt="mesrak"
            className="w-28 h-20 self-center"
            style={{ filter: 'invert(100%)' }} // Apply white filter
          />
        </Link>
      </div>

      {/* Search */}

      <div className=" text-xl hidden sm:flex">
        <Image src={searchIcon} alt="Menu" className=" w-4 h-4 self-center " />
        <input
          type="text"
          placeholder="Search"
          maxLength="20"
          className="text-xl w-40 bg-transparent outline-none placeholder-gray-300 mx-4 py-2 text-white capitalize"
        />
      </div>

     <div className="mr-16">

       <ul
        style={{ color: `${headerText}` }}
        className="text-sm font-semibold hidden lg:text-xl sm:flex"
      >
        <li className="p-4 hover:text-orange-500">
          <Link href="#about">About</Link>
        </li>
        <li className="p-4 hover:text-orange-500">
          <Link href="#services">Services</Link>
        </li>
        <li className="p-4 hover:text-orange-500">
          <Link href="#deals">Deals</Link>
        </li>
        <li className="p-4 hover:text-orange-500">
          <Link href="#review">Contact</Link>
        </li>
        
      </ul>

     </div>

      {/* <p
        style={{ color: `${headerText}` }}
        className="hidden sm:flex text-sm font-bold ml-10 mr-5 hover:text-orange-500 cursor-pointer"
      >
       <Link href="#reviews" onClick={handleMobileHeader}>
              Get in touch
        </Link>
      </p> */}
      <div className="mr-10">
        <ThemeChanger />
      </div>

      {/* Mobile hamburgerMenu */}

      <div onClick={handleHeader} className="block sm:hidden p-4 z-10">
        {header ? (
          <AiOutlineClose size={30} style={{ color: `${headerText}` }} />
        ) : (
          <AiOutlineMenu size={30} style={{ color: `${headerText}` }} />
        )}
      </div>
      <div
        className={
          header
            ? 'sm:hidden absolute top-0 right-0 bottom-0 left-0 flex justify-center items-center w-full h-screen bg-[#020308ea] text-center ease-in duration-300'
            : 'sm:hidden absolute top-0 right-0 bottom-0 left-[-100%] flex justify-center items-center w-full h-screen bg-[#020308ea] text-center ease-in duration-300'
        }
      >
        <ul
          style={{ color: `${headerText}` }}
          className="text-sm font-bold 
      "
        >
          <li className="mx-7 py-4 text-4xl hover:text-orange-500">
            <Link href="./about" onClick={handleMobileHeader}>
              About
            </Link>
          </li>
          <li className="mx-7 py-4 text-4xl hover:text-orange-500">
            <Link href="#services" onClick={handleMobileHeader}>
              Services
            </Link>
          </li>
          <li className="mx-7 py-4 text-4xl hover:text-orange-500">
            <Link href="#deals" onClick={handleMobileHeader}>
              Deals
            </Link>
          </li>
          <li className="mx-7 py-4 text-4xl hover:text-orange-500">
            <Link href="#reviews" onClick={handleMobileHeader}>
              Reviews
            </Link>
          </li>
          <li className="mx-7 py-4 text-4xl hover:text-orange-500">
            <Link href="#contact" onClick={handleMobileHeader}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
};

export default Header;
