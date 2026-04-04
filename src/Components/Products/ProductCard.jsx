import React, { useState } from 'react';
import { FaDollarSign } from 'react-icons/fa';
import { IoMdCheckmark } from 'react-icons/io';
import { toast } from 'react-toastify';

const ProductCard = ({ data }) => {

    const [select, setSelect] = useState(false)
    const handleSelected = ()=>{
        setSelect(true)
        toast.success(`you select ${data.tag} packge `)
    }

    console.log(data.features)
    return (
        <div>
            <div className="card bg-base-100 shadow-sm">
                <div className="card-body">
                    <div className='flex justify-between'>
                        <div className={`badge badge-xs ${data.tag === "Best Seller" ? "badge-warning" : "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white"}`}>{data.tag}

                        </div>
                        <img className='pb-6' src={data.icon} alt="" />
                    </div>

                    <div className="flex justify-between">
                        <h2 className="text-3xl font-bold">{data.name}</h2>

                    </div>
                    <div>
                        {data.description}
                    </div>

                    <div>
                        <span className="text-xl flex items-center"> <FaDollarSign /> {data.price} / <p className='text-neutral/50 text-sm'>{data.period}</p></span>
                    </div>


                    <ul className="mt-6 flex flex-col gap-2 text-xs">

                        {
                            data.features.map((element, index) => <li className='flex items-center gap-2 ' key={index}> <IoMdCheckmark className='text-primary' />
                                {element}</li>)
                        }


                    </ul>
                    <div className="mt-6">
                        <button onClick={handleSelected} className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] btn w-full rounded-3xl text-white">{ select ? "You chose it" : "Buy Now"}</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;