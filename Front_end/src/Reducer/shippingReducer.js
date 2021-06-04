import {GET_SHIPPING_FAIL,GET_SHIPPING_REQUEST,GET_SHIPPING_SUCCESS} from './constants'

export const shippingReducer = (state={Address:[]},action)=>{

    switch(action.type){
        case GET_SHIPPING_REQUEST:
            return{
                ...state,
                loading:true,
            }
        case GET_SHIPPING_SUCCESS:
            return {
                ...state,
                loading:false,
                Address:action.payload
            }
        case GET_SHIPPING_FAIL:
            return{
                ...state,
                loading:false,
                error:action.payload
            }
        default:return state;

    }
}