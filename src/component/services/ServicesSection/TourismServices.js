import Image from 'next/image'
import React from 'react'
import { RiVoiceprintFill } from "react-icons/ri";import { RiFocus3Line } from "react-icons/ri";import { CiHome } from "react-icons/ci";import { PiHandbagBold } from "react-icons/pi";
import { FaRegCircle } from 'react-icons/fa';import { MdOutlineDashboardCustomize } from "react-icons/md"
import { IoTicket } from "react-icons/io5";import { LuHotel } from "react-icons/lu";
import { WiDirectionUpRight } from "react-icons/wi";
function TourismServices() {
  return (
    <>
    <div className='flex justify-center'>
        <div className='flex flex-col'>
          {/* text section             */}
          <div>
            <div className='mt-10'>
            
                  <div className='flex relative'>
                    <div className='relative'>
                       <IoTicket  className='text-purple-800 absolute text-2xl font-semibold'/>
                        
                        <h1 className='text-purple-800  ml-8 font-semibold text-2xl'>
                        Air Ticket Booking:</h1>
                  </div>
                    </div>
                 
                  

                  <p className='max-w-[60%]  '>Take the stress out of travel planning with our expert air ticket booking services. We'll find the best flight options that suit your preferences and budget.</p>
            

            </div>

            <div className='mt-10'>
            
                  <div className='flex'>
                  <LuHotel  className='text-purple-800 text-2xl font-semibold'/>
                  <h1 className='text-purple-800 font-semibold text-2xl'>
                  Hotel Selection:</h1>
                  </div>

                  <p className='max-w-[60%]'>est easy knowing that your accommodations are taken care of. Our hotel selection process is meticulous, offering a range of options to match your travel style.</p>
            

            </div>

            <div className='mt-10'>
            
                  <div className='flex'>
                  <MdOutlineDashboardCustomize  className='text-purple-800 text-2xl font-semibold'/>
                  <h1 className='text-purple-800 font-semibold text-2xl'>
                  Customized Tour Packages:</h1>
                  </div>
                  <p className='max-w-[60%]'>Your travel experience should be as unique as you are. That's why we offer customized tour packages tailored to your interests and desires.</p>
            
            </div>

            <div className='mt-10'>
            
                  <div className='flex'>
                  <div className='relative'>
                       <FaRegCircle className='text-purple-800 absolute -top-1 text-2xl font-semibold'/>
                        <WiDirectionUpRight  className='text-purple-800 absolute -top-1 -left-1 text-3xl font-semibold'/>
                        <h1 className='text-purple-800 -mt-2  ml-8 font-semibold text-2xl'>
                        Effortless Exploration:</h1>
                  </div>
                  </div>
                  <p className='max-w-[60%]'>Leave the logistics to us. We take care of the details, so you can focus on creating incredible memories.</p>
            
            </div>

            
          </div>
        </div>
        <div className=''>
            {/* img section  */}
            <Image
                        src="https://cdn.sanity.io/images/s37229yn/production/9c974cba5febec27db89085285c7727ecc52d496-5999x3999.jpg?w=1600&auto=format"
                        width={6400} // Native image width
                        height={3104} // Native image height
                        className="h-[492px] w-[579px] rounded-2xl" //mt-[10px] ml-[100px]
                        alt="Flowbite Logo"
                    />
        </div>
    </div>
    
    </>
  )
}

export default TourismServices