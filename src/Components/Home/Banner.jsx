import { Fade, Slide } from 'react-awesome-reveal'
import { BiRightArrow, BiX } from 'react-icons/bi'
import { FiFacebook, FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi'
import { Link } from 'react-router'
import { Typewriter } from 'react-simple-typewriter'

function Banner() {
    return (
        <div className=' flex items-center justify-center'>
            <div className='flex flex-col-reverse lg:flex-row items-center justify-between mx-auto max-w-7xl text-center lg:text-left'>

                <div className='lg:w-1/2 px-10 lg:px-15'>

                    <Slide>
                        <h1 className='lg:text-6xl text-4xl text-lime-200  font-medium'>
                            Hello, {"I'm"} <span className='text-lime-600 mt-4'>KI Apurba</span>
                        </h1>

                        <div className='text-lime-400 text-3xl h-10 font-bold my-3'>
                            <span className='mx-2 font-normal text-lime-300'>I'm a</span>
                            <Typewriter
                                loop={Infinity}
                                cursor={true}
                                cursorStyle={"<"}
                                words={['Web Developer', 'Frontend Developer', 'React Developer', 'MS Word & Photoshop Expert!']}
                            />
                        </div>

                        <div className='my-5 flex gap-4 font-serif  text-3xl'>
                            <a href="" className='text-lime-500 hover:text-black hover:bg-lime-500 rounded-full  transition p-1'><FiGithub /></a>

                            <a href="" className='text-lime-500 hover:text-black hover:bg-lime-500 rounded-full  transition p-1'> <FiLinkedin /></a>


                            <a href="" className='text-lime-500 hover:text-black hover:bg-lime-500 rounded-full  transition p-1'><FiTwitter /></a>


                            <a href="" className='text-lime-500 hover:text-black hover:bg-lime-500 rounded-full  transition p-1'><FiFacebook /></a>


                        </div>

                        <div className='mt-10 space-x-3 font-semibold flex items-center '>
                            <Link to={"/about"} className=' py-2  px-5 lg:px-9 lg:text-lg rounded-full bg-lime-600 text-black hover:border-2 hover:bg-black transition hover:border-lime-600 hover:text-lime-600 flex items-center justify-center gap-3 hover:drop-shadow-2xl hover:drop-shadow-lime-950'>
                                Explore More <BiRightArrow />
                            </Link>

                            <Link to={"/get-card"} className='border-2 hover:bg-lime-600 hover:text-white border-lime-600 text-lime-600 rounded-full transition py-2  px-5 lg:px-9 lg:text-lg hover:drop-shadow-2xl hover:border-0 hover:drop-shadow-lime-950'>
                                Download CV
                            </Link>
                        </div>

                    </Slide>
                </div>

                {/* ----------image---------------- */}
                <div className='w-1/2'>
                    <Fade delay={400}>
                        <img src="item.png" alt="abc" className='w-full' />
                    </Fade>
                </div>

            </div>
        </div>
    )
}

export default Banner