import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../Components/Fixd/Navbar'

export const RootLayout = () => {
    return (
        <div>
            <Navbar />

            <div className='h-screen'>
                <Outlet />
            </div>


        </div>
    )
}
