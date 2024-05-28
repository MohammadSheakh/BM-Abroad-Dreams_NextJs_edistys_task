// rfce
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaPhone } from "react-icons/fa6";
import { MdPlace } from "react-icons/md";
import { IoMdMail } from "react-icons/io";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";

function Footer() {
    return (
        <>
            <div className="flex  px-[2%] py-[3%] mt-28 gap-[90px] bg-white p-5">
            {/* justify-center */}
                <div className="w-[30%]">
                    {/* icon and description */}
                    <Image
                        src="https://cdn.sanity.io/images/s37229yn/production/576084e1b9545990e38bc6ccee63646f2b0b0742-756x276.png?w=320&auto=format"
                        width={150}
                        height={100}
                        className="h-10 "
                        alt="Flowbite Logo"
                    />
                    <div>
                        <p>
                            We help students achieve their dreams of studying
                            abroad by providing them with the best resources and
                            support. Your journey to global education starts
                            with us.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col gap-3 font-semibold">
                    {/* links */}
                    <Link href="/">About Us</Link>
                    <Link href="/">Privacy Policy</Link>
                    <Link href="/">Our Partner</Link>
                    <Link href="/">Blog</Link>
                </div>
                <div className="flex flex-col gap-3 font-semibold">
                    {/* links */}
                    <Link href="/">Contact Us</Link>
                    <Link href="/">Terms and conditions</Link>
                    <Link href="/">Tourist hub</Link>
                    <Link href="/">Services</Link>
                </div>
                <div className="w-[20%] flex flex-col gap-8 ">
                    {/* phone no. and contacts and email */}
                    <div className="flex relative">
                        <FaPhone className=" text-purple-600"/>
                        <h1 className="absolute top-[-5px] left-[9%]">01434794837</h1>
                    </div>

                    <div className="flex relative">
                        <MdPlace className=" text-purple-600"/>
                        <h1  className="absolute top-[-5px] left-[9%]">
                            House 983, Road 16, Avenue 2, Mirpur DOHS, Dhaka
                            1216, Bangladesh
                        </h1>
                    </div>
                    <div className="flex relative mt-6">
                        <IoMdMail className=" text-purple-600"/>
                        <h1 className="absolute top-[-5px] left-[9%]">bmabroadreamers@gmail.com</h1>
                    </div>
                </div>
                <div className="mt-20">
                    {/* social media links  */}
                    <h1>Social Media</h1>
                    <div className="flex mt-5 gap-5  ">
                        <FaFacebookSquare className="text-purple-600"/>

                        <FaInstagram className=" text-purple-600"/>
                        {/* text-4xl opacity-50 */}
                        <FaLinkedinIn className=" text-purple-600"/>

                        <FaYoutube className=" text-purple-600"/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;
