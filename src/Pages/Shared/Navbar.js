import React, { Fragment, useContext } from 'react';
import { NavLink, Link } from "react-router-dom";
import { AuthContext } from '../../contexts/AuthProvider';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)



    const handleLogOut = () => {
        return logOut()
            .then(() => { })
            .catch(err => console.error(err))
    }

    const menuItems = <Fragment>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/about'>About</NavLink>
        <NavLink to='/appointment'>Appointment</NavLink>
        <NavLink to='/reviews'>Reviews</NavLink>
        <NavLink to='/contact'>Contact us</NavLink>

        {user?.uid ?
            <>
                <NavLink to='/dashboard'>Dashboard</NavLink>
                <button onClick={handleLogOut} to='/'>Logout</button>
            </>
            :
            <NavLink to='/login'>Login</NavLink>
        }

    </Fragment>


    return (
        <div className="navbar">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={1} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-24">
                        {menuItems}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost text-xl normal-case">Doctors Portal</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0 gap-4">
                    {menuItems}
                </ul>
            </div>
            <label htmlFor="dashboard-drawer" tabIndex={2} className="btn btn-ghost lg:hidden navbar-end">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
        </div>
    );
};

export default Navbar;