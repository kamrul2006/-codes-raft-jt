import { Fade, Slide } from 'react-awesome-reveal'
import { BiRightArrow, BiX } from 'react-icons/bi'
import { FiFacebook, FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi'
import { Link } from 'react-router'
import { Typewriter } from 'react-simple-typewriter'

function Banner() {
    return (
        <div className=' flex items-center justify-center z-40'>
            <div className='flex flex-col-reverse lg:flex-row items-center justify-between mx-auto max-w-7xl text-center lg:text-left'>

                {/* ---------name and title-------- */}
                <div className=' px-10 pb-10 lg:pb-0'>

                    <Slide>
                        <h1 className='lg:text-7xl text-4xl text-lime-200 font-medium py-3'>
                            Kamrul Islam
                            <span className='text-lime-600 mt-4'> Apurba</span>
                        </h1>

                        <div className='text-lime-400 lg:text-3xl text-xl  h-10 font-bold my-3'>
                            <span className='mx-2 font-normal text-lime-300'>I'm a</span>
                            <Typewriter
                                loop={Infinity}
                                cursor={true}
                                cursorStyle={"<"}
                                words={['Web Developer', 'Frontend Developer', 'React Developer', 'MS Word & Photoshop Expert!']}
                            />
                        </div>

                        {/* -------------------social logos------------ */}
                        <div className='my-5 flex items-center justify-center lg:justify-start gap-4 font-serif  text-xl'>
                            <a
                                href="https://github.com/kamrul2006"
                                className='text-lime-500 hover:text-black hover:bg-lime-500 rounded-full  transition p-2 border border-lime-400'>
                                <FiGithub />
                            </a>

                            <a
                                href="https://www.linkedin.com"
                                className='text-lime-500 hover:text-black hover:bg-lime-500 rounded-full  transition p-2 border border-lime-400'> <FiLinkedin />
                            </a>

                            <a
                                href="https://x.com/kamrul__2006"
                                className='text-lime-500 hover:text-black hover:bg-lime-500 rounded-full  transition p-2 border border-lime-400'>
                                <FiTwitter />
                            </a>

                            <a
                                href="https://facebook.com/kamrul.islam.apurba"
                                className='text-lime-500 hover:text-black hover:bg-lime-500 rounded-full  transition p-2 border border-lime-400'>
                                <FiFacebook />
                            </a>


                        </div>

                        {/* -------------other Buttons---------- */}
                        <div className='mt-10 space-x-3 font-semibold flex items-center justify-center lg:justify-start'>

                            <Link
                                to={"/about"}
                                className=' py-2  px-5 lg:px-9 lg:text-lg rounded-full bg-lime-600 text-black hover:border-2 hover:bg-black transition hover:border-lime-600 hover:text-lime-600 flex items-center justify-center gap-3 hover:drop-shadow-2xl hover:drop-shadow-lime-950'>
                                Explore More <BiRightArrow />
                            </Link>

                            <a
                                href="/RESUME OF KAMRUL ISLAM .pdf"
                                download
                                className='border-2 hover:bg-lime-600 hover:text-white border-lime-600 text-lime-600 rounded-full transition py-2  px-5 lg:px-9 lg:text-lg hover:drop-shadow-2xl hover:border-0 hover:drop-shadow-lime-950'>
                                Download CV
                            </a>
                        </div>

                    </Slide>
                </div>

                {/* ----------image---------------- */}
                <div className='lg:w-1/2'>
                    <Fade delay={400}>
                        <img src="item.webp" alt="abc" className='lg:w-full w-10/12 mx-auto rounded-b-full lg:rounded-none mb-5 lg:mb-0 border-b-4 lg:border-0 border-lime-500' />
                    </Fade>
                </div>

            </div>
        </div>
    )
}

export default Banner