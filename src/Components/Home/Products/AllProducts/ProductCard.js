import axios from 'axios';
import React, { useEffect } from 'react';
import {useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { setProducts } from '../../../../redux/Actions/ProductAction';

const ProductCard = () => {
    const products = useSelector(state=>state.allProducts.product);
    const dispatch= useDispatch();
    console.log('comes form ', products);
    // const [id, name, catagory]= products[0];
    const fetchProducts=async()=>{
        const response = await axios.get('https://secure-mountain-47137.herokuapp.com/services').catch(error=>console.log(error.message));
        // console.log(response.data);
        dispatch(setProducts(response.data))
       
    }
    useEffect(()=>{
        fetchProducts();
    },[])
    return (
        <>
            {products.map(product=>(
           <div className=' border-2 m-3'>
              <div className='h-60'>
                 <div>
                     <img className='w-full h-32' src={product.image} alt=''/>
                 </div>
                 <div className='text-center text-white text-xl'>
                    <h1>{product.title} </h1>
                    <p>{product.catagory}</p>
                 </div>
                 <Link to={`/service/${product._id}`}>
                 <button>  
                     Details
                 </button>  
                 </Link>
            </div>
            </div>
            ))}
            </>
    );
};

export default ProductCard;