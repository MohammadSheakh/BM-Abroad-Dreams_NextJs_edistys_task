import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";

import { Alert } from "flowbite-react";
import Banner from "@/component/home/Banner";
import AboutUs from "@/component/home/AboutUs";
import TaskCards from "@/component/home/TaskCards/TaskCards";
import Video from "@/component/home/Video";

// import { Alert } from "flowbite-react"; //

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    return (
        <>
            {/* #F4F8FF */}
            {/* container       flex-1 */}
            <div className=" container justify-center bg-slate-800 h-full w-full bg-mainBackgroundColor">
                <div className="mt-20">
                    <Banner />
                </div>
                <div>
                    <h1 className="mt-20 h-auto w-[1200px]  text-5xl font-bold mx-auto text-center">
                        STEP INTO A GLOBAL EDUCATION ODYSSEY WITH OUR EXPERTS
                        STUDY ABROAD GUIDANCE
                    </h1>

                    <Image
                        src="https://cdn.sanity.io/images/s37229yn/production/7c167e8391ffa0bc146a3e1747ea9209c669933c-3592x1440.png?rect=0,202,3592,1238&w=960&auto=format"
                        width={6400} // Native image width
                        height={3104} // Native image height
                        className="h-auto w-auto  mx-auto bg-mainBackgroundColor" //mt-[10px] ml-[100px]
                        alt="Flowbite Logo"
                    />
                </div>
                {/* ----------------------------about us section ---------------------start------ */}
                <AboutUs />
                {/* ----------------------------about us section ---------------------End------ */}

                {/* ----------------------------Task Cards section ---------------------start------ */}
                <TaskCards />

                {/* ----------------------------Task Cards section ---------------------End------ */}
                {/* ----------------------------Video section ---------------------start------ */}
                <VideoPlayer />

                {/* ----------------------------Video section ---------------------End------ */}
            </div>
        </>
    );
}
