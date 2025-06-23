import { Link } from "react-router-dom";
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedin,
    FaHome,
    FaPhoneAlt,
    FaEnvelope,
    FaInfoCircle,
    FaAddressCard,
} from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-gradient-to-t from-gray-900 to-gray-800 text-gray-200 py-12 ">
            <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">

                {/* Brand */}
                <div>
                    <h1 className="text-3xl font-bold text-white mb-3">
                        <span className="text-lime-500">KI</span>Bank
                    </h1>
                    <p className="text-sm text-gray-400">
                        Empowering digital finance with trust and innovation.
                    </p>
                </div>

                {/* Links */}
                <div>
                    <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
                    <ul className="space-y-2 text-sm">
                        <li>
                            <Link to="/" className="flex items-center gap-2 hover:text-lime-400">
                                <FaHome /> Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/about" className="flex items-center gap-2 hover:text-lime-400">
                                <FaInfoCircle /> About
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact" className="flex items-center gap-2 hover:text-lime-400">
                                <FaPhoneAlt /> Contact
                            </Link>
                        </li>
                        <li>
                            <Link to="/get-card" className="flex items-center gap-2 hover:text-lime-400">
                                <FaAddressCard /> Get Card
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h3 className="text-xl font-semibold mb-4">Contact</h3>
                    <p className="text-sm flex items-center gap-2 mb-2">
                        <FaEnvelope /> support@havenbank.com
                    </p>
                    <p className="text-sm flex items-center gap-2">
                        <FaPhoneAlt /> +880 1234 567890
                    </p>
                </div>

                {/* Socials */}
                <div>
                    <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
                    <div className="flex gap-4">
                        <a
                            href="#"
                            className="bg-lime-600 hover:bg-lime-700 p-2 rounded-full transition"
                            aria-label="Facebook"
                        >
                            <FaFacebookF />
                        </a>
                        <a
                            href="#"
                            className="bg-lime-600 hover:bg-lime-700 p-2 rounded-full transition"
                            aria-label="Twitter"
                        >
                            <FaTwitter />
                        </a>
                        <a
                            href="#"
                            className="bg-lime-600 hover:bg-lime-700 p-2 rounded-full transition"
                            aria-label="Instagram"
                        >
                            <FaInstagram />
                        </a>
                        <a
                            href="#"
                            className="bg-lime-600 hover:bg-lime-700 p-2 rounded-full transition"
                            aria-label="LinkedIn"
                        >
                            <FaLinkedin />
                        </a>
                    </div>
                </div>
            </div>

            {/* Bottom Copyright */}
            <div className="text-center text-sm text-gray-400 mt-12 border-t border-gray-700 pt-6">
                &copy; {new Date().getFullYear()} Kamrul Islam Apurba. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
