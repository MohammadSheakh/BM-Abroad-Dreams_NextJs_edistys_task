// rfce
import React from "react";
import TaskCard from "./TaskCard";

function TaskCards() {
    const taskData = [
        {
            title: "VISA PROCESS",
            description:
                "We assist students in navigating the complex visa application process for their chosen study abroad",
            image: "https://cdn.sanity.io/images/s37229yn/production/124c56b0d98832ef6d3f854e02cf480b70254041-448x449.webp?w=448&auto=format",
        },
        {
            title: "UNIVERSITY SELECTION",
            description:
                "We help students find the perfect university that aligns with their academic goals and preferences",
            image: "https://cdn.sanity.io/images/s37229yn/production/d54a732b46f7f381de5f28a9c70a07494a70fdbf-2000x1615.webp?w=640&auto=format",
        },
        {
            title: "INITIAL COUNSELING",
            description:
                "Our team provides best personalized guidance to help students understand their opportunities ",
            image: "https://cdn.sanity.io/images/s37229yn/production/e173064a841e5451c80462cbda7535e1b5899fae-1841x1886.png?w=640&auto=format",
        },
        {
            title: "ADMISSION GUIDANCE",
            description:
                "We offer expert advice to ensure students submit strong applications to their desired universities.",
            image: "https://cdn.sanity.io/images/s37229yn/production/03597796ab319a4cd87b3f818b9b73af81e5d238-2000x3010.webp?w=640&auto=format",
        },

        {
            title: "CARREER COUNSELING",
            description:
                "We provide students understand how their chosen study program can can lead to their future career goals",
            image: "https://cdn.sanity.io/images/s37229yn/production/f9a232f020cdbef00a4c037d6874c3b562250bce-1995x2761.png?w=640&auto=format",
        },
        {
            title: "EDUCATION COUNSELING",
            description:
                "Our experienced counselors offer guidance on various study programs and help students make decisions",
            image: "https://cdn.sanity.io/images/s37229yn/production/8e9a01894b2d5b65c165f2e48935ea6cae88e4bd-2000x2186.webp?w=640&auto=format",
        },
        {
            title: "APPLICATION PLACEMENT",
            description:
                "We assist students in submitting their applications to universities with all necessary documents",
            image: "https://cdn.sanity.io/images/s37229yn/production/bfa27d15dde0c8633aa23de6cbe9c7db0595133f-2000x1656.webp?w=640&auto=format",
        },
        {
            title: "EXPERT VISA SERVICES",
            description:
                "Our team of experts guides students through the visa application process, minimizing the chances of rejection.",
            image: "https://cdn.sanity.io/images/s37229yn/production/93d1e3120b3dde27f3a7ea15214ee19f15b5f476-2000x1469.webp?w=640&auto=format",
        },
    ];
    return (
        <>
            <div className="flex flex-wrap  gap-5 justify-center mt-10 w-full">
                {/* w-screen */}
                {taskData.map((task, index) => (
                    <>
                        <TaskCard key={index} task={task} />
                    </>
                ))}
            </div>
        </>
    );
}

export default TaskCards;
