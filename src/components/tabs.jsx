import { useState } from 'react'
import cardImageBg2 from '../assets/images/Image-2.jpg'
import cardImageBg3 from '../assets/images/Image-3.png'
import cardImageBg4 from '../assets/images/Image-4.jpg'
import cardImageBg5 from '../assets/images/Image-5.jpg'
import cardImageBg6 from '../assets/images/Image-6.png'
import cardImageBg7 from '../assets/images/Image-7.jpg'
import cardImageBg8 from '../assets/images/Image-8.png'
import cardImageBg9 from '../assets/images/Image-9.png'
import cardImageBg1 from '../assets/images/Image.jpg'
import Card from './card'

import apa2 from '../assets/images/apa-2.jpg'
import apa3 from '../assets/images/apa-3.jpg'
import apa from '../assets/images/apa.jpg'

import off from '../assets/images/off.jpg'
import off2 from '../assets/images/off-2.jpg'
import off3 from '../assets/images/off-3.jpg'
import off4 from '../assets/images/off-4.jpg'
import off5 from '../assets/images/off-5.jpg'

import par from '../assets/images/par.jpg'
import par2 from '../assets/images/par-2.jpg'
import par3 from '../assets/images/par-3.jpg'

const HomeCardComponent = () => {
  return (
    <div className="flex flex-col sm:grid md:grid-cols-2 xl:grid-cols-3 gap-5 m-5 p-5 ">
      <Card imageSrc={cardImageBg1} title="Modern Class House" />
      <Card imageSrc={apa3} title="Modern Class House" />
      <Card imageSrc={cardImageBg3} title="Modern Class House" />
      <Card imageSrc={cardImageBg4} title="Modern Class House" />
      <Card
        imageSrc={cardImageBg5}
        title="Modern Class House"
        // price="$ 1,625,000"
      />
      <Card imageSrc={cardImageBg6} title="Modern Class House" />
      <Card imageSrc={cardImageBg7} title="Modern Class House" />
      <Card imageSrc={cardImageBg8} title="Modern Class House" />
      <Card imageSrc={cardImageBg9} title="Modern Class House" />
    </div>
  )
}

const ApartmentCardComponent = () => {
  return (
    <div className="flex flex-col sm:grid md:grid-cols-2 xl:grid-cols-3 gap-5 m-5 p-5  ">
      <Card imageSrc={apa} title="Modern Class Apartments" />
      <Card imageSrc={apa2} title="Modern Class Apartments" />
      <Card imageSrc={apa3} title="Modern Class Apartments" />
      <Card imageSrc={cardImageBg7} title="Modern Class Apartments" />
      <Card imageSrc={cardImageBg8} title="Modern Class Apartments" />
      <Card imageSrc={cardImageBg9} title="Modern Class Apartments" />

      <Card imageSrc={cardImageBg1} title="Modern Class Apartments" />
      <Card imageSrc={cardImageBg2} title="Modern Class Apartments" />
      <Card imageSrc={cardImageBg3} title="Modern Class Apartments" />
    </div>
  )
}

const OfficeCardComponent = () => {
  return (
    <div className="flex flex-col sm:grid md:grid-cols-2 xl:grid-cols-3 gap-5 m-5 p-5  ">
      <Card imageSrc={off} title="Modern Class Office" />
      <Card imageSrc={off2} title="Modern Class Office" />
      <Card imageSrc={off5} title="Modern Class Office" />
      <Card imageSrc={off4} title="Modern Class Office" />
      <Card imageSrc={off3} title="Modern Class Office" />
      <Card imageSrc={cardImageBg9} title="Modern Class Office" />

      <Card imageSrc={cardImageBg1} title="Modern Class Office" />
      <Card imageSrc={cardImageBg2} title="Modern Class Office" />
      <Card imageSrc={cardImageBg3} title="Modern Class Office" />
    </div>
  )
}


const ParkingCardComponent = () => {
  return (
    <div className="flex flex-col sm:grid md:grid-cols-2 xl:grid-cols-3 gap-5 m-5 p-5  ">
      <Card imageSrc={par} title="Modern Parking" />
      <Card imageSrc={par2} title="Modern Parking" />
      <Card imageSrc={par3} title="Modern Parking" />
      <Card imageSrc={cardImageBg7} title="Modern Parking" />
      <Card imageSrc={cardImageBg8} title="Modern Parking" />
      <Card imageSrc={cardImageBg9} title="Modern Parking" />

      <Card imageSrc={cardImageBg1} title="Modern Parking" />
      <Card imageSrc={cardImageBg2} title="Modern Parking" />
      <Card imageSrc={cardImageBg3} title="Modern Parking" />
    </div>
  )
}

const WarehouseCardComponent = () => {
  return (
    <div className="flex flex-col sm:grid md:grid-cols-2 xl:grid-cols-3 gap-5 m-5 p-5  ">
      <Card imageSrc={apa} title="Modern Class Warehouse" />
      <Card imageSrc={apa2} title="Modern Class Warehouse" />
      <Card imageSrc={apa3} title="Modern Class Warehouse" />
      <Card imageSrc={cardImageBg7} title="Modern Class Warehouse" />
      <Card imageSrc={cardImageBg8} title="Modern Class Warehouse" />
      <Card imageSrc={cardImageBg9} title="Modern Class Warehouse" />

      <Card imageSrc={cardImageBg1} title="Modern Class Warehouse" />
      <Card imageSrc={cardImageBg2} title="Modern Class Warehouse" />
      <Card imageSrc={cardImageBg3} title="Modern Class Warehouse" />
    </div>
  )
}


const CommercialComponent = () => {
  return (
    <div className="flex flex-col sm:grid md:grid-cols-2 xl:grid-cols-3 gap-5 m-5 p-5 ">
      <Card imageSrc={cardImageBg8} title="Modern Class Commercial" />
      <Card imageSrc={apa3} title="Modern Class Commercial" />
      <Card imageSrc={cardImageBg3} title="Modern Class Commercial" />
      <Card imageSrc={cardImageBg6} title="Modern Class Commercial" />
      <Card
        imageSrc={cardImageBg5}
        title="Modern Class Commercial"
        // price="$ 1,625,000"
      />
      <Card imageSrc={cardImageBg9} title="Modern Class Commercial" />
      <Card imageSrc={cardImageBg7} title="Modern Class Commercial" />
      <Card imageSrc={cardImageBg1} title="Modern Class Commercial" />
      <Card imageSrc={cardImageBg4} title="Modern Class Commercial" />
    </div>
  )
}

const tabs = [
  { label: 'Home', content: <HomeCardComponent /> },
  { label: 'Apartment', content: <ApartmentCardComponent /> },
  { label: 'Office', content: <OfficeCardComponent /> },
  { label: 'Warehouse', content: <WarehouseCardComponent /> },
  { label: 'Parking', content: <ParkingCardComponent /> },
  { label: 'Commercial', content: <CommercialComponent /> },
]

const Tabs = () => {
  const [activeTabIndex, setActiveTabIndex] = useState(0)

  return (
    <div className="flex flex-col justify-center items-center  ">
      <div className="flex ">
        {tabs.map((tab, idx) => (
          <button
            key={idx}
            className={`${
              idx === activeTabIndex
                ? 'border-b-2 border-orange-500 text-orange-500 '
                : 'text-gray-500 hover:text-gray-700 dark:text-white dark:hover:text-gray-500'
            } px-2 font-normal py-4 sm:px-6 sm:font-medium focus:outline-none ${
              idx === 3 && 'hidden sm:flex'
            }`}
            onClick={() => setActiveTabIndex(idx)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="mt-4">{tabs[activeTabIndex].content}</div>
    </div>
  )
}

export default Tabs
