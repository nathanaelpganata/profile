import React, { useEffect } from "react";
import NextImage from "next/image";
import "aos/dist/aos.css";
import AOS from "aos";

const HeroSection = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    return (
        <div className="h-screen items-center justify-center flex">
            <div className="relative flex flex-col items-center space-y-4">
                <NextImage
                    src="/images/profile-picture.jpg"
                    width="800"
                    height="1100"
                    alt="CC"
                    quality={100}
                    priority
                    data-aos="fade-up"
                    data-aos-delay="100"
                    className="rounded-full z-10 object-cover w-36 h-36 object-top"
                />
                <h1
                    className="text-4xl font-bold text-center leading-[48px] pt-4"
                    data-aos="fade-up"
                    data-aos-delay="100"
                >
                    Nathanael Putra
                    <br /> Ganata
                </h1>
                <h2 data-aos="fade-up" data-aos-delay="100">
                    Front-end Developer
                </h2>

                <div className="absolute -top-2 border-2 w-32 h-32 rounded-full animate-ping"></div>
                <div className="absolute -top-20 border-2 w-72 h-72 rounded-full opacity-50 animate-pulse"></div>
                <div className="absolute -top-16 border-2 w-96 h-96 rounded-full opacity-50 animate-ping"></div>
                <div className="absolute -top-28 border-4 w-[32rem] h-[32rem] rounded-full opacity-90 animate-pulse"></div>
                <div className="relative -top-48 w-[42rem]  rounded-full animate-spin">
                    <div className="relative inset-0 bg-green-800 w-4 h-4 rounded-full animate-ping"></div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
