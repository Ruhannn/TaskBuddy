import { useState } from "react";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa"; // Import the close icon from react-icons

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const navLinks = (
    <li className="block p-1 font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
      <Link to="/" className="flex items-center">
        Home
      </Link>
    </li>
  );

  const mobileMenuItems = [
    { to: "#", label: "Pages" },
    { to: "#", label: "Account" },
    { to: "#", label: "Blocks" },
    { to: "#", label: "Docs" },
  ];

  return (
    <nav className="sticky top-0 z-10 block w-full max-w-full px-4 py-2 text-white bg-white border rounded-none shadow-md h-max border-white/80 bg-opacity-80 backdrop-blur-2xl backdrop-saturate-200 lg:px-8 lg:py-4">
      <div className="flex items-center justify-between text-blue-gray-900">
        <Link
          to="/"
          className="mr-4 block cursor-pointer py-1.5 font-sans text-base font-medium leading-relaxed text-inherit antialiased"
        >
          TaskBuddy
        </Link>
        <div className="flex items-center gap-4">
          <div className="hidden mr-4 lg:block">
            <ul className="flex flex-col gap-2 mt-2 mb-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
              {navLinks}
            </ul>
          </div>
          <div className="flex items-center gap-x-1">
            <Link
              to="/login"
              className="hidden px-4 py-2 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:inline-block"
            >
              <span>Log In</span>
            </Link>
          </div>
          <button
            onClick={toggleMobileMenu}
            className="relative ml-auto h-6 max-h-[40px] w-6 max-w-[40px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-inherit transition-all hover:bg-transparent focus:bg-transparent active:bg-transparent disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:hidden"
          >
            <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-50 ${
          isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        } transition-opacity`}
      >
        <div className="absolute top-0 left-0 w-full p-4">
          <button
            onClick={closeMobileMenu}
            className="text-white focus:outline-none"
          >
            <FaTimes /> {/* Close button with the FaTimes (cross) icon */}
          </button>
        </div>
        <div
          className={`transform transition-transform ease-in-out duration-300 ${
            isMobileMenuOpen ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <div className="flex flex-col items-center justify-center h-screen bg-white text-blue-gray-900">
            {mobileMenuItems.map((item, index) => (
              <Link
                key={index}
                to={item.to}
                className="text-blue-gray-900 hover:text-gray-300 py-2"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
