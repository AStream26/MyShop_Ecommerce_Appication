import {PLACEORDER_FAIL,PLACEORDER_SUCCESS,PLACEORDER_REQUEST,
        GETORDERBYID_FAIL,GETORDERBYID_REQUEST,GETORDERBYID_SUCCESS,
        ORDERPAY_REQUEST, ORDERPAY_SUCCESS, ORDERPAY_RESET, ORDERPAY_FAIL,
        GET_ALL_ORDER_FAIL,GET_ALL_ORDER_REQUEST,GET_ALL_ORDER_SUCCESS
    } from './constants';

export const OrderReducer = (state={},action)=>{
   switch(action.type){
       case PLACEORDER_REQUEST:
           return {
            ...state,
               loading:true
           }
        case PLACEORDER_SUCCESS:
            return{
                ...state,
                loading:false,
                success:true,
                orderid:action.payload
                }

        case PLACEORDER_FAIL:
            return {
                ...state,
                loading:false,
                error:action.payload
            }

        case GETORDERBYID_REQUEST:
            return{
                ...state,
                loading:true
            }
        case GETORDERBYID_SUCCESS:
            return {
                ...state,
                loading:false,
                currentOrder:action.payload
            }
        case GETORDERBYID_FAIL:
                return{
                    ...state,
                    loading:false,
                    error:action.payload
                }
        default:
            return state;
   }
}


export const PayReducer = (state={},action)=>{
    switch(action.type){
        case ORDERPAY_REQUEST:
            return {
                ...state,
                loading:true
            }
         case ORDERPAY_SUCCESS:
             return{
                ...state,
                 loading:false,
                 success:true
              
                 }
 
         case ORDERPAY_FAIL:
             return {
                ...state,
                 loading:false,
                 error:action.payload
             }
         
         case ORDERPAY_RESET:
             return{
                
             }
       
         default:
             return state;
    }
 }


 export const GetAllorder =(state={order:[]},action)=>{

    switch(action.type){
        case GET_ALL_ORDER_REQUEST:
            return {
                ...state,
                loading:true
            }
         case GET_ALL_ORDER_SUCCESS:
             return{
                 ...state,
                 loading:false,
                 success:true,
                 order:action.payload
              
                 }
 
         case GET_ALL_ORDER_FAIL:
             return {
                 ...state,
                 loading:false,
                 error:action.payload
             }
         
         default:
             return state;
    }
 }
 
