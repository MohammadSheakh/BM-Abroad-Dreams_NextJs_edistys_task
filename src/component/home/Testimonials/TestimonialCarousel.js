import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import TestimonialCard from "./TestimonialCard";
import Autoplay from "embla-carousel-autoplay";
import { CiCircleChevLeft, CiCircleChevRight } from "react-icons/ci";

function TestimonialCarousel() {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()]);
    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev();
    }, [emblaApi]);
    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext();
    }, [emblaApi]);

    const testimonialData = [
        {
            title: "BM Abroad Dreamers Agency is the trusted friend",
            description:
                "BM Abroad Dreamers Agency has been my guiding light on this incredible journey of studying abroad. Their unwavering support and expert guidance have been the key to unlocking the doors to my dream education overseas. With their help, I've embarked on a life-changing adventure, embracing new cultures, and building memories that will last a lifetime. For anyone with aspirations of studying abroad, BM Abroad Dreamers Agency is the trusted friend you need to turn your dreams into reality",
            image: "https://cdn.sanity.io/images/s37229yn/production/1838ecd4c726dd9ecacbc348c3aa2003e4271af3-764x1024.jpg?rect=0,0,764,859&auto=format",
            name: "Al Reasat Rafio",
            university: " Western Sydney University, Australia",
        },
        {
            title: "They were everywhere for me",
            description:
                "BM Abroad Dreamers Agency played a pivotal role in making my study abroad dreams come true. Their expert guidance and unwavering support were instrumental at every step of my journey. From helping me navigate the intricate application process to offering personalized advice on scholarships and visa requirements, they were there for me. Thanks to their dedicated assistance, I am now living the experience of a lifetime, studying in a foreign country, immersing myself in a new culture, and gaining a global perspective. This incredible journey wouldn't have been possible without BM Abroad Dreamers.",
            image: "https://cdn.sanity.io/images/s37229yn/production/04d39ea679cca9c102f95bcc297f3849bbecd856-764x1024.jpg?auto=format",
            name: "Saniat Uddin Sayel",
            university: "Federation University, Auistralia",
        },
    ];
    return (
        <>
            <div className="flex justify-center">
                <button className="embla__prev" onClick={scrollPrev}>
                    {/* Prev */}
                    <CiCircleChevLeft className="text-4xl opacity-50 text-gray-500" />
                </button>

                <div className="overflow-hidden flex border-none bg-white rounded-xl">
                    {/* max-w-lg */}{" "}
                    <div className="embla__viewport" ref={emblaRef}>
                        {" "}
                        <div className="flex">
                            {testimonialData.map((testimonial, index) => (
                                <>
                                    <TestimonialCard
                                        key={index}
                                        testimonialData={testimonial}
                                    />
                                </>
                            ))}
                        </div>{" "}
                    </div>{" "}
                </div>
                <button className="embla__next" onClick={scrollNext}>
                    {/* Next */}
                    <CiCircleChevRight className="text-4xl opacity-50 text-gray-500" />
                </button>
            </div>
        </>
    );
}

export default TestimonialCarousel;

{
    /*  <div className="embla__slide">Slide 1</div>{" "}
        <div className="embla__slide">Slide 2</div>{" "}
        <div className="embla__slide">Slide 3</div>{" "} */
}
