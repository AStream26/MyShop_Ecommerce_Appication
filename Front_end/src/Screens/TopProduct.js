import React, { useEffect } from 'react'
import { Carousel, Image } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import {GetTopProduct} from '../actions/productAction';
import Indicator  from '../components/Indicator/indicator';
import CartLoader from '../components/utilities_/cartloader';
const TopProduct = () => {

    let dispatch = useDispatch();

    let {product,error,loading} = useSelector(state=>state.TopProduct);
    useEffect(()=>{
      if(!loading)
      dispatch(GetTopProduct())
    },[])
    return loading?<CartLoader  />
                  :error? <Indicator message={error} color='alert-danger' />
           : <>
             <Carousel pause='hover'>
               {
                   product.map(product=>(
                       <Carousel.Item key={product.id} className='bg-dark'>
                       <Link to={`/product/${product._id}`}>
                       <Image src={`/public/img/Product/${product.image[0]}`} alt={product.name} />
                       <Carousel.Caption>
                           <h2>{product.name}(₹{product.price})</h2>
                       </Carousel.Caption>
                       </Link>
                       </Carousel.Item>
                   ))
               }
             </Carousel>
            </>
            
}

export default TopProduct
