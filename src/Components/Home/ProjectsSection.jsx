import pr1 from "/Projects/pro1.jpg";
import pr2 from "/Projects/pr2.jpg";
import pr5 from "/Projects/pr5.jpg";
import pr6 from "/Projects/prX.png";
import { Fade } from 'react-awesome-reveal';
import { Link } from "react-router";

const projects = [
    {
        name: 'K-Tech',
        nameDis: "(A Tech hunting web)",
        image: pr5,
        techStack: ['React', 'Node.js', 'TailwindCSS', 'React-Router', 'Firebase', "etc."],
        description: 'K-Tech UI is a dynamic web platform designed for seamless product management, interactive user engagement, and efficient content moderation.',
        liveLink: "https://k-tech-ltd.web.app/",
        githubLink: 'https://github.com/kamrul2006/K-Tech-UI',
        challenges: ['Integrating payment gateway', 'Optimizing performance for large datasets', 'Admin, Moderator and User Role implementation'],
        futurePlans: ['Implementing AI-powered product recommendations', 'Adding support for multiple currencies'],
    },
    {
        name: 'K-InfoNic',
        nameDis: "(News publishing web application.)",
        image: pr6,
        techStack: ['React', 'Node.js', 'TailwindCSS', 'React-Router', 'Firebase', "etc."],
        description: 'K-Infonic is a full-stack, feature-rich news publishing web application built with React, Node.js, and MongoDB. It empowers users to submit news articles, while admins manage content approval and access control. Premium content is available for subscribed users, offering a dynamic, real-world publishing experience.',
        liveLink: "https://k-infonic.web.app/",
        githubLink: 'https://github.com/kamrul2006/K-Infonic_ClientSite',
        challenges: ['Integrating payment gateway', 'Optimizing performance for large datasets', 'Admin, Moderator and User Role implementation'],
        futurePlans: ['Implementing AI-powered product recommendations', 'Adding support for multiple currencies'],
    },

    {
        name: 'K-Visa',
        nameDis: "(A Visa Navigator Platform)",
        image: pr2,
        techStack: ['React', 'Node.js', 'TailwindCSS', 'React-Router', 'Firebase', "etc."],
        description: 'K-VISA is a comprehensive Visa Navigator Portal designed to simplify the process of checking visa requirements and applying online.',
        liveLink: 'https://k-visa-portal.web.app/',
        githubLink: 'https://github.com/kamrul2006/K-Visa',
        challenges: ['Implementing Add, Remove, Update Visa program', 'Designing a responsive layout'],
        futurePlans: ['Adding a comment section', 'Implementing social media sharing'],
    },
    {
        name: 'Lingo-Bingo',
        nameDis: "(A Language Learning Website)",
        image: pr1,
        techStack: ['React', 'Node.js', 'TailwindCSS', 'React-Router', 'Firebase', "etc."],
        description: 'LINGO BINGO is a fun and interactive language learning application designed to help users expand their vocabulary.',
        liveLink: 'https://lingo-bingo-4a734.web.app/',
        githubLink: 'https://github.com/kamrul2006/Lingo_bingo',
        challenges: ['Implementing Private Routes', 'Designing a responsive layout'],
        futurePlans: ['Adding a comment section', 'Implementing social media sharing'],
    },
];

const ProjectCard = ({ project }) => {

    return (
        <div className="bg-black border border-lime-400 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out w-full p-6">

            <Fade duration={1500}>
                <img src={project.image} alt={project.name} className="w-full h-40 object-cover rounded-xl mb-4 border-2" />
            </Fade>

            <h3 className="text-2xl font-semibold  text-lime-500">{project.name}</h3>
            <h4 className="text-md text-gray-400 mb-4">{project.nameDis}</h4>


        </div>
    );
};

const ProjectsSection = () => {
    return (
        <section id="portfolio" className="py-16 bg-gradient-to-b from-lime-950 to-black text-white">
            <h2 className="text-4xl font-bold text-lime-400 text-center mb-12">My Projects</h2>
            <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 mx-4">
                {projects.map((project) => (
                    <ProjectCard key={project.name} project={project} />
                ))}
            </div>

            <div className="flex items-center justify-center py-5 lg:py-10">
                <Link to={'/projects'}
                    className="py-2  px-5 lg:px-9 lg:text-lg rounded-full bg-lime-600 text-black hover:border-2 hover:bg-black transition hover:border-lime-600 hover:text-lime-600 flex items-center justify-center gap-3 hover:drop-shadow-2xl hover:drop-shadow-lime-950 font-semibold w-full lg:w-fit mx-">
                    See All Projects
                </Link>
            </div>
        </section>
    );
};

export default ProjectsSection;
