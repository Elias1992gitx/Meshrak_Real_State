import Image from 'next/image';
import React from 'react';
import { FaChevronDown } from 'react-icons/fa';
import hero from '../assets/images/hero.jpg';
import { MdEmail, MdLocationOn } from 'react-icons/md';

const Hero = ({ address, phone, email }) => {
  const showMoreBtn = () => {
    document.getElementById('about-container').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative flex flex-col w-full h-screen">
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
      <Image
        src={hero}
        alt="bg image"
        fill
        className="w-full h-screen bg-no-repeat object-cover object-center"
      />
      <div className="w-full h-screen relative z-20 flex flex-col justify-center items-center mt-6">
        <button className="mt-2 hidden lg:block bg-orange-600 hover:bg-orange-500 px-2 py-1 rounded-2xl text-white h-6 w-28 font-black text-xs uppercase cursor-pointer">
          Real Estate
        </button>
        <h1 className="font-normal text-7xl text-center mt-24 text-white capitalize">
          get your dream
          <br /> home
        </h1>
        <p className="text-white pt-2">Meshrek Real Estate</p>
        <div className="hidden sm:flex mt-24 justify-between w-full px-20">
          <div className="flex items-center">
            <MdLocationOn className="w-5 h-5 text-white mr-2" />
            <p className="text-white text-xl">Addis Ababa</p>
          </div>
          <div className="flex items-center">
            <MdEmail className="w-5 h-5 text-white mr-2" />
            <p className="text-white text-xl">support@nexus-labs.com</p>
          </div>
        </div>
        <div className="absolute bottom-8 text-center justify-center ">
          <button
            onClick={showMoreBtn}
            className="text-white text-xl capitalize shadow-lg hover:bg-orange-500 hover:text-white px-4 py-1 rounded-3xl h-8 w-36 flex justify-center items-center"
          >
            <FaChevronDown className="w-5 h-5 " />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;


