import React, { useState } from "react";
import { HiMenu } from "react-icons/hi";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handlenav = () => {
    setNav(!nav);
    if (!nav) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }
  };

  return (
    <div className="w-full absolute flex justify-between items-center">
      <h1 className="text-white z-20 text-xl p-4">Experiences</h1>
      <HiMenu
        onClick={handlenav}
        className="text-white cursor-pointer z-20 mr-4"
        size={25}
      />
      <div
        className={
          nav
            ? "fixed top-0 left-0 w-full h-screen text-white z-10 py-8 bg-black/80"
            : "absolute top-0 h-screen left-[-100%] ease-in-out duration-300 z-10"
        }
      >
        <ul className="flex items-center justify-center flex-col h-screen ">
          <li className="font-bold text-3xl p-8">Home</li>
          <li className="font-bold text-3xl p-8">Destinations</li>
          <li className="font-bold text-3xl p-8">Reservations</li>
          <li className="font-bold text-3xl p-8">Aminities</li>
          <li className="font-bold text-3xl p-8">Rooms</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
