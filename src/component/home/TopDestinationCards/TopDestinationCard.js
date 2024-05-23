// rfce
import Image from "next/image";
import React from "react";

function TopDestinationCard({ destinationData }) {
    return (
        <>
            <div className="rounded-2xl  w-[280px] h-[400px] flex flex-col justify-center bg-white border-none border-2">
                {/* <h1>{destinationData.title}</h1> */}
                <Image
                    src={destinationData.image}
                    width={200} // Native image width
                    height={104} // Native image height
                    className="h-auto w-auto " //mt-[10px] ml-[100px]
                    alt="Flowbite Logo"
                />
                {/* <div>
                   
                    <Image
                        src={destinationData.image}
                        width={500} // Native image width
                        height={3104} // Native image height
                        className="h-auto w-[125px]  mx-auto bg-white" //mt-[10px] ml-[100px]
                        alt="Flowbite Logo"
                    />
                </div>
                <div>
                   
                    <h1 className=" text-2xl font-bold text-center text-blue-900">
                        {destinationData.title}
                    </h1>
                </div>
                <div>
                    
                    <h1 className="  text-center">
                        {destinationData.description}
                    </h1>
                </div> */}
            </div>
        </>
    );
}

export default TopDestinationCard;
