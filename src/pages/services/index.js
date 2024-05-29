import TitleComponent from '@/component/common/title/TitleComponent'
import ImageGrid from '@/component/services/ImageGrid/ImageGrid'
import StudyAbroadServices from '@/component/services/ServicesSection/StudyAbroadServices'
import TourismServices from '@/component/services/ServicesSection/TourismServices'
import Timeline from '@/component/services/Timeline/Timelines'
import Image from 'next/image'
import React from 'react'

function index() {
  return (
    <>
      <div className='container flex justify-center flex-col mx-auto'>

        <h1 className='mt-20 text-center text-5xl font-bold'>
        EXPLORE THE WORLD WITH
        </h1 >
        <h1 className='text-5xl text-center font-bold text-purple-600'>BM ABROAD DREAMERS</h1>
        <ImageGrid/>
        <div >
            <h1 className=' text-center max-w-[500px]'>
              We offer a diverse range of services to cater to your aspirations. Whether you're planning to study abroad or embark on a memorable tourism adventure, we've got you covered.
          </h1>
        </div>
        <div className='mx-[5%]'>
            <TitleComponent
                title="STUDY ABROAD SERVICES"
                shortDescription="we're dedicated to making your study abroad journey seamless and successful"
            />
            <StudyAbroadServices/>
        </div>
       
        <Timeline/>
        
        <Image
                        src="https://cdn.sanity.io/images/s37229yn/production/1fd4512c14cbc1d3f3245f4296f1676ed45f2841-6400x3624.png?w=3200&auto=format"
                        width={6400} // Native image width
                        height={3104} // Native image height
                        className="h-auto w-auto rounded-2xl mx-auto mt-11" //mt-[10px] ml-[100px]
                        alt="Flowbite Logo"
                    />

      <div className='mx-[5%]'>
          <TitleComponent
              title="TOURISM SERVICES"
              shortDescription="we're also your gateway to unforgettable tourism experiences."
          />
          <TourismServices/>
      </div>

        <ImageGrid/>
      </div>
      
    
    </>
  )
}

export default index