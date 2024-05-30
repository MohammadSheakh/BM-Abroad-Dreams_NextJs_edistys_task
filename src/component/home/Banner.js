import React from "react";
//import Swiper from "swiper";
import { Carousel } from "react-responsive-carousel";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";

function Banner() {
    return (
        <Swiper
            className="mySwiper h-auto  w-full mx-auto"
            // md:h-[620px]
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            pagination={{
                clickable: true, // true
            }}
            navigation={false} // true
            modules={[Autoplay, Pagination, Navigation]}
        >
            <SwiperSlide>
                <Image
                    src="https://cdn.sanity.io/images/s37229yn/production/21f0f7ab2777513b48be97e55f00052c3bee6b9d-6400x3104.png?w=1920&auto=format"
                    width={6400} // Native image width
                    height={3104} // Native image height
                    className="h-auto w-auto bg-auto"
                    alt="Flowbite Logo"
                />
            </SwiperSlide>
            <SwiperSlide>
                <Image
                    src="https://cdn.sanity.io/images/s37229yn/production/21f0f7ab2777513b48be97e55f00052c3bee6b9d-6400x3104.png?w=1920&auto=format"
                    width={6400} // Native image width
                    height={3104} // Native image height
                    className="h-auto w-auto bg-cover"
                    alt="Flowbite Logo"
                />
            </SwiperSlide>
            <SwiperSlide>
                <Image
                    src="https://cdn.sanity.io/images/s37229yn/production/21f0f7ab2777513b48be97e55f00052c3bee6b9d-6400x3104.png?w=1920&auto=format"
                    width={6400} // Native image width
                    height={3104} // Native image height
                    className="h-auto w-auto bg-contain"
                    alt="Flowbite Logo"
                />
            </SwiperSlide>
        </Swiper>
    );
}

export default Banner;
