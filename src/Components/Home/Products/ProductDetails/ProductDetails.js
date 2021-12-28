import axios from 'axios';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import { useNavigate } from 'react-router-dom';
import { selectedProducts , removedSelectedProduct} from '../../../../redux/Actions/ProductAction';

const ProductDetails = () => {
    const service= useSelector((state)=>state.product);
    const {serviceId} = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const fetchSingleProduct = async()=>{
        const response = await axios.get(`https://secure-mountain-47137.herokuapp.com/service/${serviceId}`).catch(error=>console.log(error.message));
        dispatch(selectedProducts(response.data));
        // console.log(response);
    }
    useEffect(()=>{
       if(serviceId && serviceId !== ' ') fetchSingleProduct();
       return ()=>{
           dispatch(removedSelectedProduct());
       }
    },[serviceId])
    console.log(service);
    return (
        <div className='h-96 text-center relative -z-0'>
            {Object.keys(service).length === 0? <div className='mt-10'>Loading..........</div>:
            (<div>
              <h1>The Product Id :  {serviceId}</h1>
                <div>
                   <img className='h-36 w-36 mx-auto' src={service.image} alt=""/>
                </div>
            </div>
            )}
            
            <button className=' absolute bottom-0' onClick={() => navigate(-1)}>go back</button>
        </div>
    );
};

export default ProductDetails;