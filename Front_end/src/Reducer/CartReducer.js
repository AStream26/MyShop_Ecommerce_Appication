import {ADD_CART_ITEM,ADD_SHIPPING_ADDRESS,ADD_TO_ORDER_ITEM,REMOVE_CART_ITEM,SAVE_PAYMENT_METHOD} from './constants';

export const CartReducer = (state={cartItem:[]},action)=>{
    
    switch(action.type){
        case ADD_CART_ITEM:
            const item = action.payload;
          //  console.log(item);
            const existitem = state.cartItem.find(x=>x.product === item.product );
           
            if(existitem){
             // console.log(exist);
                return {
                    ...state,
                    cartItem:state.cartItem.map(item1=>item1.product === existitem.product ?item:item1)
                }

            }else{
                return {
                    ...state,
                    cartItem:[...state.cartItem,item]
                }
            }
        case REMOVE_CART_ITEM:
            return {
                ...state,
                cartItem:state.cartItem.filter((i)=>i.product !== action.payload)
            }

        default:
            return state
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