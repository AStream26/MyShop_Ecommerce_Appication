import {ADD_CART_ITEM_FAIL, ADD_CART_ITEM_REQUSET, ADD_CART_ITEM_SUCCESS, 
    ADD_SHIPPING_ADDRESS,ADD_TO_ORDER_ITEM,GET_CART_ITEM_FAIL,GET_CART_ITEM_REQUSET,
    GET_CART_ITEM_SUCCESS,REMOVE_CART_ITEM_FAIL,REMOVE_CART_ITEM_REQUSET,
    REMOVE_CART_ITEM_RESET,
    REMOVE_CART_ITEM_SUCCESS,SAVE_PAYMENT_METHOD,ADD_CART_ITEM_RESET} from './constants';

export const CartReducer = (state={},action)=>{
    
    switch(action.type){
       
case ADD_CART_ITEM_REQUSET:
    return {
        ...state,
        loading:true
    }
case ADD_CART_ITEM_SUCCESS:
    return{
        ...state,
        loading:false,
        success:true
    }
case ADD_CART_ITEM_FAIL:
    return {
        ...state,
        loading:false,
        success:false,
        error:action.payload
    }

case ADD_CART_ITEM_RESET:
    return{
       
    }


    default:return state;
      
}

}

export const removeItemCart = (state={},action)=>{
    switch(action.type){
        case REMOVE_CART_ITEM_REQUSET:
    return{
        ...state,
        loading:true
    }
case REMOVE_CART_ITEM_SUCCESS:
    return{
        ...state,
        loading:false,
        success:true
    }
case REMOVE_CART_ITEM_FAIL:
    return{
        ...state,
        loadingremove:false,
        successremove:false,
        error:action.payload
    }
case REMOVE_CART_ITEM_RESET:
    return{
        
    }


    default:return state;

    }
}


export const getCartItem = (state={},action)=>{
    switch(action.type){
        case GET_CART_ITEM_REQUSET:
    return {
        ...state,
        loading:true
    }
case GET_CART_ITEM_SUCCESS:
    return {
        ...state,
        loading:false,
        cartList:action.payload
    }
case GET_CART_ITEM_FAIL:
    return {
        ...state,
        loading:false,
       
        error:action.payload
    }

    default:return state;
    }
}


export const orderDetailReducer = (state={orderItems:[],shippingAddress:{}},action)=>{

    switch(action.type){
        case ADD_TO_ORDER_ITEM:
        return {
            ...state,
            orderItems:action.payload,
            
        }

        case ADD_SHIPPING_ADDRESS:
            return {
                ...state,
                shippingAddress:action.payload
            }
        case SAVE_PAYMENT_METHOD:
            return {
                ...state,
                paymentMethod:action.payload
            }

        default:
            return state;
    }
}