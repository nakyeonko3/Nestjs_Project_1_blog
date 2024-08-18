"use client";
import { useState } from "react";
import Navbar from "./navbar";
// import MoblieNavbar from "./mobileNavbar";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      {/* <MoblieNavbar isOpen={isOpen} toggle={toggle} /> */}
      <Navbar toggle={toggle} />
    </>
  );
};

export default Navigation;
