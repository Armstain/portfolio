"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image.js";
import Link from "next/link";
import { useRef } from "react";
const terms = [
    "Web Development",
    "React",
    "Next.js",
    "Node.js",
    "Express",
    "MongoDB",
    "Tailwind CSS",
    "JavaScript",
    "HTML5",
    "CSS3",
    "Responsive Design",
    "API Integration",
    "UI/UX Design",
    "GraphQL",
    "TypeScript",
];


const items = [

    {
        id: 1,
        color: "from-red-300 to-blue-300",
        title: "UrbanDrive",
        desc: "UrbanDrive is an advanced car rental platform providing a seamless experience for users to browse, book, and manage rental cars. The project features a responsive, interactive frontend, secure backend, and various functionalities designed for ease of use across devices. This repository showcases both frontend and backend code to deliver a comprehensive car rental solution.. ",
        img: "https://i.ibb.co.com/Rgbrj3v/Screenshot-2024-11-12-at-18-37-02-Urban-Drive.png"
        ,
        link: "https://cheery-bubblegum-eecb30.netlify.app/",
    },
    {
        id: 2,
        color: "from-blue-300 to-violet-300",
        title: "React Parcel Delivery",
        desc: "ExpressLane is a modern parcel delivery service web application, designed to provide seamless and efficient delivery management. Built with a robust tech stack, ExpressLane offers real-time parcel tracking, user authentication, and a comprehensive admin dashboard. ",
        img: "https://i.ibb.co/s9PFVwn/Screenshot-2024-07-04-at-17-22-45-Express-Lane.png"
        ,
        link: "https://expreane-c2384.web.app/",
    },
    {
        id: 3,
        color: "from-violet-300 to-yellow-300",
        title: "Room Rent Service",
        desc: "Roomify is a user-friendly platform designed for renting rooms with ease. This project leverages modern web technologies to connect room seekers and landlords efficiently. ",
        img: "https://i.ibb.co/Dzkzxb4/Screenshot-2024-07-04-at-17-23-33-Roomify.png"
        ,
        link: "https://roomify-3c4bc.web.app/",
    },
    
    {
        id: 4,
        color: "from-yellow-300 to-green-300",
        title: "Stay Vista",
        desc: "uilt with React.js, our website ensures a responsive and intuitive experience across all devices. Tailwind CSS powers our elegant and modern design with firebase authentication.",
        img: 'https://i.ibb.co/m0237JX/Screenshot-2024-07-04-at-17-25-44-Details.png'
        ,
        link: "https://real-estate-auth-aa66d.web.app/",
    },

];

const PortfolioPage = () => {

    const ref = useRef();

    const { scrollYProgress } = useScroll({ target: ref });
    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

    return (
        <motion.div
            className="h-full"
            initial={{ y: "-200vh" }}
            animate={{ y: "0%" }}
            transition={{ duration: 1 }}
        >
            <div className="h-[500vh] relative" ref={ref}>
                <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-8xl text-center">
                    My Works
                </div>
                <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
                    <motion.div style={{ x }} className="flex">
                        <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300" />
                        {items.map((item) => (
                            <div
                                className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`}
                                key={item.id}
                            >
                                <div className="flex flex-col gap-8 text-white h-screen ">
                                    <h1 className="text-xl font-bold md:text-2xl lg:text-4xl xl:text-6xl">
                                        {item.title}
                                    </h1>
                                    <div className="relative w-80 h-56 md:w-96 md:h-64 lg:w-[500px] lg:h-[350px] xl:w-[600px] xl:h-[420px]">
                                        <Image className="object-cover object-top rounded-3xl" src={item.img} alt="" fill />
                                    </div>
                                    <p className="w-80 md:w96 lg:w-[500px] lg:text-lg xl:w-[600px]">
                                        {item.desc}
                                    </p>
                                    <Link href={item.link} className="flex ">
                                        <button className="p-2 text-sm md:p-4 md:text-md lg:p-4 lg:text-lg bg-white text-gray-600 font-semibold mb-10 rounded">See Demo</button>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
            <div className="w-screen h-screen flex flex-col gap-16 items-center justify-center text-center relative">
                <h1 className="text-8xl">Do you have a project?</h1>
                <div className="absolute inset-0 overflow-hidden">
                    <motion.div
                        animate={{ x: ["100%", "-150%"] }}
                        transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
                        className="absolute inset-0 font-semibold "
                    >
                        {terms.map((term, index) => (
                            <motion.span
                                key={index}
                                className="absolute"
                                style={{
                                    left: `${Math.random() * 100}%`,
                                    top: `${Math.random() * 100}%`,
                                    opacity: 0.2,
                                    fontSize: `${Math.random() * 3 + 1}rem`,
                                    zIndex: -1,
                                }}
                            >
                                {term}
                            </motion.span>
                        ))}
                    </motion.div>
                </div>
                <div className="relative">
                    <Link href="/contact" className="p-2 text-sm md:p-4 md:text-md lg:p-4 lg:text-lg bg-black text-white font-semibold rounded">

                        Lets Connect

                    </Link>
                </div>
            </div>
        </motion.div>
    );
};

export default PortfolioPage;