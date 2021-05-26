import axios from 'axios';
import {PLACEORDER_FAIL,PLACEORDER_SUCCESS,PLACEORDER_REQUEST, GETORDERBYID_REQUEST, GETORDERBYID_FAIL, GETORDERBYID_SUCCESS} from '../Reducer/constants';

export const placeorder = (data1)=>async(dispatch)=>{
    
   try{
    dispatch({type:PLACEORDER_REQUEST});
    const config = {
        headers:{
            'Content-Type':'application/json'
        }
    }
    const {data} = await axios.post('/api/v1/order/placeorder',{
        OrderDetail :data1
    },config);
    // console.log(data.order);
    dispatch({type:PLACEORDER_SUCCESS,
              payload:data.orderid
             })
   }catch(error){
       dispatch({
           type:PLACEORDER_FAIL,
           payload:error.response && error.response.data.message
           ?error.response.data.message
           :error.response 
       })
   }
}

export const getOrderById = (id)=>async(dispatch)=>{
    
    try{
      
      dispatch({type:GETORDERBYID_REQUEST});

     const {data} = await axios.get(`/api/v1/order/${id}`);
     // console.log(data.order);
     dispatch({type:GETORDERBYID_SUCCESS,
               payload:data.order
              })
    }catch(error){
        dispatch({
            type:GETORDERBYID_FAIL,
            payload:error.response && error.response.data.message
            ?error.response.data.message
            :error.response 
        })
    }
 }