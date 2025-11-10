import React from "react";
import SvgMjcLogo from "../logos/MjcLogo";

const linkItems = ["Home", "Modules", "About Us", "Sponsors"];

const Header = () => {
  return (
    <div className="flex items-center justify-between px-4 py-3">
      <SvgMjcLogo className="size-15" />

      {/* Desktop Nav */}
      <ul className="hidden gap-6 text-sm md:flex">
        {linkItems.map((item, idx) => (
          <li key={idx}>
            <a className="cursor-pointer hover:underline">{item}</a>
          </li>
        ))}
      </ul>

      {/* Desktop Auth Button */}
      <div className="hidden cursor-pointer text-sm md:block">Sign Up</div>

      {/* Mobile Burger Menu */}
      <button className="md:hidden flex flex-col gap-1.5 p-2">
        <span className="block h-0.5 w-6 rounded bg-black"></span>
        <span className="block h-0.5 w-6 rounded bg-black"></span>
        <span className="block h-0.5 w-6 rounded bg-black"></span>
      </button>
    </div>
  );
};

export default Header;
