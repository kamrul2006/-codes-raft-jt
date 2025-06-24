import Marquee from "react-fast-marquee";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import { IoLogoFirebase, IoLogoWebComponent } from "react-icons/io5";
import { SiMongodb, SiTailwindcss, SiReactrouter, SiDaisyui, SiJsonwebtokens, SiNextdotjs, SiExpress, SiVite } from "react-icons/si";
import { Link } from "react-router";

const skills = [
    { name: "HTML", icon: <FaHtml5 className="text-orange-500 text-5xl" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-500 text-5xl" /> },
    { name: "JavaScript", icon: <FaJs className="text-yellow-500 text-5xl" /> },
    { name: "React", icon: <FaReact className="text-blue-900 text-5xl" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-black dark:text-white text-5xl" /> },
];
const skill1 = [
    { name: "Node.js", icon: <FaNodeJs className="text-green-500 text-5xl" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-600 text-5xl" /> },
    { name: "TailwindCSS", icon: <SiTailwindcss className="text-blue-700 text-5xl" /> },
    { name: "React Router", icon: <SiReactrouter className="text-red-500 text-5xl" /> },
    { name: "DaisyUI", icon: <SiDaisyui className="text-yellow-400 text-5xl" /> },
];
const skill2 = [
    { name: "JWT", icon: <SiJsonwebtokens className="text-red-600 text-5xl" /> },
    { name: "Express", icon: <SiExpress className="text-gray-700 text-5xl" /> },
    { name: "Vite", icon: <SiVite className="text-purple-500 text-5xl" /> },
    { name: "Flowbite", icon: <IoLogoWebComponent className="text-blue-500 text-5xl" /> },
    { name: "Firebase", icon: <IoLogoFirebase className="text-orange-500 text-5xl" /> },
];

export default function SkillsSection() {
    return (
        <div className="py-16 bg-gradient-to-b to-lime-950 from-black text-black text-center grid grid-cols-1 lg:grid-cols-2 gap-4">

            <div>
                <h2
                    className="lg:text-4xl text-3xl font-bold text-lime-200 mb-4 text-center lg:text-left lg:pl-10">
                    Here is my Skills.
                    <br />
                    <span className="lg:text-6xl text-5xl text-lime-500">Why to hire me?</span>
                </h2>

                <p className="text-lime-400 px-10 text-xl  text-justify">
                    I'm a passionate and skilled web developer with practical experience in React, Tailwind CSS, Node.js, and MongoDB. I specialize in building clean, responsive, and user-focused web applications. I combine technical strength with a strong sense of design and usability.

                    {"I’m"} a quick learner, a strong team player, and a problem solver who thrives in fast-paced environments. Whether {"it’s"} building full-stack apps or crafting elegant front-end interfaces, I take pride in writing clean code and delivering quality work on time.

                    Hiring me means adding someone to your team who is motivated, dependable, and ready to make an impact from day one.
                </p>

                <div className="flex items-center pl-5 py-5 lg:py-10 ">
                    <Link to={'/contact'}
                        className="py-2 mx-5  px-5 lg:px-9 lg:text-lg rounded-full bg-lime-600 text-black hover:border-2 hover:bg-black transition hover:border-lime-600 hover:text-lime-600  hover:drop-shadow-2xl hover:drop-shadow-lime-950 font-semibold w-full lg:w-fit text-center">
                        Get in touch
                    </Link>
                </div>
            </div>

            <div>
                <Marquee gradient={false} speed={30} pauseOnHover>
                    {skills.map((skill) => (
                        <div
                            key={skill.name}
                            className="p-4 px-6 w-[150px] text-lime-600 rounded-3xl shadow-2xl transform transition-all hover:scale-110 hover:shadow-2xl hover:bg-black  flex flex-col items-center justify-center"
                        >
                            {skill.icon}
                            <p className="mt-3 text-2xl font-semibold">{skill.name}</p>
                        </div>
                    ))}
                </Marquee>

                <Marquee direction="right" gradient={false} speed={30} pauseOnHover>
                    {skill1.map((skill) => (
                        <div
                            key={skill.name}
                            className="p-4 px-6 w-[150px]  text-lime-500 rounded-3xl shadow-2xl transform transition-all hover:scale-110 hover:shadow-2xl hover:bg-black m-4 flex flex-col items-center justify-center"
                        >
                            {skill.icon}
                            <p className="mt-3 text-2xl font-semibold overflow-hidden">{skill.name}</p>
                        </div>
                    ))}
                </Marquee>

                <Marquee gradient={false} speed={30} pauseOnHover>
                    {skill2.map((skill) => (
                        <div
                            key={skill.name}
                            className="p-4 px-6 w-[150px] text-lime-600 rounded-3xl shadow-2xl transform transition-all hover:scale-110 hover:shadow-2xl hover:bg-black m-4 flex flex-col items-center justify-center"
                        >
                            {skill.icon}
                            <p className="mt-3 text-2xl font-semibold">{skill.name}</p>
                        </div>
                    ))}
                </Marquee>
            </div>
        </div>
    );
}
