import React from "react";

const Navbar = () => {
  return (
    <nav className="h-[60px]  flex items-center justify-center px-4 m-4 bg-white border border-gray-200 rounded-lg  gap-2 text-black">
      <img src="logo.svg" alt="" />
      <h1 className="ml-2 text-xl font-bold">Firebase Contact App</h1>
    </nav>
  );
};

export default Navbar;
