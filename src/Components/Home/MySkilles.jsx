import Marquee from "react-fast-marquee";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import { IoLogoFirebase, IoLogoWebComponent } from "react-icons/io5";
import { SiMongodb, SiTailwindcss, SiReactrouter, SiDaisyui, SiJsonwebtokens, SiNextdotjs, SiExpress, SiVite } from "react-icons/si";

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
        <div className="py-16 bg-gradient-to-b to-lime-950 from-black text-black text-center">
            <h2 className="text-4xl font-semibold mb-10 text-lime-300">My Skills</h2>

            <Marquee gradient={false} speed={30} pauseOnHover>
                {skills.map((skill) => (
                    <div
                        key={skill.name}
                        className="p-8 px-12 w-[300px] bg-lime-600 rounded-3xl shadow-2xl transform transition-all hover:scale-110 hover:shadow-2xl hover:bg-lime-500 m-4 flex flex-col items-center justify-center"
                    >
                        {skill.icon}
                        <p className="mt-6 text-2xl font-semibold">{skill.name}</p>
                    </div>
                ))}
            </Marquee>

            <Marquee direction="right" gradient={false} speed={30} pauseOnHover>
                {skill1.map((skill) => (
                    <div
                        key={skill.name}
                        className="p-8 px-12 w-[300px] bg-lime-600 rounded-3xl shadow-2xl transform transition-all hover:scale-110 hover:shadow-2xl hover:bg-lime-500 m-4 flex flex-col items-center justify-center"
                    >
                        {skill.icon}
                        <p className="mt-6 text-2xl font-semibold">{skill.name}</p>
                    </div>
                ))}
            </Marquee>

            <Marquee gradient={false} speed={30} pauseOnHover>
                {skill2.map((skill) => (
                    <div
                        key={skill.name}
                        className="p-8 px-12 w-[300px] bg-lime-600 rounded-3xl shadow-2xl transform transition-all hover:scale-110 hover:shadow-2xl hover:bg-lime-500 m-4 flex flex-col items-center justify-center"
                    >
                        {skill.icon}
                        <p className="mt-6 text-2xl font-semibold">{skill.name}</p>
                    </div>
                ))}
            </Marquee>
        </div>
    );
}
