import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";

import { Alert } from "flowbite-react";
import Banner from "@/component/home/Banner";
import AboutUs from "@/component/home/AboutUs";
import TaskCards from "@/component/home/TaskCards/TaskCards";
import Video from "@/component/home/Video";
import TopDestinationCards from "@/component/home/TopDestinationCards/TopDestinationCards";
import TestimonialCarousel from "@/component/home/Testimonials/TestimonialCarousel";
import StartYourJourney from "@/component/home/StartYourJourney";
import TitleComponent from "@/component/common/title/TitleComponent";

import BlogCarousel from "@/component/home/Blogs/BlogCarousel";

// import { Alert } from "flowbite-react"; //

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    return (
        <>
            {/* #F4F8FF */}
            {/* container       flex-1 */}
            <div className=" w-full container justify-center bg-slate-800 h-full  bg-mainBackgroundColor">
                {/* w-screen   mx-2 my-2 border-black border-2*/}
                <div className="mt-20 w-[90%] flex justify-center">
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
                {/* <VideoPlayer /> 🔴*/}
                {/* ----------------------------Video section ---------------------End------ */}
                {/* ------------------------------- Top Destination Cards section -------- start ---  */}
                <div className="flex  ">
                    {/* mx-28  justify-center*/}
                    <div className="flex  ">
                        {/* mx-28 */}
                        <div className="w-[100%]">
                            {/* [900px] */}
                            <TitleComponent
                                title="TOP DESTINATION"
                                shortDescription="Study in your Dream Destination"
                            />

                            <div className=" flex">
                                {" "}
                                <TopDestinationCards />{" "}
                            </div>
                        </div>
                    </div>
                </div>
                {/* ----------------------------------- Top Destination Cards section --------- End ---- */}
                {/* ----------------------------------- Testimonials section --------- Start ---- */}
                <div className=" ">
                    {/* flex  justify-center mt-0  */}
                    <div className="flex gap-5  mt-10">
                        {/* mx-28 */}
                        <div className="w-[100%] ">
                            {/* [900px] */}
                            <div className="">
                                <TitleComponent
                                    title="TESTIMONIAL"
                                    shortDescription="Our students shared their visa success
                                stories"
                                />
                            </div>

                            <div className="flex justify-center">
                                {" "}
                                <TestimonialCarousel />{" "}
                            </div>
                        </div>
                    </div>
                </div>
                {/* ----------------------------------- Testimonials section --------- End ---- */}
                {/* ------------------------------------- Success Section --------------- Start ----  */}
                <StartYourJourney />
                {/* ------------------------------------- Success Section --------------- End ----  */}
                {/* ------------------------------------- Blog Section --------------- Start ----  */}
                <div className=" ">
                    {/* flex justify-center mt-0  */}
                    <div className="flex gap-5  mt-10">
                        {/* mx-28 */}
                        <div>
                            <TitleComponent
                                title="BLOGS"
                                shortDescription="Explore our latest blogs and articles"
                            />

                            <div className="w-[90%] h-[406px] flex justify-center">
                                <BlogCarousel />
                            </div>
                        </div>
                    </div>
                </div>
                {/* ------------------------------------- Blog Section --------------- End ----  */}
            </div>
        </>
    );
}
