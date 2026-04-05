import React from 'react';
import { BiDollar } from 'react-icons/bi';
import { FaCheck } from 'react-icons/fa';

const Pricing = () => {
    return (
        <div className='space-y-8 w-10/12 mx-auto my-30'>
            <h2 className='text-4xl font-bold text-center'>Simple, Transparent Pricing</h2>
            <p className='text-neutral/50 text-center text-sm'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-7'>


                <div className='bg-base-200 rounded-2xl'>
                    <div className='p-6'>
                        <div className='mb-5'>
                            <h3 className='text-xl font-bold'>Starter</h3>
                            <p className='text-neutral/50 text-sm'>Perfect for getting started</p>
                        </div>
                        <h2 className='flex items-center'>
                            <h3 className='flex items-center text-2xl font-semibold'><BiDollar />0</h3>
                            <p className='text-neutral/50'>/month</p>
                        </h2>
                        <ul className='mt-5 pb-27'>
                            <li className='text-neutral/50 flex items-center gap-3'><FaCheck className='text-primary' />Access to 10 free tools</li>
                            <li className='text-neutral/50 flex items-center gap-3'><FaCheck className='text-primary' />Basic templates</li>
                            <li className='text-neutral/50 flex items-center gap-3'><FaCheck className='text-primary' />Community support</li>
                            <li className='text-neutral/50 flex items-center gap-3'><FaCheck className='text-primary' />1 project per month</li>
                        </ul>
                        <button className='btn rounded-2xl text-white bg-primary flex flex-1 w-full'>Get Started Free</button>
                    </div>
                </div>

                <div className='bg-base-200 rounded-2xl bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white relative'>
                    <div className=' absolute -top-4 right-[42%]'><span className="badge badge-xs badge-warning">Most Popular</span></div>
                    <div className='p-6'>
                        <div className='mb-5'>
                            <h3 className='text-xl font-bold'>Pro</h3>
                            <p className='text-white text-sm'>Best for professionals</p>
                        </div>
                        <h2 className='flex items-center'>
                            <h3 className='flex items-center text-2xl font-semibold'><BiDollar />29</h3>
                            <p className='text-white'>/month</p>
                        </h2>
                        <ul className='mt-5 pb-20'>
                            <li className=' flex items-center gap-3 text-white'><FaCheck className='text-white' />Access to all premium tools</li>
                            <li className='text-white flex items-center gap-3'><FaCheck className='text-white' />Unlimited templates</li>
                            <li className='text-white flex items-center gap-3'><FaCheck className='text-white' />Priority support</li>
                            <li className='text-white flex items-center gap-3'><FaCheck className='text-white' />Unlimited projects</li>
                            <li className='text-white flex items-center gap-3'><FaCheck className='text-white' />Advanced analytics</li>
                        </ul>
                        <button className='btn rounded-2xl w-full flex flex-1 '>Get Started Free</button>
                    </div>
                </div>



                <div className='bg-base-200 rounded-2xl'>
                    <div className='p-6'>
                        <div className='mb-5'>
                            <h3 className='text-xl font-bold'>Enterprise</h3>
                            <p className='text-neutral/50 text-sm'>For teams and businesses</p>
                        </div>
                        <h2 className='flex items-center'>
                            <h3 className='flex items-center text-2xl font-semibold'><BiDollar />99</h3>
                            <p className='text-neutral/50'>/month</p>
                        </h2>
                        <ul className='mt-5 pb-14'>
                            <li className='text-neutral/50 flex items-center gap-3'><FaCheck className='text-primary' />Everything in Pro</li>
                            <li className='text-neutral/50 flex items-center gap-3'><FaCheck className='text-primary' />Team collaboration</li>
                            <li className='text-neutral/50 flex items-center gap-3'><FaCheck className='text-primary' />Custom integrations</li>
                            <li className='text-neutral/50 flex items-center gap-3'><FaCheck className='text-primary' />Dedicated support</li>
                            <li className='text-neutral/50 flex items-center gap-3'><FaCheck className='text-primary' />SLA guarantee</li>
                            <li className='text-neutral/50 flex items-center gap-3'><FaCheck className='text-primary' />Custom branding</li>
                        </ul>
                        <button className='btn rounded-2xl text-white bg-primary flex flex-1 w-full'>Get Started Free</button>
                    </div>
                </div>



            </div>

        </div>
    );
};

export default Pricing;