import React from 'react';

const Rating = () => {
    return (
        <div>
            <div className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] h-[20vh]'>
                <div className='w-8/12 mx-auto flex justify-between py-15'>
                    <div className='text-white space-y-2'>
                        <h2 className='font-bold text-4xl'>50K +</h2>
                        <p>Active Users</p>
                    </div>
                    <div className='text-white space-y-2'>
                        <h2 className='font-bold text-4xl'>50K +</h2>
                        <p>Active Users</p>
                    </div>
                    <div className='text-white space-y-2'>
                        <h2 className='font-bold text-4xl'>4.9</h2>
                        <p>Rating</p>
                    </div>
                </div>

            </div>
            <div className='mt-20'>
                <h2 className='text-center font-bold text-4xl'>Premium Digital Tools</h2>
                <p className='text-neutral/50 mt-5 text-center md:w-5/12 mx-auto'>Choose from our curated collection of premium digital products designed to boost your productivity and creativity.</p>
            </div>
        </div>
    );
};

export default Rating;