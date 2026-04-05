import React from 'react';
import { FaCartPlus } from 'react-icons/fa';
import CartMap from './CartSectionMap/CartMap';
import { BiDollar } from 'react-icons/bi';
import { toast } from 'react-toastify';


const Cart = ({ selectCart, setSelectCart }) => {

    const totalPrices = selectCart.reduce((sum, item) =>{
        return(sum + item.price)
    }, 0)

    const removeFromCart = ()=>{
        setSelectCart([])
        toast.error("You remove all")
    }

    return (
        <div>
            {selectCart.length === 0
                ? (<div className='flex justify-center flex-col items-center h-[40vh] border-2 border-secondary rounded-3xl my-15'>
                    <h2 className='text-9xl'><FaCartPlus /></h2>
                    <p className='font-semibold text-xl'> Nothing has been found </p>
                    <h2 className='font-bold text-2xl'> Go and Select Some </h2>
                </div>)
                : <div className='border-2 border-primary-content p-10 rounded-3xl mt-10'>
                    <h3 className='text-2xl font-bold mb-5'>Your Cart</h3>
                    <div>
                        {selectCart.map((element, ind) => <CartMap element={element} selectCart={selectCart} setSelectCart={setSelectCart} key={ind}></CartMap>)}
                    </div>
                    <div className='flex justify-between items-center'>
                        <p className='text-neutral/50'>Total</p>
                        <h2 className='text-xl font-semibold flex justify-between items-center'> <BiDollar /> {totalPrices}</h2>
                    </div>

                    <button onClick={removeFromCart} className='btn my-8 w-full rounded-xl bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white'>Proceed to Checkout</button>

                </div>



            }

            <div>

            </div>

        </div>
    );
};

export default Cart;