import React from 'react';
import Image from "next/image";
import { BsInstagram } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
const Footer = () => {
     return (
<footer className="footer footer-center flex flex-col bg-[#27523F] text-[#D4CDC2] p-10 font-sans">
  <aside>

    <Image src="/assets/logo-xl.png" alt="Logo" width={412} height={61} />
    <p className=" text-center text-[16px] opacity-90 mt-4">
      Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
    </p>
  </aside>

  <nav>
    <h2 className="footer-title opacity-100 text-xl font-semibold mb-4 text-[#D4CDC2]">Social Links</h2>
    <div className="grid grid-flow-col gap-4">
      
      <a className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-black hover:bg-gray-200 transition-colors">
        <BsInstagram />
      </a>
  
      <a className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-black hover:bg-gray-200 transition-colors">
        <FaFacebook />
      </a>

      <a className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-black hover:bg-gray-200 transition-colors">
        <BsTwitterX />
      </a>
    </div>
  </nav>

  <div className="w-full max-w-6xl border-t border-[#3A6650] pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm opacity-80">
    <p>© 2026 KeenKeeper. All rights reserved.</p>
    <div className="flex gap-6">
      <a className="link link-hover">Privacy Policy</a>
      <a className="link link-hover">Terms of Service</a>
      <a className="link link-hover">Cookies</a>
    </div>
  </div>
</footer>
     );
};

export default Footer;