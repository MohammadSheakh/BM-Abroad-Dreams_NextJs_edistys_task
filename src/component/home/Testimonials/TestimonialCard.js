import Image from "next/image";
import React from "react";

function TestimonialCard({ testimonialData }) {
    return (
        <>
            <div className="embla__slide">
                <div className="w-[900px] h-[500px]  flex">
                    {/* bg-red-100 border-4*/}

                    {/* for image */}
                    {/* <Image
                            src={testimonial.image}
                            alt="testimonial"
                            className="h-[500px] w-[500px]"> */}
                    <Image
                        src={testimonialData?.image}
                        width={374} // Native image width
                        height={500} // Native image height
                        className="h-[500px] w-[374px]   " //mt-[10px] ml-[100px] mx-auto
                        alt="Flowbite Logo"
                    />

                    <div className="p-12">
                        {/* for description */}
                        <h1 className="text-2xl font-semibold text-blue-900">
                            {testimonialData.title}
                        </h1>
                        <p className="mt-10 w-[360px]">
                            {testimonialData.description}
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default TestimonialCard;
