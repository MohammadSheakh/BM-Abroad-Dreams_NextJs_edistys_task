// rfce
import Image from "next/image";
import React from "react";

function TopDestinationCard({ destinationData }) {
    return (
        <>
            <div className="overflow-hidden group relative  rounded-2xl z-20  w-[270px] h-[370px] flex flex-col justify-center bg-white border-none border-2">
                {/* <h1>{destinationData.title}</h1> */}
                <Image
                    src={destinationData.image}
                    width={200} // Native image width
                    height={104} // Native image height
                    className="h-auto w-auto z-10" //mt-[10px] ml-[100px] object-cover
                    alt="Flowbite Logo"
                />
                <div className="absolute   top-[320px]  group-hover:top-[40px]  z-10 text-3xl font-bold  text-white">
                    <h1 className="">{destinationData.title}</h1>
                    <h1 className="text-sm font-bold mt-6">
                        {destinationData.description}
                    </h1>
                </div>
            </div>
        </>
    );
}

export default TopDestinationCard;
