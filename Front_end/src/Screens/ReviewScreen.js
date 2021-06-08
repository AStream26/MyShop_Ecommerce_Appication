import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux'
import { GetProduct } from '../actions/productAction';
import Indicator from '../components/Indicator/indicator';
import Review from '../components/Reviews/ReviewScreen';
import CartLoader from '../components/utilities_/cartloader';
const ReviewScreen = (props) => {
    const {loading,product,error} = useSelector(state=>state.productItem)
    const dispatch = useDispatch();
    useEffect(()=>{
       if(Object.keys(product).length == 0){
        if(!loading)
        dispatch(GetProduct(props.match.params.id)); 
       }
    },[])
    return loading?<CartLoader color='grey'  opacity='0.7'  />
    :error?<Indicator message={error} />:  (
        <Container>
        
          {
              product?<>
                 {
                product?.reviews?.length>0?<Review product={product}  />
                                          :<h3>No Review Yet</h3>
        }
              </>:null
          }
        </Container>
    )
}

export default ReviewScreen
