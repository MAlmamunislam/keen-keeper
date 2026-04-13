'use client';
import React from "react";
import Image from "next/image";
import { IoHomeOutline , } from "react-icons/io5";
import { RiTimeLine } from "react-icons/ri";
import { ImStatsDots } from "react-icons/im";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
     const pathname = usePathname();
     console.log(pathname);
  return (
    <div>
      <div className="navbar bg-base-100 px-4 shadow-sm">
        <div className="flex-1">
          <a  className="btn btn-ghost text-xl">
               <Image src="/assets/logo.png" alt="Logo" width={140} height={31} />
          </a>
        </div>
        <div className="">
          <ul className="flex items-center pr-4 gap-2 md:gap-8">
            <li >
              <Link  href="/home" className={`flex items-center gap-1 ${pathname === "/home" ? "bg-[#244D3F] text-white p-1 rounded-md md:p-2"  : ""}`} ><IoHomeOutline /> Home</Link>
            </li>
            <li>
                 <Link href="/timeline" className={`flex items-center gap-1 ${pathname === "/timeline" ? "bg-[#244D3F] text-white p-1 rounded-md md:p-2" : ""}`} ><RiTimeLine /> TimeLine</Link>
                
            </li>
            <li>
              <Link href="/stats" className={`flex items-center gap-1 ${pathname === "/stats" ? "bg-[#244D3F] text-white p-1 rounded-md md:p-2" : ""}`} ><ImStatsDots /> Stats</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
