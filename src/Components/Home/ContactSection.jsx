import { useState } from "react";
import emailjs from "emailjs-com";
import { FaFacebook, FaTwitter, FaWhatsapp, FaLinkedin } from "react-icons/fa";
import { BiMobile } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";

const ContactMe = () => {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [success, setSuccess] = useState(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs
            .send(
                "service_37dr2kk",
                "template_pxu1vap",
                {
                    from_name: formData.name,
                    from_email: formData.email,
                    message: formData.message,
                    to_email: "kamrulislamapurba@gmail.com",
                },
                "cFYNxFUfgcENpdend"
            )
            .then(
                () => {
                    setSuccess(true);
                    setFormData({ name: "", email: "", message: "" });
                },
                () => {
                    setSuccess(false);
                }
            );
    };

    return (
        <div id="contact" className="bg-gradient-to-b to-lime-950 from-black py-16 px-6 lg:px-16 border-b-4 border-lime-300 text-lime-400">

            <h2
                className="lg:text-4xl text-3xl font-bold text-lime-200 mb-6 text-center  lg:pl-10">
                My Contact Info. & <span className="lg:text-6xl text-5xl text-lime-500">Let's Discuss</span>
            </h2>

            <p className="text-xl text-center pb-10 max-w-3xl mx-auto">
                Send Direct email from here or knock in to my social media platform. <br /> Fell free to contact with me.

            </p>

            <div className="flex flex-col lg:flex-row justify-center gap-10">
                {/*-------------- Contact Form------------------- */}
                <form
                    className="backdrop-blur-3xl border border-lime-400 p-8 rounded-xl w-full lg:w-1/2 shadow-lg shadow-lime-500/50"
                    onSubmit={handleSubmit}
                >
                    <h3 className="text-3xl text-center font-semibold text-lime-500 mb-6">Get in Touch</h3>
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        className="w-full p-4 mb-5 border border-lime-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-opacity-50"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        className="w-full p-4 mb-5 border border-lime-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-opacity-50"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    <textarea
                        name="message"
                        placeholder="Your Message"
                        className="w-full p-4 mb-6 border border-lime-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-opacity-50"
                        value={formData.message}
                        onChange={handleChange}
                        rows="6"
                        required
                    ></textarea>
                    <button
                        type="submit"
                        className="bg-lime-500 text-black font-medium py-3 px-6 rounded-xl w-full hover:bg-lime-600 transition duration-300 ease-in-out"
                    >
                        Send Message
                    </button>
                    {success === true && (
                        <p className="mt-4 text-green-500 text-center">Message sent successfully!</p>
                    )}
                    {success === false && (
                        <p className="mt-4 text-red-400 text-center">Failed to send message. Please try again.</p>
                    )}
                </form>

                {/*----------------- Contact Information------------ */}
                <div className="  px-8 rounded-xl w-full lg:w-1/2 font-medium">

                    <h3 className="text-3xl font-semibold text-center text-lime-500 mb-6">Contact Information</h3>

                    <div
                        className="mb-4 flex items-center gap-2 border border-lime-500 text-lg lg:text-2xl text-lime-700 py-1 px-3 rounded">
                        <CiLocationOn className="text-lime-500 text-5xl" />
                        <p>
                            Location:
                            <br />
                            Kishoreganj, Dhaka, Bangladesh
                        </p>
                    </div>

                    <div
                        className="mb-4 flex items-center gap-2 border border-lime-500 text-lg lg:text-2xl text-lime-700 py-1 px-3 rounded">
                        <MdEmail className="text-lime-500 text-5xl" />

                        <p>
                            Email : <br />
                            kamrulislamapurba@gmail.com
                        </p>
                    </div>

                    <div
                        className="mb-4 flex items-center gap-2 border border-lime-500 text-lg lg:text-2xl text-lime-700 py-1 px-3 rounded">
                        <BiMobile className="text-lime-500 text-5xl" />

                        <p>
                            Mobile: <br />
                            +880 1865-628444
                        </p>
                    </div>

                    <div
                        className="mb-4 flex items-center gap-2 border border-lime-500 text-lg lg:text-2xl text-lime-700 py-1 px-3 rounded">
                        <FaWhatsapp className="text-lime-500 text-5xl" />

                        <p>
                            Whatsapp : <br />
                            +880 1616-210277
                        </p>
                    </div>


                    {/* --------------Social Media-------------- */}

                    <div className="border pb-3 rounded">
                        <h4 className="text-xl lg:text-3xl font-medium text-lime-500 my-4 text-center">Social Media</h4>

                        <div className="flex gap-6 justify-center text-3xl lg:text-5xl  text-lime-600">
                            <a
                                href="https://www.facebook.com/kamrul.islam.apurba/"
                                className="hover:text-lime-800 transition duration-200"
                            >
                                <FaFacebook />
                            </a>

                            <a
                                href="https://x.com/kamrul__2006"
                                className="hover:text-lime-800 transition duration-200"
                            >
                                <FaTwitter />
                            </a>

                            <a
                                href="https://wa.me/+8801616210277"
                                className="hover:text-lime-800 transition duration-200"
                            >
                                <FaWhatsapp />
                            </a>

                            <a
                                href="https://linkedin.com"
                                className="hover:text-lime-800 transition duration-200"
                            >
                                <FaLinkedin />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactMe;
