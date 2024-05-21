import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { Alert } from "flowbite-react";
import Banner from "@/component/home/Banner";
// import { Alert } from "flowbite-react"; //

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    return (
        <>
            {/* className={styles.main} */}
            <div className="container bg-slate-800 h-full w-full">
                <div className="mt-20 ">
                    <Banner />
                </div>
            </div>
        </>
    );
}
