import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Contact", path: "/contact" },
        { name: "Projects", path: "/projects" },
    ];



    return (
        <nav className="backdrop-blur-md shadow-md sticky top-0 z-50 transition-all duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">

                    {/* Logo */}
                    <Link
                        to="/"
                        className="text-3xl font-extrabold tracking-tight bg-gradient-to-r from-lime-500 via-blue-500 to-green-500 text-transparent bg-clip-text"
                    >
                        KI Apurba
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.path}
                                to={link.path}
                                className={({ isActive }) =>
                                    `relative font-medium text-base transition duration-300 ${isActive ? "text-lime-600 border-b-2 transition" : "text-gray-400 hover:text-lime-600"
                                    } after:block after:h-[2px] after:bg-lime-500 after:scale-x-0 after:hover:scale-x-100 after:origin-left after:transition-transform`
                                }
                            >
                                {link.name}
                            </NavLink>
                        ))}


                    </div>

                    <div>
                        {/* dcv  Button */}
                        <a
                            href="/RESUME OF KAMRUL ISLAM .pdf"
                            download
                            className="ml-4 bg-gradient-to-r from-lime-700 to-lime-400  hover:to-lime-700 hover:from-lime-400   text-white px-4 py-2 rounded shadow-md transition duration-300 hover:drop-shadow-2xl font-semibold"
                        >
                            Download CV
                        </a>
                    </div>

                    {/* Mobile Toggle Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-400 hover:text-lime-600 transition"
                        >
                            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white/95 backdrop-blur-lg shadow-md rounded-b-xl">
                    <div className="flex flex-col items-center space-y-4 py-6 transition-all">
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.path}
                                to={link.path}
                                onClick={() => setIsOpen(false)}
                                className={({ isActive }) =>
                                    `text-lg font-semibold transition ${isActive ? "text-lime-600 underline" : "text-gray-700 hover:text-lime-600"
                                    }`
                                }
                            >
                                {link.name}
                            </NavLink>
                        ))}
                        <Link
                            to="/get-card"
                            onClick={() => setIsOpen(false)}
                            className="bg-gradient-to-r from-lime-600 to-lime-400 text-white px-6 py-2 rounded-full shadow-md hover:bg-lime-700 transition"
                        >
                            Download CV
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
