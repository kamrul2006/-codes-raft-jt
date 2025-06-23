import React from 'react';
import { FaUniversity, FaGraduationCap, FaSchool } from 'react-icons/fa';

const qualifications = [
    {
        icon: <FaUniversity className="text-4xl text-lime-400" />,
        degree: "Bachelor of Arts in Social Work",
        institution: "National University",
        location: ", Bangladesh",
        duration: "2023 - 2027 (Currently Running.)",
    },
    {
        icon: <FaGraduationCap className="text-4xl text-lime-400" />,
        degree: "Higher Secondary Certificate (HSC)",
        institution: "Katiadi Government College",
        location: "Katiadi, Kishoreganj, Bangladesh",
        duration: "2022 - 2023",
    },
    {
        icon: <FaSchool className="text-4xl text-lime-400" />,
        degree: "Secondary School Certificate (SSC)",
        institution: "Hazera Sultan High School",
        location: "Kishoreganj, Bangladesh",
        duration: "2019 - 2021",
    },
];

const Education = () => {
    return (
        <section id="education" className="py-16 px-4 md:px-20
         bg-black text-white">
            < h2
                className="text-4xl md:text-5xl font-bold text-center mb-16 text-lime-400 "
                initial={{ opacity: 0, y: -40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                Educational Qualification
            </ h2>

            <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-3">
                {qualifications.map((edu, index) => (
                    < div
                        key={index}
                        className="relative bg-white/5 backdrop-blur-lg border border-lime-500/20 rounded-2xl p-6 shadow-lg hover:shadow-lime-500/50 transition-all duration-300 group"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.15 }}
                        viewport={{ once: true }}
                    >
                        <div className="mb-4">{edu.icon}</div>
                        <h3 className="text-xl font-semibold text-lime-300 group-hover:scale-105 transition-transform duration-200">
                            {edu.degree}
                        </h3>
                        <p className="text-base text-gray-300 mt-1">{edu.institution}</p>
                        <p className="text-sm text-gray-400">{edu.location}</p>
                        <p className="text-sm text-gray-400 mt-2">{edu.duration}</p>
                        <p className="text-sm text-gray-400">{edu.grade}</p>
                    </ div>
                ))}
            </div>
        </section>
    );
};


export default Education;
