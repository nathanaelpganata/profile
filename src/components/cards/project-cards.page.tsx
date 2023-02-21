import React, { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import NextImage from "next/image";
import Link from "next/link";

type StacksProps = {
    id: number;
    name: string;
};

type ProjectsProps = {
    id: number;
    title: string;
    desc: string;
    url: string;
    img: string;
    date: string;
    stacks: StacksProps[];
};

const ProjectCards = ({
    id,
    title,
    desc,
    url,
    img,
    date,
    stacks,
}: ProjectsProps) => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    return (
        <div className="flex flex-col flex-shrink-0 snap-start mx-4 h-[30rem] md:h-[35rem] w-[17rem] md:w-[25rem] mb-6">
            <div className="h-1/3 bg-white rounded-t-lg overflow-hidden">
                <NextImage
                    src="/images/profile-picture.jpg"
                    width="192"
                    height="60"
                    alt="CC"
                    quality={100}
                    priority
                    className="h-full w-full object-cover"
                />
            </div>
            <div className="h-2/3 bg-slate-700 rounded-b-lg flex flex-col px-3 py-2">
                <div className="flex justify-between items-center">
                    <h1 className="text-2xl">{title}</h1>
                    <p className="text-base">{date}</p>
                </div>
                <div className="flex gap-2 mt-2">
                    {stacks.map((stack) => (
                        <div
                            key={stack.id}
                            className="px-1.5 py-0.5 bg-slate-400 rounded-2xl"
                        >
                            {stack.name}
                        </div>
                    ))}
                </div>
                <div className="mt-4">
                    <p>{desc}</p>
                    <Link href={url} className="underline hover:text-blue-400">
                        Check Here
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ProjectCards;
