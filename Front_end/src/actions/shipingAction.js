import axios from 'axios';
import { GET_SHIPPING_FAIL, GET_SHIPPING_REQUEST, GET_SHIPPING_SUCCESS } from '../Reducer/constants';

export const getShippingAddress = ()=>async (dispatch)=>{
    try{

        dispatch({type:GET_SHIPPING_REQUEST});
        const {data} = await axios.get('/api/v1/user/shipping');
        dispatch({
            type:GET_SHIPPING_SUCCESS,
            payload:data.address
        })

    }catch(error){
        
        dispatch({type:GET_SHIPPING_FAIL,
            payload:error.response && error.response.data.message
            ?error.response.data.message
            :'Server Error'
        })
    }
}