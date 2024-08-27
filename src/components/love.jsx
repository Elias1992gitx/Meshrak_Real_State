import { MdFavorite, MdHomeWork, MdLocationOn, MdSearch } from 'react-icons/md';
import Image from 'next/image'; // Import Image if using Next.js
import build from '../assets/images/build.png';

const Love = () => {
  return (
    <div className="flex flex-col">
      <div
        className="flex items-center md:text-2xl font-bold 
          mt-20 justify-center text-sky-900"
      >
        Discover
        <span className="mx-1">
          <MdLocationOn className="text-2xl md:text-4xl text-blue-400 opacity-70" />
        </span>
        a place
        <span className="mx-1">
          <MdHomeWork className="text-2xl md:text-4xl text-cyan-600 opacity-70" />
        </span>
        {`you'll love `}
        {/* <span className="mx-1">
          <MdFavorite className="text-2xl md:text-4xl text-red-600 opacity-70" />
        </span> */}
        to live
      </div>

      <div className="w-full flex pt-8">
        <Image
        src={build}
        alt="bg image"
        // layout="fill" // Adjust if using Next.js Image
        // className="w-full h-32 pt-12"
        // className="w-full h-32 pt-12 object-cover shadow-lg"
        className="object-cover shadow-lg w-100%"
      /> <Image
        src={build}
        alt="bg image"
        // layout="fill" // Adjust if using Next.js Image
        // className="w-full h-32 pt-12"
        // className="w-full h-32 pt-12 object-cover shadow-lg"
        className="object-cover shadow-lg w-100%"
      />
      </div>

    </div>
  );
};

export default Love;
