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
            <div className="flex justify-center px-[10%] gap-9 bg-white p-5">
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
                <div className="w-[20%]">
                    {/* phone no. and contacts and email */}
                    <div className="flex">
                        <FaPhone />
                        <h1>01434794837</h1>
                    </div>

                    <div className="flex">
                        <MdPlace />
                        <h1>
                            House 983, Road 16, Avenue 2, Mirpur DOHS, Dhaka
                            1216, Bangladesh
                        </h1>
                    </div>
                    <div className="flex">
                        <IoMdMail />
                        <h1>bmabroadreamers@gmail.com</h1>
                    </div>
                </div>
                <div>
                    {/* social media links  */}
                    <h1>Social Media</h1>
                    <div className="flex">
                        <FaFacebookSquare />

                        <FaInstagram />

                        <FaLinkedinIn />

                        <FaYoutube />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;
