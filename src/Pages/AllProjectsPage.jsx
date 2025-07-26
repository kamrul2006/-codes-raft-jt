import { useState } from 'react';
import pr1 from "/Projects/pro1.jpg";
import pr2 from "/Projects/pr2.jpg";
import pr4 from "/Projects/pr4.jpg";
import pr5 from "/Projects/pr5.jpg";
import pr6 from "/Projects/prX.png";
import pp from "/Projects/pp.png";
import px from "/Projects/px.png";
import ki from "/Projects/ki.png";
import { Fade } from 'react-awesome-reveal';
import { Link } from 'react-router';

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
];

const NextProjects = [
    {
        name: 'Free PS BD',
        nameDis: "( In solidarity with Palestine)",
        image: pp,
        techStack: ['React', 'Next.js', 'Node.js', 'TailwindCSS', 'React-Router', 'Firebase', "etc."],
        description: 'Free PS BD is a modern, responsive web application built with Next.js 15, providing real-time news, updates, and resources in solidarity with Palestine. Featuring seamless authentication, role-based access control, and a moderated article publishing system, it empowers communities with reliable information.',

        liveLink: "https://free-ps-bd-next.vercel.app/",
        githubLink: 'https://github.com/kamrul2006/FREE_PS_BD-Next.js-client',
        challenges: ['Integrating payment gateway', 'Optimizing performance for large datasets', 'Admin, Moderator and User Role implementation'],
        futurePlans: ['Implementing AI-powered product recommendations', 'Adding support for multiple currencies'],
    },
    {
        name: 'K-Blogify',
        nameDis: "( Full-stack blogging platform )",
        image: px,
        techStack: ['React', 'Next.js', 'Node.js', 'TailwindCSS', 'React-Router', 'Next-Auth', "etc."],
        description: 'A modern full-stack blogging platform built with Next.js 15, Express.js, and MongoDB, designed for seamless content creation and management with full authentication support. Deployed on Vercel for frontend and Railway/Render for backend.',

        liveLink: "https://k-blogify.vercel.app/",
        githubLink: 'https://github.com/kamrul2006/K-Blogify-Next.js',
        challenges: ['Integrating payment gateway', 'Optimizing performance for large datasets', 'Admin, Moderator and User Role implementation'],
        futurePlans: ['Implementing AI-powered product recommendations', 'Adding support for multiple currencies'],
    },
    {
        name: 'K-EduNest',
        nameDis: "(Full-stack educational portal)",
        image: ki,
        techStack: ['React', 'Next.js', 'Node.js', 'TailwindCSS', 'React-Router', 'Firebase', "etc."],
        description: 'A modern full-stack blogging platform built with Next.js 15, Express.js, and MongoDB, designed for seamless content creation and management with full authentication support. Deployed on Vercel for frontend and Railway/Render for backend.',

        liveLink: "https://kedunest.vercel.app/",
        githubLink: 'https://github.com/kamrul2006/k-edunest',
        challenges: ['Integrating payment gateway', 'Optimizing performance for large datasets', 'Admin, Moderator and User Role implementation'],
        futurePlans: ['Implementing AI-powered College recommendations', 'Adding support for multiple currencies'],
    },

];

const ProjectCard = ({ project }) => {
    const [showModal, setShowModal] = useState(false);

    return (
        <div className="bg-black border border-lime-400 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out w-full font-semibold">

            <Fade duration={1500}>
                <img src={project.image} alt={project.name} className="w-full h-40 object-cover rounded-t-xl mb-4 border-b-2 border-lime-400" />
            </Fade>
            <div className='px-6 pb-3'>
                <h3 className="text-2xl font-semibold text-lime-800">{project.name}</h3>
                <h4 className="text-md text-gray-500 mb-4  ">{project.nameDis}</h4>

                <button
                    className="bg-lime-600 text-black py-2 px-6 rounded-lg mt-4 w-full hover:bg-lime-700 transition-all duration-300  "
                    onClick={() => setShowModal(true)}
                >
                    View Details
                </button>
            </div>

            {showModal && (
                <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50">
                    <div className="bg-white rounded-xl w-11/12 md:w-3/4 lg:w-2/3 p-8 max-h-[80vh] overflow-auto transition-all duration-300 ease-in-out">
                        <div className="relative">
                            <img src={project.image} alt={project.name} className="w-full h-56 object-cover rounded-xl" />
                        </div>

                        <h2 className="text-3xl font-semibold text-lime-800 mt-6">{project.name} <span className="text-lg text-gray-500">{project.nameDis}</span></h2>
                        <p className="mt-6 text-lg text-gray-700"><strong>Technology Stack:</strong> {project.techStack.join(', ')}</p>
                        <p className="mt-4 text-lg text-gray-700"><strong>Description:</strong> {project.description}</p>

                        <div className="flex gap-6 mt-6 justify-center">
                            <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="bg-lime-600 text-white py-2 px-6 rounded-lg hover:bg-lime-700 transition duration-200">
                                Live Project
                            </a>

                            <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="bg-transparent border-2 border-lime-600 text-lime-600 py-2 px-6 rounded-lg hover:bg-lime-100 transition duration-200">
                                GitHub Repository
                            </a>
                        </div>

                        <p className="mt-6 text-lg text-gray-700"><strong>Challenges:</strong> {project.challenges.join(', ')}</p>
                        <p className="mt-4 text-lg text-gray-700"><strong>Future Plans:</strong> {project.futurePlans.join(', ')}</p>

                        <button
                            className="bg-lime-500 text-white py-2 px-6 rounded-lg mt-6 w-full hover:bg-lime-600 transition duration-200"
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
        <section className="py-16 bg-gradient-to-b from-lime-950 to-black grid lg:grid-cols-3 grid-cols-1  mx-auto">


            <div className='hidden lg:block '>
                <div className='lg:sticky lg:top-18'>
                    <h2
                        className="lg:text-4xl text-3xl font-bold text-lime-200 mb-4 text-center lg:text-left lg:pl-10  ">
                        Here is my
                        <br />
                        <span className="lg:text-6xl text-5xl text-lime-500">Latest Projects</span>
                    </h2>

                    <div className='text-xl text-lime-400 pl-10 lg:sticky lg:top-44 pr-3 text-justify'>
                        All of them is fullstack project . and fully responsive. The backend code are also done by me.
                        <br />
                        All The project made with Vite and also next.js is also shown here.
                        Click on the view details button to know more about the project.


                        <div className="flex items-center  py-5 lg:py-10 sticky top-64">
                            <Link to={'/contact'}
                                className="py-2 mx-5  px-5 lg:px-9 lg:text-lg rounded-full bg-lime-600 text-black hover:border-2 hover:bg-black transition hover:border-lime-600 hover:text-lime-600  hover:drop-shadow-2xl hover:drop-shadow-lime-950 font-semibold w-full lg:w-fit text-center">
                                Get in touch
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className='col-span-2'>
                <h2 className="text-4xl font-bold text-lime-400 text-center mb-12">Vite Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-12 mx-4">
                    {projects.map((project) => (
                        <ProjectCard key={project.name} project={project} />
                    ))}
                </div>

                <h2 className="text-4xl font-bold text-lime-400 text-center my-12">Next.js Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-3  gap-12 mx-4">
                    {NextProjects.map((NextProject) => (
                        <ProjectCard key={NextProject.name} project={NextProject} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AllProjectsPage;
