import React from 'react'
import { navListRoute, paths } from '../hooks/Path'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Navbar from '../modules/Navbar'
import Sidebar from '../modules/Sidebar'

const HomeRoutes = () => {
    return (
        <div className='flex w-[1200px] mx-auto justify-between'>
            <Navbar />
            <div className='w-[50%] border-x-[2px] border-slate-400 h-[100vh] overflow-y-auto'>
                <Routes>
                    {navListRoute.map(item => <Route path={item.path} element={item.element} />)}
                </Routes>
            </div>
            <Sidebar />
        </div>
    )
}

export default HomeRoutes