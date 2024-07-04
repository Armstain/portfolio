"use client";
import Link from "next/link.js";
import { usePathname } from "next/navigation.js";

const NavLink = ({ link }) => {

    const pathName = usePathname();


    console.log(pathName);
    return (
        <Link className={`rounded p-1 ${pathName === link.url && "bg-black text-white"}`} href={link.url} >
            {link.name}
        </Link >
    );
};

export default NavLink;