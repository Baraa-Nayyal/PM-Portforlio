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
      <nav className="bg-tdransparent relative  mb-10 top-0 z-20  w-full p-6">
        <div className="hidden sm:flex container max-w-[600px] mx-auto px-4 gap-4 justify-between">
          <NavLinks mode="navbar" isMobileScreen={isOpen} />
        </div>
        <div className="sm:hidden relative z-20 ">
          <button
            className="rounded-fullp-2 rounded-full text-sm bg-primary w-10 h-10 text-white"
            onClick={toggleNav}
          >
            {isOpen ? (
              <X className="mt-[4px]" />
            ) : (
              <Menu className="mt-[4px]" />
            )}
          </button>
        </div>

        <div
          className={`flex basis-full z-10 gap-y-6 flex-col items-center justify-center backdrop-blur-xl w-screen h-screen fixed transition-all ease-in-out duration-300  top-0 ${
            isOpen ? "left-0" : "left-[-120%]"
          }`}
        >
          <NavLinks mode="navbar" isMobileScreen={isOpen} />
        </div>
      </nav>
    </>
  );
}

export default Navbar;
