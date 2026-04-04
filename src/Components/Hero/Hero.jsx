import React, { useState } from 'react';
import { CiPlay1 } from 'react-icons/ci';
import { FaRegDotCircle } from 'react-icons/fa';
import banner from "../../assets/banner.png"

const Hero = () => {

    const [heroButtons, setHeroButtons] = useState(true)

    return (
        <div className='my-10 w-9/12 mx-auto'>
            <div className=' flex flex-col md:flex-row lg:flex-row justify-between items-center gap-15'>
                <div className='space-y-3 w-5/12'>

                    <p className=' btn bg-[#4f39f627] rounded-4xl shadow-2xl'>
                        <span className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent flex items-center justify-center gap-2'>
                            <FaRegDotCircle className='text-[#4F39F6]' />
                            New: AI-Powered Tools Available
                        </span>
                    </p>

                    <h2 className='text-6xl font-bold'>
                        Supercharge Your Digital Workflow
                    </h2>

                    <p className='text-neutral/50'>Access premium AI tools, design assets, templates, and productivity
                        software—all in one place. Start creating faster today.
                        Explore Products
                    </p>

                    <div className='gap-5 flex'>
                        <button onClick={() => setHeroButtons(true)} className={`btn btn-soft  rounded-4xl ${heroButtons ? "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white" : "border-2 border-primary bg-white text-primary"} `} >Explore Products</button>

                        <button onClick={() => setHeroButtons(false)} className={`btn btn-soft  rounded-4xl ${!heroButtons ? "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white" : "border-2 border-primary bg-white text-primary"} `} > <CiPlay1 className='text-primary font-extrabold text-xl' /> Watch Demo</button>
                    </div>

                </div>

                <div>
                    <img src={banner} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Hero;