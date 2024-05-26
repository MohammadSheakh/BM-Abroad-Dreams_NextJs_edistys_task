import React, { useEffect } from "react";

function TitleComponent({ title, shortDescription }) {
    // useEffect(() => {
    //     console.log("title :: ", title);
    //     console.log("shortDescription :: ", shortDescription);
    // }, []);
    // console.log("title :: ", title);
    // console.log("shortDescription :: ", shortDescription);
    return (
        <div className="mx-28 flex">
            <div className="border-blue-900 border-4"></div>
            <div className="ml-4">
                <h1 className=" text-5xl font-bold">{title}</h1>
                <h3 className=" text-sm font-light">{shortDescription}</h3>
            </div>
        </div>
        // <div>
        //     <h1>sd</h1>
        // </div>
    );
}

export default TitleComponent;
