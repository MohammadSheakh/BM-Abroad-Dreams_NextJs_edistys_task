import Image from "next/image";
import React from "react";

function AboutUs() {
    return (
        <div className="flex mx-28 p-14 mt-0 rounded-3xl bg-white">
            <div className="flex gap-5 mx-28 mt-10">
                <div className="w-[900px]">
                    <h1 className=" text-5xl font-bold">ABOUT US</h1>
                    <h3 className=" text-sm font-light">
                        Archive your Dream with BM ABROAD DREAMERS
                    </h3>
                    <h5 className="mt-10 text-left">
                        Embarking on an educational journey in a foreign land is
                        akin to stepping onto a canvas brimming with boundless
                        possibilities. It is a realm where aspirations unfurl
                        their wings and horizons stretch far beyond the realms
                        of imagination. Founded in 2021, BM Abroad Dreamers
                        transcends the role of mere consultancy; it stands as a
                        harmonious orchestration of ambitions, a conduit that
                        binds your dreams with the realm of world-class
                        education you so rightly deserve. Yet, we are far from
                        being conventional educational consultants; rather, we
                        are artisans of dreams, architects of experiences, and
                        your steadfast collaborators in the transformation of
                        reveries into tangible reality.
                    </h5>
                </div>
                <div>
                    {/* Image */}
                    <Image
                        src="https://cdn.sanity.io/images/s37229yn/production/f5b21d7118f32605ccfecc4c94b0b02514606b66-2796x2126.png?w=1280&auto=format"
                        width={500} // Native image width
                        height={3104} // Native image height
                        className="h-auto w-auto  mx-auto bg-white" //mt-[10px] ml-[100px]
                        alt="Flowbite Logo"
                    />
                </div>
            </div>
        </div>
    );
}

export default AboutUs;
