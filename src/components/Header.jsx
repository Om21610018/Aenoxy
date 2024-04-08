import React, { useState } from "react";
import dropicon from "../assets/dropdown.svg";
import { motion, AnimatePresence } from "framer-motion";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white relative shadow-sm shadow-gray-300">
      <div className="max-w-7xl mx-auto px-4 relative sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          <div className="p-1 border-2 border-blue-500 rounded-full">
            <div className="flex items-center">
              <span className="text-white w-10 h-10 rounded-full flex justify-center items-center border-2 border-spacing-5 font-bold text-xl bg-blue-500">
                C
              </span>
            </div>
          </div>
          <nav className={`lg:flex hidden`}>
            <ul className="flex flex-col lg:flex-row space-x-0 lg:space-x-4">
              <li className="cursor-pointer py-2 lg:py-0">Home</li>
              <li className="cursor-pointer py-2 lg:py-0">Availability</li>
              <li className="cursor-pointer py-2 lg:py-0">Integrations</li>
              <li className="flex gap-x-1 justify-start items-start cursor-pointer py-2 lg:py-0">
                <p>Help</p>
                <img width={30} src={dropicon} alt="" />
              </li>
              <li className="flex gap-x-1 justify-start cursor-pointer py-2 lg:py-0">
                <div className="border border-black rounded-full w-8 text-center bg-gray-600 text-white h-8">
                  J
                </div>
                <p>Account</p>
                <img width={30} src={dropicon} alt="" />
              </li>
            </ul>
          </nav>
          <div className="lg:hidden flex" onClick={toggleMenu}>
            {isMenuOpen ? (
              <div className=" text-2xl texce font-bold">X</div>
            ) : (
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/800px-Hamburger_icon.svg.png"
                alt="menu"
                width={30}
                className="cursor-pointer"
              />
            )}
          </div>
        </div>
      </div>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="bg-white shadow-lg rounded-lg z-50 p-4">
              <nav>
                <ul className="flex flex-col py-1 px-3 justify-start items-center font-semibold text-lg space-y-2">
                  <li className="cursor-pointer py-2">Home</li>
                  <li className="cursor-pointer py-2">Availability</li>
                  <li className="cursor-pointer py-2">Integrations</li>
                  <li className="flex gap-x-1 justify-start items-start cursor-pointer py-2">
                    <p>Help</p>
                    <img width={30} src={dropicon} alt="" />
                  </li>
                  <li className="flex gap-x-1 justify-start cursor-pointer py-2">
                    <div className="border border-black rounded-full w-8 text-center bg-gray-600 text-white h-8">
                      J
                    </div>
                    <p>Account</p>
                    <img width={30} src={dropicon} alt="" />
                  </li>
                </ul>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Header;
