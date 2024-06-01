import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const NavLinks = ({
  mode,
  isMobileScreen,
}: {
  mode: "navbar" | "footer";
  isMobileScreen: boolean;
}) => {


  return (
    <>
      <a
        className={`${mode === "footer" ? "text-[#DCDEEB]" : "text-black"} ${
          isMobileScreen &&
          "border-primary border-solid border-t-0 border-r-0 border-l-0 border-b-2 pb-5 w-full text-center "
        } ${window.location.hash === "#" ? "font-bold underline" : ""}`}
        href="#"
      >
        Home
      </a>
      <a
        className={`${mode === "footer" ? "text-[#DCDEEB]" : "text-black"}  ${
          isMobileScreen &&
          "border-primary border-solid border-t-0 border-r-0 border-l-0 border-b-2 pb-5 w-full text-center "
        }${window.location.hash === "#about" ? "font-bold underline" : ""}`}
        href="#about"
      >
        About
      </a>
      <a
        className={`${mode === "footer" ? "text-[#DCDEEB]" : "text-black"}  ${
          isMobileScreen &&
          "border-primary border-solid border-t-0 border-r-0 border-l-0 border-b-2 pb-5 w-full text-center "
        } ${window.location.hash === "#skills" ? "font-bold underline" : ""}`}
        href="#skills"
      >
        Skills
      </a>
      <a
        className={`${mode === "footer" ? "text-[#DCDEEB]" : "text-black"}  ${
          isMobileScreen &&
          "border-primary border-solid border-t-0 border-r-0 border-l-0 border-b-2 pb-5 w-full text-center "
        }`}
        href="#projects"
      >
        Projects
      </a>
      <a
        className={`${mode === "footer" ? "text-[#DCDEEB]" : "text-black"}  ${
          isMobileScreen &&
          "border-primary border-solid border-t-0 border-r-0 border-l-0 border-b-2 pb-5 w-full text-center "
        } ${window.location.hash === "#clients" ? "font-bold underline" : ""}`}
        href="#clients"
      >
        Clients
      </a>
      <a
        className={`${mode === "footer" ? "text-[#DCDEEB]" : "text-black"}  ${
          isMobileScreen &&
          "border-primary border-solid border-t-0 border-r-0 border-l-0 border-b-2 pb-5 w-full text-center "
        } ${window.location.hash === "#reviews" ? "font-bold underline" : ""}`}
        href="#reviews"
      >
        Reviews
      </a>
      {/* <NavLink
        to="/"
        className={`nav-link  ${
          mode === "light" ? "text-[#DCDEEB]" : "text-black"
        }`}
        style={({ isActive }) => (isActive ? activeStyle : {})}
      >
        Home
      </NavLink>
      <NavLink
        to="#about"
        className={`nav-link  ${
          mode === "light" ? "text-[#DCDEEB]" : "text-black"
        }`}
        style={({ isActive }) => (isActive ? activeStyle : {})}
      >
        About
      </NavLink>
      <NavLink
        to="/skills"
        className={`nav-link  ${
          mode === "light" ? "text-[#DCDEEB]" : "text-black"
        }`}
        style={({ isActive }) => (isActive ? activeStyle : {})}
      >
        Skills
      </NavLink>
      <NavLink
        to="/projects"
        className={`nav-link  ${
          mode === "light" ? "text-[#DCDEEB]" : "text-black"
        }`}
        style={({ isActive }) => (isActive ? activeStyle : {})}
      >
        Projects
      </NavLink>
      <NavLink
        to="/clients"
        className={`nav-link  ${
          mode === "light" ? "text-[#DCDEEB]" : "text-black"
        }`}
        style={({ isActive }) => (isActive ? activeStyle : {})}
      >
        Clients
      </NavLink>
      <NavLink
        to="/reviews"
        className={`nav-link  ${
          mode === "light" ? "text-[#DCDEEB]" : "text-black"
        }`}
        style={({ isActive }) => (isActive ? activeStyle : {})}
      >
        Reviews
      </NavLink> */}
    </>
  );
};

export default NavLinks;
