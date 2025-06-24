import React from 'react'
import { Fade, Slide, Zoom } from "react-awesome-reveal";
import { FaUserAlt, FaTools, FaCode } from "react-icons/fa";
import about from "/about.webp";
import { Link } from 'react-router';

export const AboutPage = () => {
    return (
        <section
            id="about"
            className="bg-gradient-to-b from-lime-950 to-black text-white pt-20 px-6 md:px-14  flex flex-col md:flex-row items-center justify-between pb-3"
        >
            {/* Image Section */}
            <Fade duration={1000}   >
                <div className="md:w-1/2 mb-10 md:mb-0 lg:w-full flex justify-center">
                    <img
                        src={about}
                        alt="About Me"
                        className="w-10/12  md:w-[450px] h-auto object-cover rounded-xl hover:shadow-lime-500/50 transition duration-500 ease-in-out border-b-4 border-lime-500"
                    />
                </div>
            </Fade>

            {/* Text Section */}
            <div className="md:w-1/2 max-w-2xl">
                <Slide direction="right"   >
                    <h2
                        className="lg:text-4xl text-3xl font-bold text-lime-200 mb-4 text-center lg:text-left border-b-2 pb-2">
                        Here is my information,
                        <br />
                        <span className="lg:text-6xl text-5xl text-lime-500">About Me</span>
                    </h2>
                </Slide>

                <Fade duration={1500}   >
                    <p className="text-lg leading-relaxed mb-6 text-gray-300">
                        Hello! I'm <span className="font-semibold text-lime-400">Kamrul Islam Apurba</span>,
                        a web developer with a passion for building modern, sleek user interfaces. I love using{" "}
                        <span className="italic underline text-white">
                            React, Tailwind CSS, Vite.js, Next.js, Node.js, and Express
                        </span>{" "}
                        to bring elegant solutions to real-world problems.
                    </p>
                </Fade>

                <Fade duration={1500}   >
                    <p className="text-lg leading-relaxed mb-6 text-gray-300">
                        My journey began with a spark of curiosity that quickly turned into a deep love for clean code and pixel-perfect design.
                        I'm always exploring new tools and pushing boundaries in performance and accessibility.
                    </p>
                </Fade>

                <Zoom   >
                    <h3 className="text-2xl font-semibold text-lime-400 mb-4 flex items-center gap-2">
                        <FaTools /> My Skills
                    </h3>
                </Zoom>

                <Fade duration={1500}   >
                    <ul className="list-disc pl-6 text-gray-200 space-y-2 mb-6">
                        <li>React, Tailwind CSS, JavaScript (ES6+), Vite, Next.js </li>
                        <li>Responsive UI design and component-based architecture</li>
                        <li>REST APIs, Node.js, Express.js, and MongoDB basics</li>
                        <li>Version control with Git, GitHub & collaborative workflow</li>
                    </ul>
                </Fade>

                <Fade duration={1500}   >
                    <p className="text-lg leading-relaxed mb-8 text-gray-300">
                        Outside of code, I explore design trends, tech news, and open-source projects.
                        I'm always open to exciting collaborations and opportunities.
                        Let's create something impactful together!
                    </p>
                </Fade>

                <div className='flex items-center gap-2'>
                    <Zoom   >
                        <Link
                            to="/contact"
                            className="ml-4 bg-gradient-to-r from-lime-700 to-lime-400  hover:to-lime-700 hover:from-lime-400   text-black px-4 py-2 rounded shadow-md transition duration-300 hover:drop-shadow-2xl flex items-center w-fit gap-2 font-semibold"
                        >
                            <FaCode /> Get In Touch
                        </Link>
                    </Zoom>

                    <Zoom   >
                        <Link
                            to="/services"
                            className="ml-4 bg-gradient-to-r from-lime-700 to-lime-400  hover:to-lime-700 hover:from-lime-400   text-black px-4 py-2 rounded shadow-md transition duration-300 hover:drop-shadow-2xl flex items-center w-fit gap-2 font-semibold"
                        >
                            My Services
                        </Link>
                    </Zoom>
                </div>
            </div>
        </section>
    )
}
