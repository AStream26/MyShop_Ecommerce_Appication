import axios from 'axios';
import {PLACEORDER_FAIL,PLACEORDER_SUCCESS,PLACEORDER_REQUEST,
     GETORDERBYID_REQUEST, GETORDERBYID_FAIL, GETORDERBYID_SUCCESS,
      ORDERPAY_SUCCESS, ORDERPAY_REQUEST, ORDERPAY_FAIL, 
      GET_ALL_ORDER_FAIL,GET_ALL_ORDER_REQUEST, GET_ALL_ORDER_SUCCESS, DELIVER_REQUEST, DELIVER_SUCCESS, DELIVER_FAIL} from '../Reducer/constants';

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

 export const payorder= (id,paymentResult)=>async(dispatch)=>{
    
    try{
        const config = {
            headers:{
                'Content-Type':'application/json'
            }
        }
      
      dispatch({type:ORDERPAY_REQUEST});

     const {data} = await axios.patch(`/api/v1/order/${id}/pay`,paymentResult,config);
     // console.log(data.order);
     dispatch({type:ORDERPAY_SUCCESS,
               payload:data
              })
    }catch(error){
        dispatch({
            type:ORDERPAY_FAIL,
            payload:error.response && error.response.data.message
            ?error.response.data.message
            :error.response 
        })
    }
 }


 export const getALLorder = () =>async(dispatch)=>{
     try{
         dispatch({type:GET_ALL_ORDER_REQUEST});

         const {data} = await axios.get('/api/v1/order/myorders');
         dispatch({
             type:GET_ALL_ORDER_SUCCESS,
             payload:data.order
         })

     }catch(error){
        dispatch({
            type:GET_ALL_ORDER_FAIL,
            payload:error.response && error.response.data.message
            ?error.response.data.message
            :error.response 
        })
     }
 }

 export const getALLorderAdmin = (search='',page=1,limit=10) =>async(dispatch)=>{
    try{
        dispatch({type:GET_ALL_ORDER_REQUEST});

        const {data} = await axios.get(`/api/v1/order/?page=${page}&limit=${limit}`);
        dispatch({
            type:GET_ALL_ORDER_SUCCESS,
            payload:data.order
        })

    }catch(error){
       dispatch({
           type:GET_ALL_ORDER_FAIL,
           payload:error.response && error.response.data.message
           ?error.response.data.message
           :error.response 
       })
    }
}
export const deliver = (id)=>async(dispatch)=>{

    try{
        dispatch({type:DELIVER_REQUEST});

        const {data} = await axios.get(`/api/v1/order/${id}/deliver`);
        dispatch({
            type:DELIVER_SUCCESS,
            
        })

    }catch(error){
       dispatch({
           type:DELIVER_FAIL,
           payload:error.response && error.response.data.message
           ?error.response.data.message
           :error.response 
       })
    }
       
}