import React from 'react'
import {
  FaHome,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaBuilding,
  FaWarehouse,
  FaHome as FaHouse,
  FaBriefcase,
  FaParking,
} from 'react-icons/fa'
import Image from 'next/image'

const Footer = () => {
  return (
    <section className="footer bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8 md:mb-0">
            <FaHome className="w-12 h-16 text-white" />
            <span className="block mt-3 mb-3 text-lg">
              Discover your Dream Home with Mesherak Real State
            </span>
            <div className="flex space-x-4">
              <FaFacebook className="w-6 h-6" />
              <FaTwitter className="w-6 h-6" />
              <FaInstagram className="w-6 h-6" />
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8 md:mb-0">
            <p className="text-xl font-semibold mb-4">Menu</p>
            <ul className="space-y-2">
              <li>Home</li>
              <li>Blog</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8 md:mb-0">
            <p className="text-xl font-semibold mb-4">Services</p>
            <ul className="space-y-2">
              <li className="flex items-center">
                <FaHouse className="mr-2" />
                House
              </li>
              <li className="flex items-center">
                <FaBuilding className="mr-2" />
                Apartment
              </li>
              <li className="flex items-center">
                <FaBriefcase className="mr-2" />
                Office
              </li>
              <li className="flex items-center">
                <FaWarehouse className="mr-2" />
                Warehouse
              </li>
              <li className="flex items-center">
                <FaParking className="mr-2" />
                Parking
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 px-4">
            <p className="text-xl font-semibold mb-4">Contact</p>
            <ul className="space-y-2">
              <li className="flex items-center">
                <FaEnvelope className="mr-2" />
                <span>support@nexus-labs.com</span>
              </li>
              <li className="flex items-center">
                <FaMapMarkerAlt className="mr-2" />
                <span>Addis Ababa, Ethiopia</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer
