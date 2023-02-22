import React, { useEffect } from "react";
import 'aos/dist/aos.css';
import AOS from "aos";
import { motion } from "framer-motion";
import NextImage from "next/image";
import { projectsData } from "@/constant/projectsData";
import ProjectCards from "./cards/project-cards.page";

const ProjectsSection = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    return (
        <div className="flex relative justify-center items-center h-screen w-full">
            <div className="flex flex-col justify-center items-center">
                <h1 className="text-2xl tracking-[1rem] font-semibold absolute top-24">
                    PROJECTS
                </h1>
                <div className="w-[18rem] md:w-[40rem] lg:w-[55rem] xl:w-[75rem] mt-24 md:mt-10 xl:mt-36">
                    <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-yellow-400 scrollbar-thumb-yellow-600">
                        {projectsData.map((project) => (
                            <ProjectCards
                                key={project.id}
                                {...project}

                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectsSection;
