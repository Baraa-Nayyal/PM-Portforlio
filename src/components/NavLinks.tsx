import { NavLink } from "react-router-dom";

const NavLinks = ({
  mode,
  isMobileScreen,
}: {
  mode: "navbar" | "footer";
  isMobileScreen: boolean;
}) => {
  const activeStyle = {
    fontWeight: "bold",
    textDecoration: "underline",
  };

  return (
    <>
      <a
        className={`${mode === "footer" ? "text-[#DCDEEB]" : "text-black"}  ${
          isMobileScreen &&
          " border-solid border-b-2 pb-5 w-full text-center border-primary"
        }`}
        href="#"
      >
        Home
      </a>
      <a
        className={`${mode === "footer" ? "text-[#DCDEEB]" : "text-black"}  ${
          isMobileScreen &&
          " border-solid border-b-2 pb-5 w-full text-center border-primary"
        }`}
        href="#"
      >
        About
      </a>
      <a
        className={`${mode === "footer" ? "text-[#DCDEEB]" : "text-black"}  ${
          isMobileScreen &&
          " border-solid border-b-2 pb-5 w-full text-center border-primary"
        }`}
        href="#"
      >
        Skills
      </a>
      <a
        className={`${mode === "footer" ? "text-[#DCDEEB]" : "text-black"}  ${
          isMobileScreen &&
          " border-solid border-b-2 pb-5 w-full text-center border-primary"
        }`}
        href="#"
      >
        Projects
      </a>
      <a
        className={`${mode === "footer" ? "text-[#DCDEEB]" : "text-black"}  ${
          isMobileScreen &&
          " border-solid border-b-2 pb-5 w-full text-center border-primary"
        }`}
        href="#"
      >
        Clients
      </a>
      <a
        className={`${mode === "footer" ? "text-[#DCDEEB]" : "text-black"}  ${
          isMobileScreen &&
          " border-solid border-b-2 pb-5 w-full text-center border-primary"
        }`}
        href="#"
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
