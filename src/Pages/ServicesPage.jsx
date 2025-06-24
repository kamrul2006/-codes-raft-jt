import { Fade } from 'react-awesome-reveal'
import { FaCode, FaGlobe, FaMobileAlt, FaPaintBrush, FaServer, FaTeamspeak } from 'react-icons/fa';
import { GiTeamIdea } from 'react-icons/gi';
import { Link } from 'react-router'


const services = [
    {
        icon: <FaCode className="text-7xl text-lime-600" />,
        title: 'Web Development',
        description:
            'I specialize in building high-performance, scalable, and SEO-optimized web applications using React, Vite, and modern JavaScript tools. Clean code, component-based architecture, and performance-first mindset are at the core of every project.',
    },
    {
        icon: <FaPaintBrush className="text-7xl text-lime-600" />,
        title: 'UI/UX Design',
        description:
            'From wireframes to pixel-perfect layouts, I design interfaces that are not only visually appealing but also user-friendly. I follow modern design principles, ensuring accessibility and intuitive navigation throughout the user journey.',
    },
    {
        icon: <FaMobileAlt className="text-7xl text-lime-600" />,
        title: 'Mobile-Friendly Interfaces',
        description:
            'In today’s mobile-first world, I ensure that your application delivers a seamless experience on all devices. I optimize layout, speed, and interactivity for smaller screens without compromising quality or design.',
    },
    {
        icon: <FaGlobe className="text-7xl text-lime-600" />,
        title: 'Fully Responsive Design',
        description:
            'I develop interfaces that adapt beautifully to various screen sizes and resolutions. Whether it’s desktop, tablet, or mobile, your website will maintain its usability, aesthetics, and performance across devices.',
    },
    {
        icon: <FaServer className="text-7xl text-lime-600" />,
        title: 'Backend Integration',
        description:
            'Using Node.js and Express, I build robust REST APIs and integrate them seamlessly with frontend applications. With MongoDB for data storage, I ensure data security, consistency, and efficient client-server communication.',
    },
    {
        icon: <GiTeamIdea className="text-7xl text-lime-600" />,
        title: 'Team Collaboration & Agile',
        description:
            'I thrive in collaborative environments using tools like Git, GitHub, Trello, and Figma. I follow agile workflows, participate in code reviews, and communicate effectively to contribute efficiently to team-driven projects.',
    },
];;

export const ServicesPage = () => {
    return (
        <div>

            <div className='border-t right-5 fixed border-lime-500 w-fit font-serif text-lime-500 rounded-full px-2 shadow shadow-lime-400 hidden lg:block mb-10 text-right'>Services</div>

            <div>
                <Fade duration={2000} >
                    <h2
                        className="lg:text-4xl text-3xl font-bold text-lime-200 mb-4 text-center lg:text-left lg:pl-10">
                        What Can I Do ?
                        <br />
                        <span className="lg:text-6xl text-5xl text-lime-500">Here is My Services</span>
                    </h2>

                    {/* ----------our services ------------*/}

                    <div className='text-lime-500 grid grid-cols-1 lg:grid-cols-3 gap-10 max-w-6xl mx-auto rounded-b-2xl text-center my-5 lg:mt-10 px-5'>
                        {
                            services.map((srv, i) => (
                                <div key={i} className='border shadow-lg shadow-lime-400 flex flex-col items-center py-4 rounded-tl-4xl rounded-br-4xl'>
                                    <p className='my-5'>{srv.icon}</p>
                                    <p className='text-3xl font-medium mb-5'>{srv.title}</p>
                                    <p className='text-lg px-5'>{srv.description}</p>
                                </div>
                            ))
                        }
                    </div>



                    <div className="flex items-center justify-center lg:pl-10 py-5 lg:py-10 ">
                        <Link to={'/projects'}
                            className="py-2 mx-5  px-5 lg:px-9 lg:text-lg rounded-full bg-lime-600 text-black hover:border-2 hover:bg-black transition hover:border-lime-600 hover:text-lime-600  hover:drop-shadow-2xl hover:drop-shadow-lime-950 font-semibold w-full lg:w-fit text-center">
                            See My Projects
                        </Link>
                    </div>
                </Fade>
            </div>

        </div>
    )
}
