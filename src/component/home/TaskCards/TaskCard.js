import Image from "next/image";
import React from "react";

function TaskCard({ task }) {
    return (
        <>
            <div className="rounded-2xl p-3 w-[280px] h-[400px] flex flex-col justify-center bg-white border-none border-2">
                <div>
                    {/* Image */}
                    <Image
                        src={task.image}
                        width={500} // Native image width
                        height={3104} // Native image height
                        className="h-auto w-[125px]  mx-auto bg-white" //mt-[10px] ml-[100px]
                        alt="Flowbite Logo"
                    />
                </div>
                <div>
                    {/* Bold Text */}
                    <h1 className=" text-2xl font-bold text-center text-blue-900">
                        {task.title}
                    </h1>
                </div>
                <div>
                    {/* Description */}
                    <h1 className="  text-center">{task.description}</h1>
                </div>
            </div>
        </>
    );
}

export default TaskCard;
