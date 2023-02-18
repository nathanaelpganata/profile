import React from "react";
import { motion } from "framer-motion";
import NextImage from "next/image";

const HeroSection = () => {
    return (
        <motion.div
            className="h-screen items-center justify-center flex"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 1 }}
            transition={{ duration: 0.5 }}
        >
            <div className="relative flex flex-col items-center space-y-4">
                <NextImage
                    src="/images/profile-picture.jpg"
                    width="800"
                    height="1100"
                    alt="CC"
                    quality={100}
                    priority
                    className="rounded-full z-10 object-cover w-36 h-36 object-top"
                />
                <h1 className="text-4xl font-bold text-center leading-[48px] pt-4">
                    Nathanael Putra
                    <br /> Ganata
                </h1>
                <motion.h2
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 1 }}
                    transition={{ duration: 0.5 }}
                    className="font-semibold text-xl"
                >
                    Front-end Developer
                </motion.h2>

                <div className="absolute -top-2 border-2 w-32 h-32 rounded-full animate-ping"></div>
                <div className="absolute -top-20 border-2 w-72 h-72 rounded-full opacity-50 animate-pulse"></div>
                <div className="absolute -top-16 border-2 w-96 h-96 rounded-full opacity-50 animate-ping"></div>
                <div className="absolute -top-28 border-4 w-[32rem] h-[32rem] rounded-full opacity-90 animate-pulse"></div>
                <div className="relative -top-48 w-[42rem]  rounded-full animate-spin">
                    <div className="relative inset-0 bg-green-800 w-4 h-4 rounded-full animate-ping"></div>
                </div>
            </div>
        </motion.div>
    );
};

export default HeroSection;
