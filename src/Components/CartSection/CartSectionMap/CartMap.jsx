import React from 'react';
import { BiDollar } from 'react-icons/bi';

const CartMap = ({element,selectCart,setSelectCart}) => {
    
    const deleteHandleButton =(element)=>{
        const filterForDelete = selectCart.filter(selectCartElement => selectCartElement.name !== element.name)
        setSelectCart(filterForDelete)
    }


    return (
        <div className=' bg-base-300 p-5 rounded-2xl my-10'>
            <div className='flex justify-between items-center'>

                <div className='flex  items-center gap-3 mt-5'>
                    <img className='bg-white p-3 rounded-full' src={element.icon} alt="" />
                    <div>
                        <p className='font-semibold'>{element.name}</p>
                        <p className='flex items-center gap-1'><BiDollar />{element.price}</p>
                    </div>
                </div>
                <button onClick={()=>deleteHandleButton(element)} className='text-red-600 cursor-pointer'>Remove</button>

            </div>
            
        </div>
    );
};

export default CartMap;