import React from "react";
import Link from "next/link";
import Logo from "./Logo";
import { FiMenu } from "react-icons/fi";
import navbarItems from "./navbarItems";

const navbar = ({ toggle }: { toggle: () => void }) => {
  return (
    <>
      <div className="w-full h-20 bg-zinc-600 sticky top-0">
        <div className="container mx-auto px-4 h-full">
          <div className="flex justify-between items-center h-full">
            <Logo />
            {/* <ul className="hidden md:flex gap-x-6 text-white"> */}
            <ul className="flex gap-x-6 text-white">
              {navbarItems.map((item) => (
                <li key={item.link}>
                  <Link href={item.link}>{item.element}</Link>
                </li>
              ))}
            </ul>
            {/* <button
              type="button"
              className="inline-flex items-center md:hidden"
              onClick={toggle}
            >
              <FiMenu className="text-white" size={30} />
            </button> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default navbar;
