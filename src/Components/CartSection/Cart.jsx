import React from 'react';
import { FaCartPlus } from 'react-icons/fa';
import CartMap from './CartSectionMap/CartMap';

const Cart = ({selectCart }) => {


    return (
        <div>
            {selectCart.length === 0
                ? (<div className='flex justify-center flex-col items-center h-[40vh] border-2 border-secondary rounded-3xl my-15'>
                    <h2 className='text-9xl'><FaCartPlus /></h2>
                    <p className='font-semibold text-xl'> Nothing has been found </p>
                    <h2 className='font-bold text-2xl'> Go and Select Some </h2>
                </div>)
                : selectCart.map((element,ind)=> <CartMap element={element} key={ind}></CartMap>)
                
                }

            <div>

            </div>

        </div>
    );
};

export default Cart;