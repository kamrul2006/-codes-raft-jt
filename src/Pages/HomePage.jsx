import React from 'react'
import Banner from '../Components/Home/Banner'
import { AboutPage } from './AboutPage'

export const HomePage = () => {
    return (
        <div>
            <Banner />

            <div className='border-t-4 border-lime-500'>
                <AboutPage />
            </div>

        </div>
    )
}
