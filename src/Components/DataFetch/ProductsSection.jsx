import React, { use, useState } from 'react';
import ProductCard from '../Products/ProductCard';

const ProductsSection = ({ fetchData }) => {
    const [productsCartButton, setProductsButtons] = useState(true)
    const res = use(fetchData)

    return (
        <div className='w-10/12 mx-auto'>
            <div className='flex justify-center items-center mt-10'>
                <button onClick={() => setProductsButtons(true)} className={`btn rounded-l-3xl ${productsCartButton ? "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white" : "bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent "}`}>Products</button>

                <button onClick={() => setProductsButtons(false)} className={`btn rounded-r-3xl ${!productsCartButton ? "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white" : "bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent "}`}>Cart(2)</button>
            </div>


            <div className={`${productsCartButton ? "grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 rounded-2xl shadow-7xl mt-10" : " "}`} >
                { productsCartButton ?
                    res.map(data => <ProductCard data={data} key={data.id}></ProductCard>)
                    : "hello"
                }
            </div>
        </div>
    );
};

export default ProductsSection;