import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Contact", path: "/contact" },
    ];

    return (
        <nav className="bg-white/70 backdrop-blur-md shadow-md sticky top-0 z-50 transition-all duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <Link
                        to="/"
                        className="text-3xl font-extrabold tracking-tight bg-gradient-to-r from-purple-500 via-blue-500 to-indigo-500 text-transparent bg-clip-text"
                    >
                        HavenBank
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.path}
                                to={link.path}
                                className={({ isActive }) =>
                                    `relative font-medium text-base transition duration-300 ${isActive ? "text-purple-600" : "text-gray-700 hover:text-purple-600"
                                    } after:block after:h-[2px] after:bg-purple-500 after:scale-x-0 after:hover:scale-x-100 after:origin-left after:transition-transform`
                                }
                            >
                                {link.name}
                            </NavLink>
                        ))}

                        {/* Get Card Button */}
                        <Link
                            to="/get-card"
                            className="ml-4 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-full shadow-md transition duration-300"
                        >
                            Get Card
                        </Link>
                    </div>

                    {/* Mobile Toggle Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-800 hover:text-purple-600 transition"
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
                                    `text-lg font-semibold transition ${isActive ? "text-purple-600 underline" : "text-gray-700 hover:text-purple-600"
                                    }`
                                }
                            >
                                {link.name}
                            </NavLink>
                        ))}
                        <Link
                            to="/get-card"
                            onClick={() => setIsOpen(false)}
                            className="bg-purple-600 text-white px-6 py-2 rounded-full shadow-md hover:bg-purple-700 transition"
                        >
                            Get Card
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
