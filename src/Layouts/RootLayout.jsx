import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../Components/Fixd/Navbar'
import Footer from '../Components/Fixd/Footer'

export const RootLayout = () => {
    return (
        <div>
            <Navbar />

            <div className='h-screen'>
                <Outlet />
            </div>

            <Footer />
        </div>
    )
}
