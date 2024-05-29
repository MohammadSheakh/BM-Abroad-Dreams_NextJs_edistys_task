import Image from 'next/image'
import React from 'react'
import { RiVoiceprintFill } from "react-icons/ri";import { RiFocus3Line } from "react-icons/ri";import { CiHome } from "react-icons/ci";import { PiHandbagBold } from "react-icons/pi";
import { FaRegCircle } from 'react-icons/fa';
function StudyAbroadServices() {
  return (
    <>
    <div className='flex justify-center'>
        <div className='flex flex-col'>
          {/* text section             */}
          <div>
            <div className='mt-10'>
            
                  <div className='flex relative'>
                    <div className='relative'>
                       <FaRegCircle className='text-purple-800 absolute text-2xl font-semibold'/>
                        <RiVoiceprintFill  className='text-purple-800 absolute top-1 left-1 text-1xl font-semibold'/>
                        <h1 className='text-purple-800  ml-8 font-semibold text-2xl'>
                        Prioritizing Your Voice:</h1>
                  </div>
                    </div>
                 
                  

                  <p className='max-w-[60%]  '>We believe in listening first. Your background, dreams, and goals matter, and they shape the foundation of our approach.</p>
            

            </div>

            <div className='mt-10'>
            
                  <div className='flex'>
                  <CiHome className='text-purple-800 text-2xl font-semibold'/>
                  <h1 className='text-purple-800 font-semibold text-2xl'>
                  Custom Pathway Design:</h1>
                  </div>

                  <p className='max-w-[60%]'>Your journey is unique, and we recognize that. We work closely with you to create a customized pathway tailored to your specific needs.</p>
            

            </div>

            <div className='mt-10'>
            
                  <div className='flex'>
                  <RiFocus3Line className='text-purple-800 text-2xl font-semibold'/>
                  <h1 className='text-purple-800 font-semibold text-2xl'>
                  Recognition in the Job Market:</h1>
                  </div>
                  <p className='max-w-[60%]'>We equip you with the skills and guidance you need to excel in the job market, ensuring you stand out to prospective employers.</p>
            
            </div>

            <div className='mt-10'>
            
                  <div className='flex'>
                  <PiHandbagBold  className='text-purple-800 text-2xl font-semibold'/>
                  <h1 className='text-purple-800 font-semibold text-2xl'>
                  Pathway to Residence:</h1>
                  </div>
                  <p className='max-w-[60%]'>For those with dreams of permanent residence, we provide guidance on how your study journey can lead to residency in your dream destination.</p>
            
            </div>

            
          </div>
        </div>
        <div className=''>
            {/* img section  */}
            <Image
                        src="https://cdn.sanity.io/images/s37229yn/production/ce7648f8dad9f6f9fdb04d812ac5c92b766d33c8-5513x4339.jpg?w=1600&auto=format"
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

export default StudyAbroadServices