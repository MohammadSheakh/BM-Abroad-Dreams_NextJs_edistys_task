import Image from "next/image";
import React from "react";

function StartYourJourney() {
    return (
        <>
            <div className="w-[90%] h-[500px] flex bg-white p-20 mt-10 rounded-2xl ml-10">
                <div className="w-[600px]">
                    {/* text section  */}
                    <h1 className="text-5xl font-bold">
                        READY TO START YOUR JOURNEY TO SUCCESS ?
                    </h1>
                    <p className="mt-16 text-lg">
                        At BM Study Dreamers, we believe that education knows no
                        boundaries and success knows no limits. With our
                        dedicated guidance, your journey to success becomes a
                        reality. With every step you take, we are by your side,
                        providing expert assistance that transcends borders and
                        empowers you to achieve academic excellence and personal
                        dreams. Your journey to success begins here, with us.
                    </p>
                    <button>Start Now</button>
                </div>
                <div>
                    {/* image section  */}

                    <Image
                        src="https://cdn.sanity.io/images/s37229yn/production/bef80116aff017c43490c98d2a35cbc776f2d774-1747x2482.png?w=960&auto=format"
                        width={374} // Native image width
                        height={500} // Native image height
                        className="h-[400px] w-[374px] ml-[100px]" //mt-[10px] ml-[100px] mx-auto
                        alt="Flowbite Logo"
                    />
                </div>
            </div>
        </>
    );
}

export default StartYourJourney;
