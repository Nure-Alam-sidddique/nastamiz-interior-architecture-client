import React from 'react';
import ProductCard from '../Products/AllProducts/ProductCard';

const services = () => {
    return (
        <div id='services' className='h-auto bg-yellow-600 pt-12'>
            <h1 className='text-2xl text-center'>Services page</h1>
            <div className='grid grid-cols-4'>
                <ProductCard></ProductCard>
            </div>
        </div>
    );
};

export default services;