import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import NavLinks from "./NavLinks";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <>
      <header className="bg-transparent relative flex-wrap top-0 z-20 mx-auto w-full p-6">
        <div className="hidden md:flex items-center justify-center gap-24 mx-32">
          <NavLinks mode="dark" />
        </div>
        <div className="md:hidden ">
          <button onClick={toggleNav}>{isOpen ? <X /> : <Menu />}</button>
        </div>
        {isOpen && (
          <div className="flex basis-full gap-3  flex-col items-center absolute left-[50%] translate-x-[-50%] p-10 backdrop-blur w-full">
            <NavLinks mode="dark" />
          </div>
        )}
      </header>
    </>
  );
}

export default Navbar;
