import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { LogoIcon } from '../assets/icons'
import { navListRoute } from '../hooks/Path'
import Button from '../components/Button'

const Navbar = () => {
    return (
        <div className='w-[25%] h-[100vh] overflow-y-auto pr-[60px]'>
            <div className='pt-[32px] pb-[49px]'>
                <Link to={"/"}><LogoIcon /></Link>
            </div>
            <ul className='space-y-[30px] mb-[31px]'>
                {navListRoute.map(item => (
                    <NavLink to={`${item.path}`} key={item.id} className='flex items-center !gap-[20px]'>
                        {item.icon}
                        <span>{item.title}</span>
                    </NavLink>
                ))}
            </ul>
            <Button type={"button"} title={"Tweet"} />
        </div >
    )
}

export default Navbar