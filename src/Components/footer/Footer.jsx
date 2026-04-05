import React from 'react';
import { BiLogoInstagramAlt } from 'react-icons/bi';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
    return (
        <div className='bg-[#101727] h-[40vh]'>


            <footer className="footer sm:footer-horizontal  text-neutral-content p-10 w-10/12 mx-auto ">

                <nav>
                    <h2 className='text-4xl font-bold'>DigiTools</h2>
                    <p className='text-sm'>Premium digital tools for creators, <br />
                        professionals, and businesses. Work smarter <br />
                        with our suite of powerful tools.
                    </p>
                </nav>
                <nav>
                    <h6 className="text-xl font-bold">Product</h6>
                    <a className="link link-hover">Features</a>
                    <a className="link link-hover">Pricing</a>
                    <a className="link link-hover">Templates</a>
                    <a className="link link-hover">Integrations</a>
                </nav>
                <nav>
                    <h6 className="text-xl font-semibold">Company</h6>
                    <a className="link link-hover">About</a>
                    <a className="link link-hover">Blog</a>
                    <a className="link link-hover">Careers</a>
                    <a className="link link-hover">Press</a>
                </nav>
                <nav>
                    <h6 className="text-xl font-bold">Resources</h6>
                    <a className="link link-hover">Documentation</a>
                    <a className="link link-hover">Help Center</a>
                    <a className="link link-hover">Community</a>
                    <a className="link link-hover">Contact</a>
                </nav>

                <nav>
                    <p>Social Links</p>
                    <div className='flex gap-2'>
                        <div className='p-4 bg-white text-black rounded-full' >

                            <BiLogoInstagramAlt />

                        </div>

                        <div className='p-4 bg-white text-black rounded-full' >
                            <FaFacebookSquare />
                        </div>

                        <div className='p-4 bg-white rounded-full text-black' >

                            <FaXTwitter />
                        </div>
                    </div>
                </nav>
            </footer>
             <div className="divider divider-info w-10/12 mx-auto"></div>
        </div>
    );
};

export default Footer;