import React from 'react'
import { Fade, Slide } from 'react-awesome-reveal'
import { BiRightArrow } from 'react-icons/bi'
import { Link } from 'react-router'

function Banner() {
    return (
        <div className='lg:h-screen flex items-center justify-center'>
            <div className='flex flex-col-reverse lg:flex-row items-center justify-between mx-auto max-w-7xl text-center lg:text-left'>

                <div className='lg:w-1/2 px-10 lg:px-15'>

                    <Slide>
                        <h1 className='lg:text-4xl text-2xl text-lime-200 font-black'>
                            Hello, {"I'm"} <span className='text-lime-600 mt-4'>KI Apurba</span>
                        </h1>

                        <p className='my-5 text-lg font-serif font-medium text-gray-700'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint earum, quas quo a ut accusantium eos consequuntur? Cupiditate perferendis minima,
                        </p>

                        <div className='mt-10 space-x-3 font-semibold flex items-center '>
                            <Link to={"/about"} className=' py-2 lg:py-4 px-5 lg:px-9 lg:text-lg rounded-full bg-lime-600 text-white hover:border-2 hover:bg-white transition hover:border-lime-600 hover:text-lime-600 flex items-center justify-center gap-3 hover:drop-shadow-2xl'>
                                Learn More <BiRightArrow />
                            </Link>

                            <Link to={"/get-card"} className='border-2 hover:bg-lime-600 hover:text-white border-lime-600 text-lime-600 rounded-full transition py-2 lg:py-4 px-5 lg:px-9 lg:text-lg hover:drop-shadow-2xl hover:border-0'>
                                Get Card
                            </Link>
                        </div>

                    </Slide>
                </div>

                {/* ----------image---------------- */}
                <div>
                    <Fade delay={400}>
                        <img src="Ccard.png" alt="abc" className='p-5' />
                    </Fade>
                </div>

            </div>
        </div>
    )
}

export default Banner