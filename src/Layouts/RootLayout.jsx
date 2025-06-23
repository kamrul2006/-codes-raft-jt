import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../Components/Fixd/Navbar'
import Footer from '../Components/Fixd/Footer'

export const RootLayout = () => {
    return (
        <div className='bg-black'>
            <Navbar />

            <div className='min-h-screen'>
                <Outlet />
            </div>

            <Footer />
        </div>
    )
}
