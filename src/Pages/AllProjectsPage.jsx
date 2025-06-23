import { useState } from 'react';
import pr1 from "/Projects/pro1.jpg";
import pr2 from "/Projects/pr2.jpg";
import pr4 from "/Projects/pr4.jpg";
import pr5 from "/Projects/pr5.jpg";
import pr6 from "/Projects/prX.png";
import { Fade } from 'react-awesome-reveal';

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
        name: 'K-HistoArts',
        nameDis: "(A Historical Artifacts App)",
        image: pr4,
        techStack: ['React', 'Node.js', 'TailwindCSS', 'React-Router', 'Firebase', "etc."],
        description: 'This is a web application which allows users to browse historical artifacts, view details, and add their own entries.',
        liveLink: 'https://k-histocraft.web.app/',
        githubLink: 'https://github.com/kamrul2006/Histo-Arts',
        challenges: ['Real-time updates synchronization', 'Designing an intuitive user interface', "Fully responsive"],
        futurePlans: ['Adding collaboration features', 'Integrating with calendar apps'],
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
    const [showModal, setShowModal] = useState(false);

    return (
        <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out w-full p-6">

            <Fade duration={1500}>
                <img src={project.image} alt={project.name} className="w-full h-40 object-cover rounded-xl mb-4 border-2" />
            </Fade>

            <h3 className="text-2xl font-semibold text-teal-800">{project.name}</h3>
            <h4 className="text-md text-gray-500 mb-4">{project.nameDis}</h4>

            <button
                className="bg-teal-600 text-white py-2 px-6 rounded-lg mt-4 w-full hover:bg-teal-700 transition-all duration-300"
                onClick={() => setShowModal(true)}
            >
                View Details
            </button>

            {showModal && (
                <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50">
                    <div className="bg-white rounded-xl w-11/12 md:w-3/4 lg:w-2/3 p-8 max-h-[80vh] overflow-auto transition-all duration-300 ease-in-out">
                        <div className="relative">
                            <img src={project.image} alt={project.name} className="w-full h-56 object-cover rounded-xl" />
                        </div>

                        <h2 className="text-3xl font-semibold text-teal-800 mt-6">{project.name} <span className="text-lg text-gray-500">{project.nameDis}</span></h2>
                        <p className="mt-6 text-lg text-gray-700"><strong>Technology Stack:</strong> {project.techStack.join(', ')}</p>
                        <p className="mt-4 text-lg text-gray-700"><strong>Description:</strong> {project.description}</p>

                        <div className="flex gap-6 mt-6 justify-center">
                            <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="bg-teal-600 text-white py-2 px-6 rounded-lg hover:bg-teal-700 transition duration-200">
                                Live Project
                            </a>

                            <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="bg-transparent border-2 border-teal-600 text-teal-600 py-2 px-6 rounded-lg hover:bg-teal-100 transition duration-200">
                                GitHub Repository
                            </a>
                        </div>

                        <p className="mt-6 text-lg text-gray-700"><strong>Challenges:</strong> {project.challenges.join(', ')}</p>
                        <p className="mt-4 text-lg text-gray-700"><strong>Future Plans:</strong> {project.futurePlans.join(', ')}</p>

                        <button
                            className="bg-teal-500 text-white py-2 px-6 rounded-lg mt-6 w-full hover:bg-teal-600 transition duration-200"
                            onClick={() => setShowModal(false)}
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

const AllProjectsPage = () => {
    return (
        <section id="portfolio" className="py-16 bg-gradient-to-b from-teal-950 to-black text-white">
            <h2 className="text-4xl font-bold text-teal-400 text-center mb-12">My Projects</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 mx-4">
                {projects.map((project) => (
                    <ProjectCard key={project.name} project={project} />
                ))}
            </div>
        </section>
    );
};

export default AllProjectsPage;
