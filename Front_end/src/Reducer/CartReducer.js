import {ADD_CART_ITEM,REMOVE_CART_ITEM} from './constants';

export const CartReducer = (state={cartItem:[]},action)=>{
    
    switch(action.type){
        case ADD_CART_ITEM:
            const item = action.payload;
           
            const existitem = state.cartItem.find(x=>x.product_id === item.product_id );
           
            if(existitem){
        
                return {
                    ...state,
                    cartItem:state.cartItem.map(item=>item.product_id === existitem.product_id ?existitem:item)
                }

            }else{
                return {
                    ...state,
                    cartItem:[...state.cartItem,item]
                }
            }

        default:
            return state
    }

}
