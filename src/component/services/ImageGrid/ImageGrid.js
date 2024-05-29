 {/* 

const image = "https://cdn.sanity.io/images/s37229yn/production/124c56b0d98832ef6d3f854e02cf480b70254041-448x449.webp?w=448&auto=format";
  <Image
          src={image}
          width={500} // Native image width
          height={3104} // Native image height
          className="h-auto w-[125px]  mx-auto bg-white" //mt-[10px] ml-[100px]
          alt="Flowbite Logo"
      />
      import Image from 'next/image'


*/}


      


import React from 'react'
import Image from 'next/image'
function ImageGrid() {
  
  
  return (
    <>
   <div className="flex justify-center  p-4">
   {/* mx-auto container mx-auto */}
      <div className="grid max-w-[500px]  grid-cols-5 grid-rows-3 gap-2">
        <div className="col-span-2 row-span-2">
        <Image
          src="https://cdn.sanity.io/images/s37229yn/production/b7c55afc3fa808f33f69a1c838c7241379bf37bb-5438x6797.jpg?w=960&auto=format"
          width={500} // Native image width
          height={3104} // Native image height
          className="h-auto w-auto   rounded-3xl bg-white" //mt-[10px] ml-[100px]
          alt="Flowbite Logo"
      />
        </div>
        <div className="col-span-2 row-span-1">
        <Image
          src="https://cdn.sanity.io/images/s37229yn/production/ed36f72ceea5b3bfc3998acf46a8c0621de7f6ec-6240x4160.jpg?w=960&auto=format"
          width={500} // Native image width
          height={3104} // Native image height
          className="h-auto w-auto     rounded-3xl bg-white" //mt-[10px] ml-[100px]
          alt="Flowbite Logo"
      />
        </div>
        <div className="col-span-1 row-span-1">
        <Image
          src="https://cdn.sanity.io/images/s37229yn/production/cfb6041404e82fbd389ccd55eb89c58657e0de29-1200x800.jpg?w=960&auto=format"
          width={500} // Native image width
          height={3104} // Native image height
          className="h-auto w-auto  rounded-3xl bg-white" //mt-[10px] ml-[100px]
          alt="Flowbite Logo"
      />
        </div>

        {/* -------------------------------------- One Row Done -------------------------------------- */}


        <div className="col-span-2 row-span-1">
        <Image
          src="https://cdn.sanity.io/images/s37229yn/production/a5d7d27961f81759b7c1c2339288d37bc2078b33-992x558.jpg?w=960&auto=format"
          width={500} // Native image width
          height={3104} // Native image height
          className="h-auto w-auto    rounded-3xl  bg-white" //mt-[10px] ml-[100px]
          alt="Flowbite Logo"
      />
        </div>
        <div className="col-span-1  row-span-1">
        <Image
          src="https://cdn.sanity.io/images/s37229yn/production/b3182143c70e9046e6a88e146e719800ae83a74c-1528x2192.png?w=960&auto=format"
          width={500} // Native image width
          height={3104} // Native image height
          className="h-auto w-auto    rounded-3xl  bg-white" //mt-[10px] ml-[100px]
          alt="Flowbite Logo"
      />
        </div>
        <div className="col-span-2 row-span-2">
        <Image
          src="https://cdn.sanity.io/images/s37229yn/production/fc1685e3d392f74430a7492fae4bab8b8e4ff9d7-6016x4016.jpg?w=960&auto=format"
          width={500} // Native image width
          height={3104} // Native image height
          className="h-auto w-auto    rounded-3xl  bg-white" //mt-[10px] ml-[100px]
          alt="Flowbite Logo"
      />
        </div>
      </div>
    </div>
    </>
  )
}

export default ImageGrid