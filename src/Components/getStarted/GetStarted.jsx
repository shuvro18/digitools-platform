import React from 'react';
import user from "../../assets/user.png"
import pack from "../../assets/package.png"
import rocket from "../../assets/rocket.png"

const GetStarted = () => {
    return (
        <div className='mt-10 py-30 bg-base-200'>
            <div className='space-y-4 w-10/12 mx-auto'>
                <h2 className='text-4xl font-bold text-center'>Get Started in 3 Steps</h2>
                <p className='text-neutral/50 text-center mb-5'>Start using premium digital tools in minutes, not hours.</p>

                <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>

                    <div className='p-6 bg-white rounded-2xl space-y-6 shadow-2xl'>
                        <h2 className='flex justify-end mb-5'>
                            <p className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white h-7 w-7 text-center rounded-full'>01</p>
                        </h2>
                        <img className='bg-[#4f39f648] p-3 rounded-full mx-auto' src={user} alt="" />
                        <p className='text-xl font-bold text-center'>Create Account</p>
                        <p className='text-neutral/50 text-center text-sm'>Sign up for free in seconds. No credit card required to get started.</p>
                    </div>


                    <div className='p-6 bg-white rounded-2xl space-y-6 shadow-2xl'>
                        <h2 className='flex justify-end mb-5'>
                            <p className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white h-7 w-7 text-center rounded-full'>02</p>
                        </h2>
                        <img className='bg-[#4f39f648] p-3 rounded-full mx-auto' src={pack} alt="" />
                        <p className='text-xl font-bold text-center'>Choose Products</p>
                        <p className='text-neutral/50 text-center text-sm'>Browse our catalog and select the tools that fit your needs.</p>
                    </div>


                    <div className='p-6 bg-white rounded-2xl space-y-6 shadow-2xl'>
                        <h2 className='flex justify-end mb-5'>
                            <p className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white h-7 w-7 text-center rounded-full'>03</p>
                        </h2>
                        <img className='bg-[#4f39f648] p-3 rounded-full mx-auto' src={rocket} alt="" />
                        <p className='text-xl font-bold text-center'>Start Creating</p>
                        <p className='text-neutral/50 text-center text-sm'>Download and start using your premium tools immediately.</p>
                    </div>

                    
                </div>
            </div>


        </div>
    );
};

export default GetStarted;