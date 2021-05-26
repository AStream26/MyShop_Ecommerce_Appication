import {PLACEORDER_FAIL,PLACEORDER_SUCCESS,PLACEORDER_REQUEST,GETORDERBYID_FAIL,GETORDERBYID_REQUEST,GETORDERBYID_SUCCESS} from './constants';

export const OrderReducer = (state={},action)=>{
   switch(action.type){
       case PLACEORDER_REQUEST:
           return {
               loading:true
           }
        case PLACEORDER_SUCCESS:
            return{
                loading:false,
                success:true,
                orderid:action.payload
                }

        case PLACEORDER_FAIL:
            return {
                loading:false,
                error:action.payload
            }

        case GETORDERBYID_REQUEST:
            return{
                loading:true
            }
        case GETORDERBYID_SUCCESS:
            return {
                loading:false,
                currentOrder:action.payload
            }
        case GETORDERBYID_FAIL:
                return{
                    loading:false,
                    error:action.payload
                }
        default:
            return state;
   }
}

