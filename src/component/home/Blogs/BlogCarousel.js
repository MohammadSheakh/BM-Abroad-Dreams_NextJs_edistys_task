import React from "react";
import Blog from "./Blog";
import useEmblaCarousel from "embla-carousel-react";

function BlogCarousel() {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: false,
        align: "start",
    });
    const blogData = [
        {
            title: "How to Secure Scholarships for Studying Abroad from Bangladesh",
            date: "16th Oct 2023",
            image: "https://cdn.sanity.io/images/s37229yn/production/9dbc6c3db109595f176f924c99e66a5f92c1ace7-5486x3630.jpg?w=960&auto=format",
        },
        {
            title: "A Comprehensive Guide to Scholarships and Financial Resources",
            date: "14th Sep 2023",
            image: "https://cdn.sanity.io/images/s37229yn/production/b97fc602c7d31a3a5dd1f1f98613903e839b5188-5953x3840.jpg?w=960&auto=format",
        },
        {
            title: "Top Study Destinations for Bangladeshi Students in 2023",
            date: "16th Oct 2023",
            image: "https://cdn.sanity.io/images/s37229yn/production/e71b4d999ed651d9753d3a3fb4f4306621751413-960x639.jpg?auto=format",
        },
        {
            title: "Bangladeshi Students' Guide to Finding the Right Study Abroad Program",
            date: "16th Oct 2023",
            image: "https://cdn.sanity.io/images/s37229yn/production/de7a4a5cb1e3f9c73c77406f8cb5b954db4f7eb8-5760x3840.jpg?auto=format",
        },
        {
            title: "How to Choose the Right Foreign University: A Comprehensive Guide for Bangladeshi Students",
            date: "17th Oct 2023",
            image: "https://cdn.sanity.io/images/s37229yn/production/ae0bfd4fb335c67aaebe9cea1bdcd619fefbcae0-1920x1280.jpg?w=960&auto=format",
        },
        {
            title: "Internship Opportunities for International Students in Bangladesh",
            date: "2nd Nov 2023",
            image: "https://cdn.sanity.io/images/s37229yn/production/9c86944d6c934b64633b40f020e383729d3d0c94-7146x4769.jpg?w=960&auto=format",
        },
    ];
    return (
        <>
            <div className="flex flex-wrap  justify-center mt-10 w-[90%] h-[406px]">
                {/* //🔴 */}
                {/* w-screen */}

                <div className="overflow-hidden  flex border-none bg-white rounded-xl">
                    {/* max-w-lg */}{" "}
                    <div className="embla__viewport" ref={emblaRef}>
                        {" "}
                        <div className="flex w-[18%] ">
                            {/* w-[900px] */}
                            {blogData.map((blog, index) => (
                                <>
                                    <Blog key={index} blogData={blog} />
                                </>
                            ))}
                        </div>{" "}
                    </div>{" "}
                </div>
            </div>
        </>
    );
}

export default BlogCarousel;
