import React, { useContext, useRef, useState } from 'react'
import useOutsideClick from "../helpers/useIutsideClick.js"
import { MdOutlineCancel } from 'react-icons/md';
import { useStateContext } from '../context/ContextProvider.js';

const PropertiesNav = ({properties, setIsClicked}) => {

    const [searchTerm, setSearchTerm] = useState('');
    const chatRef = useRef(); 
    useOutsideClick(chatRef, () => setIsClicked(prev => ({ ...prev, cart: false })));
    const { setPropertySelectedContext } = useStateContext()

  return (
    <div ref={chatRef} className="nav-item absolute z-10 right-5 md:right-52 top-16 bg-white dark:bg-[#42464D] p-8 rounded-lg w-96 overflow-y-auto" style={{ maxHeight: "36rem" }}>
      <div className="flex justify-between items-center">
        <div className="flex justify-between w-full">
          <p className="font-semibold  text-lg dark:text-gray-200">Properties</p>
          <button
          onClick={()=> setIsClicked(prev => ({ ...prev, cart: false }))}
            type="button"
            className="text-gray-300  text-lg rounded p-1 px-2 bg-orange"
          ><MdOutlineCancel />
          </button>
        </div>
        
      </div>
      <div className="p-4">
        <input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-2 rounded-lg  text-gray-400 bg-transparent border-2 border-secondary"
        />
      </div>
      <div className="mt-5">
        {properties
          ?.filter((property) =>
            searchTerm === "" ? true : property.name.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .map((property, index) => {
          
            return (
              <div
                key={index}
                className="flex items-center gap-5 my-2 p-3 leading-8 cursor-pointer  border-b-[1.5px] border-gray-500"
                onClick={()=> setPropertySelectedContext(property)}
              >
                <div className="relative">
                  <img
                    className="rounded-full h-16 w-16 object-cover"
                    src={"https://innova-bucket.s3.amazonaws.com/Properties/Landmark/Images/Landmark_Apt.png"}
                    alt={property.name}
                  />
                  <span
                    className="absolute inline-flex rounded-full h-2 w-2 right-0 -top-1"
                  />
                </div>
                <div>
                  <p className="font-semibold dark:text-gray-200 ">
                    {property.name}
                  </p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">
                    {property.address +" "+property.state}
                  </p>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  )
}

export default PropertiesNav