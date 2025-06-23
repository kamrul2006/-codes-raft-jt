import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const Hero = () => {
    return (
        <section className="bg-gray-100 dark:bg-gray-900 py-20">
            <div className="max-w-7xl mx-auto px-6 flex flex-col-reverse md:flex-row items-center justify-between gap-10">

                {/* Text Content */}
                <div className="flex-1 text-center md:text-left">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight mb-4">
                        Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">HavenBank</span>
                    </h1>
                    <p className="text-gray-700 dark:text-gray-300 mb-6 text-lg">
                        A smarter, faster, and more secure way to manage your digital finances. Get started today!
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                        <Link
                            to="/get-started"
                            className="bg-purple-600 text-white px-6 py-3 rounded-full flex items-center gap-2 hover:bg-purple-700 transition"
                        >
                            Get Started <FaArrowRight />
                        </Link>
                        <Link
                            to="/about"
                            className="border border-purple-600 text-purple-600 px-6 py-3 rounded-full hover:bg-purple-600 hover:text-white transition"
                        >
                            Learn More
                        </Link>
                    </div>
                </div>

                {/* Hero Image */}
                <div className="flex-1">
                    <img
                        src="Ccard.png"
                        alt="Hero Illustration"
                        className="w-full max-w-md mx-auto animate-fade-in-up"
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;
