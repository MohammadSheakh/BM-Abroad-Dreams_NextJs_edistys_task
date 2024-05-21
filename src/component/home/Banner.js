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
            className="mySwiper h-96 mx-auto"
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
            <SwiperSlide className="h-96">
                <Image
                    src="https://cdn.sanity.io/images/s37229yn/production/21f0f7ab2777513b48be97e55f00052c3bee6b9d-6400x3104.png?w=1920&auto=format"
                    width={6400} // Native image width
                    height={3104} // Native image height
                    className="h-auto w-auto"
                    alt="Flowbite Logo"
                />
            </SwiperSlide>
            <SwiperSlide className="h-96">
                <Image
                    src="https://cdn.sanity.io/images/s37229yn/production/21f0f7ab2777513b48be97e55f00052c3bee6b9d-6400x3104.png?w=1920&auto=format"
                    width={6400} // Native image width
                    height={3104} // Native image height
                    className="h-auto w-auto"
                    alt="Flowbite Logo"
                />
            </SwiperSlide>
            <SwiperSlide className="h-96">
                <Image
                    src="https://cdn.sanity.io/images/s37229yn/production/21f0f7ab2777513b48be97e55f00052c3bee6b9d-6400x3104.png?w=1920&auto=format"
                    width={6400} // Native image width
                    height={3104} // Native image height
                    className="h-auto w-auto"
                    alt="Flowbite Logo"
                />
            </SwiperSlide>
        </Swiper>
    );
}

export default Banner;
