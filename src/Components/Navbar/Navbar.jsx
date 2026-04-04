import React from 'react';
import { CiShoppingCart } from 'react-icons/ci';

const Navbar = () => {
    return (
        <div className='shadow-sm'>
            <div className="navbar bg-base-100 w-10/12 mx-auto">
                <div className="navbar-start">

                    <a className="btn btn-ghost text-3xl bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent font-bold ">DigiTools</a>
                </div>
                <div className="navbar-center lg:flex ">
                    <ul className="menu menu-horizontal px-1">
                        <li><a>Products</a></li>
                        <li><a>Features</a></li>
                        <li><a>Pricing</a></li>
                        <li><a>Testimonials</a></li>
                        <li><a>FAQ</a></li>
                    </ul>
                </div>
                <div className="navbar-end gap-3">
                    <a href=""> <CiShoppingCart /> </a>

                    <a href=""> <p>Login</p> </a>

                    <button className='btn rounded-4xl text-white bg-linear-to-r from-[#4F39F6] to-[#9514FA]'>Get Started</button>

                </div>
            </div>
        </div>
    );
};

export default Navbar;