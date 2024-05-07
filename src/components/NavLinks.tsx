import { NavLink } from "react-router-dom";

const NavLinks = ({ mode }: { mode: string }) => {
  const activeStyle = {
    fontWeight: "bold",
    textDecoration: "underline",
  };

  return (
    <>
      <NavLink
        to="/"
        className={`nav-link no-underline ${
          mode === "light" ? "text-[#DCDEEB]" : "text-black"
        }`}
        style={({ isActive }) => (isActive ? activeStyle : {})}
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        className={`nav-link no-underline ${
          mode === "light" ? "text-[#DCDEEB]" : "text-black"
        }`}
        style={({ isActive }) => (isActive ? activeStyle : {})}
      >
        About
      </NavLink>
      <NavLink
        to="/skills"
        className={`nav-link no-underline ${
          mode === "light" ? "text-[#DCDEEB]" : "text-black"
        }`}
        style={({ isActive }) => (isActive ? activeStyle : {})}
      >
        Skills
      </NavLink>
      <NavLink
        to="/projects"
        className={`nav-link no-underline ${
          mode === "light" ? "text-[#DCDEEB]" : "text-black"
        }`}
        style={({ isActive }) => (isActive ? activeStyle : {})}
      >
        Projects
      </NavLink>
      <NavLink
        to="/clients"
        className={`nav-link no-underline ${
          mode === "light" ? "text-[#DCDEEB]" : "text-black"
        }`}
        style={({ isActive }) => (isActive ? activeStyle : {})}
      >
        Clients
      </NavLink>
      <NavLink
        to="/reviews"
        className={`nav-link no-underline ${
          mode === "light" ? "text-[#DCDEEB]" : "text-black"
        }`}
        style={({ isActive }) => (isActive ? activeStyle : {})}
      >
        Reviews
      </NavLink>
    </>
  );
};

export default NavLinks;
