import React from "react";

function Blog({ blogData }) {
    return (
        <>
            <div className=" embla__slide w-[300px] h-[406px] ">
                {/* text-wrap */}
                <div className=" w-[300px] h-[406px] border-2">
                    <h1 className="">{blogData.title}</h1>
                </div>
            </div>
        </>
    );
}

export default Blog;
