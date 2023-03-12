import React, { useState } from 'react';
import logo from '../assets/Company Logo (1).png';
import open from '../assets/window open.svg';
import close from '../assets/close.svg';
import { navLinks } from '../constants';

function Navbar() {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className=" flex  items-center py-4 justify-between  w-full">
      <img src={logo} alt="logo" className=" flex justify-start" />
      <ul className="flex-1 ml-[100px] lg:flex hidden ">
        {navLinks.map((link) => (
          <li className=" text-white font-semibold text-[15px] mr-4">
            {link.title}
          </li>
        ))}
      </ul>

      <div className=" flex-row text-white font-semibold lg:flex hidden">
        <button className=" text-[15px] mr-3">Login</button>
        <button className=" text-[15px] bg-primary3 px-6 py-4 rounded-lg">
          Sine Up
        </button>
      </div>
      <div className="lg:hidden flex justify-end items-center">
        <img
          src={toggle ? close : open}
          alt="close"
          onClick={() => setToggle((prev) => !prev)}
        />
      </div>
      <div
        className={`${
          toggle ? 'flex' : 'hidden'
        } absolute right-0 top-20  mx-4 my-2 min-w-[140px] rounded-xl  `}
      >
        <ul className="flex-1  flex  flex-col justify-end items-center  bg-white ">
          {navLinks.map((link) => (
            <li className=" text-white font-semibold text-[15px] mr-4 mb-6 mt-3">
              {link.title}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
