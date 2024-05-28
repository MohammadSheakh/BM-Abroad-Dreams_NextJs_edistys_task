import Image from "next/image";
import React from "react";
import { MdDateRange } from "react-icons/md";

function Blog({ blogData }) {
    return (
        <>
            <div className=" embla__slide w-[300px] h-[406px] ">
                {/* text-wrap */}
                <div className=" w-[300px] h-[406px]">
                    {/* <h1 className="">{blogData.title}</h1> */}

                    <div>
                        {/* img section  */}
                        <Image
                            src={blogData?.image}
                            width={374} // Native image width
                            height={500} // Native image height
                            className="h-[100%] w-[100%] rounded-xl" //mt-[10px] ml-[100px] mx-auto
                            alt="Flowbite Logo"
                        />
                    </div>
                    <div className="flex relative mt-5">
                        {/* date section */}
                        <MdDateRange className="text-gray-500" />
                        <h1 className="text-gray-500 absolute top-[-1px] left-[20px] text-sm ">
                            {blogData?.date}
                        </h1>
                    </div>

                    <div>
                        {/* title section  */}
                        <h1 className="text-black mt-4  text-2xl font-semibold ">
                            {blogData?.title}
                        </h1>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Blog;
