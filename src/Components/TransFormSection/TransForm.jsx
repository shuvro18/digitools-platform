import React, { useState } from 'react';

const TransForm = () => {

    const [button, setButton] = useState(true)

    return (
        <div>
            <div className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] h-[40vh] space-y-5'>
                <h2 className='text-3xl text-white text-center pt-20'>Ready to Transform Your Workflow?</h2>
                <p className='text-center text-white text-sm lg:w-4/12 mx-auto'>Join thousands of professionals who are already using Digitools to work smarter.Start your free trial today.</p>


                <div className='flex gap-3 justify-center items-center pt-5'>
                    <button onClick={()=>setButton(true)} className={`${ button ? "btn rounded-2xl" : "btn bg-transparent rounded-2xl border-white text-white"}`}>Explore Products</button>
                    <button onClick={()=>setButton(false)} className={`${ !button ? "btn rounded-2xl" : "btn bg-transparent rounded-2xl border-white text-white"}`}>View Pricing</button>
                </div>
                <p className='text-white text-center text-sm'>14-day free trial • No credit card required • Cancel anytime</p>
            </div>
        </div>
    );
};

export default TransForm;