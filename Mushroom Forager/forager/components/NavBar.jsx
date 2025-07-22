import React from 'react';
import Link from 'next/link';
import { FaHome } from 'react-icons/fa';
import { TbMushroom } from "react-icons/tb";
import { IoCamera } from "react-icons/io5";

export default function NavBar() {
  return (
    <div className="flex justify-around items-center py-4 bg-[#579076] fixed bottom-0 left-0 right-0 z-50 rounded-t-3xl">
      {/* Mushroom Icon */}
      <Link href="/mushroom" passHref>
        <div className="flex flex-col items-center cursor-pointer">
          <TbMushroom className="text-white text-2xl" />
        </div>
      </Link>
      
      {/* Home Icon */}
      <Link href="/dashboard" passHref>
        <div className="flex flex-col items-center cursor-pointer">
          <FaHome className="text-[#C3E2B9] text-2xl" />
          {/* Indicator Line */}
          <div className="h-1 w-16 bg-white rounded-full mt-2"></div>
        </div>
      </Link>
      
      {/* Camera Icon */}
      <Link href="/photosearch" passHref>
        <div className="flex flex-col items-center cursor-pointer">
          <IoCamera className="text-white text-2xl" />
        </div>
      </Link>
    </div>
  );
}