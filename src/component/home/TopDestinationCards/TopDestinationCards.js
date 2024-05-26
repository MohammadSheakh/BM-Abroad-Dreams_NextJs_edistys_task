// rfce
import React from "react";
import TopDestinationCard from "./TopDestinationCard";

function TopDestinationCards() {
    const destinationData = [
        {
            title: "NEW ZEALAND",
            description:
                "Studying in New Zealand offers a unique blend of high-quality education and breathtaking natural beauty. With its diverse courses, New Zealand provides an enriching experience for international students.",
            image: "https://cdn.sanity.io/images/s37229yn/production/8a927441826e5946a3f7c5a5ec21602728c387f4-2756x4164.jpg?auto=format",
        },
        {
            title: "AUSTRALIA",
            description:
                "Australia is renowned for its world-class education system and a diverse, multicultural society. With a wide range of programs and courses, it provides an enriching experience for international students.",
            image: "https://cdn.sanity.io/images/s37229yn/production/ae9f1d1675c36f23df197fdbcd6ed7eee09baf84-1528x2048.png?auto=format",
        },
        {
            title: "USA",
            description:
                "The United States is a global educational hub, known for its top-ranking universities and colleges. Studying in the USA not only provides access to high-quality education but also a chance to immerse yourself in a culturally diverse environment.",
            image: "https://cdn.sanity.io/images/s37229yn/production/d47d9d87e83105147c61af3f3478b16196d7888a-1528x2048.png?auto=format",
        },
        {
            title: "CANADA",
            description:
                "Canada is celebrated for its excellent education system and welcoming, inclusive society. International students in Canada can enjoy a range of courses and programs, fostering personal and academic growth.",
            image: "https://cdn.sanity.io/images/s37229yn/production/493d2e0fe94d96142a900468faa95e6330367100-1528x2048.png?auto=format",
        },
    ];
    return (
        <>
            <div className="flex flex-wrap  gap-5 justify-center mt-10 w-screen">
                {/* //🔴 */}
                {/* w-screen */}
                {destinationData.map((destination, index) => (
                    <>
                        <TopDestinationCard
                            key={index}
                            destinationData={destination}
                        />
                    </>
                ))}
            </div>
        </>
    );
}

export default TopDestinationCards;
