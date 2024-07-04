"use client";
import Image from 'next/image.js';
import Link from 'next/link.js';
import { useState } from 'react';
import NavLink from './NavLink.jsx';
import { motion } from 'framer-motion'

const links = [
    { url: "/", name: "Home" },
    { url: "/about", name: "About" },
    { url: "/portfolio", name: "Portfolio" },
    { url: "/contact", name: "Contact" },
];

const Navbar = () => {
    const [open, setOpen] = useState(false);

    const topVariants = {
        closed: {
            rotate: 0,
        },
        opened: {
            rotate: 45,
            backgroundColor: 'rgb(255, 255, 255)',
        }

    }
    const centerVariants = {
        closed: {
            opacity: 1,
        },
        opened: {
            opacity: 0,
        }

    }
    const bottomVariants = {
        closed: {
            rotate: 0,
        },
        opened: {
            rotate: -45,
            backgroundColor: 'rgb(255, 255, 255)',
        }

    }

    const listVariants = {
        closed: {
            x: "100vw",
        },
        opened: {
            x: 0,
            transition: {
                when: "beforeChildren",
                staggerChildren: 0.2,
            },
        },
    };

    const listItemVariants = {
        closed: {
            x: -10,
            opacity: 0,
        },
        opened: {
            x: 0,
            opacity: 1,
        },
    };

    return (
        <div className='h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-16 xl:px-40 text-xl'>
            {/* Links */}
            <div className='hidden md:flex gap-4 w-1/3'>
                {links.map((link) => (
                    <NavLink key={link.url} link={link} />
                ))}
            </div>
            {/* Logo */}
            <div className='md:hidden lg:flex xl:w-1/3 xl:justify-center'>
                <Link href='/' className='text-sm bg-black text-white rounded-md p-1 font-semibold flex items-center justify-center'>
                    <span className='text-white mr-1'>Nazmul</span>
                    <span className='w-14 h-8 rounded bg-white text-black flex items-center justify-center'>Hossain</span>
                </Link>
            </div>
            {/* Social */}
            <div className='hidden md:flex gap-4 w-1/3'>
                <Link href='https://github.com/armstain'>
                    <Image src="/github.png" alt='GitHub' width={24} height={24} />
                </Link>
                <Link href='https://linkedin.com/armstain'>
                    <Image src="/linkedin.png" alt='LinkedIn' width={24} height={24} />
                </Link>
                <Link href='https://x.com/armstain'>
                    <Image src="" alt='X' width={24} height={24} />
                </Link>
                <Link href='https://facebook.com/armstain'>
                    <Image src="/facebook.png" alt='Facebook' width={24} height={24} />
                </Link>
            </div>

            {/* Responsive */}
            <div className='md:hidden'>
                {/* Menu Button */}
                <button className='w-10 h-8 flex flex-col justify-between z-50 relative' onClick={() => setOpen(!open)}>
                    <motion.div variants={topVariants} animate={open ? 'opened' : 'closed'} className='w-10 h-1 bg-black rounded origin-left'></motion.div>
                    <motion.div variants={centerVariants} animate={open ? 'opened' : 'closed'} className='w-10 h-1 bg-black rounded'></motion.div>
                    <motion.div variants={bottomVariants} animate={open ? 'opened' : 'closed'} className='w-10 h-1 bg-black rounded origin-left'></motion.div>
                </button>

                {/* Menu List */}
                {open && (
                    <motion.div
                        variants={listVariants}
                        initial="closed"
                        animate="opened"
                        className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl z-40"
                    >
                        {links.map((link) => (
                            <motion.div
                                variants={listItemVariants}
                                className=""
                                key={link.name}
                            >
                                <Link href={link.url}>{link.name}</Link>
                            </motion.div>
                        ))}
                    </motion.div>
                )}
            </div>
        </div>
    );
};

export default Navbar;