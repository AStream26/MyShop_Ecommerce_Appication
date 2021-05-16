import {ADD_CART_ITEM,REMOVE_CART_ITEM} from './constants';

export const CartReducer = (state={cartItem:[]},action)=>{
    
    switch(action.type){
        case ADD_CART_ITEM:
            const item = action.payload;
          //  console.log(item);
            const existitem = state.cartItem.find(x=>x.product_id === item.product_id );
           
            if(existitem){
             // console.log(exist);
                return {
                    ...state,
                    cartItem:state.cartItem.map(item1=>item1.product_id === existitem.product_id ?item:item1)
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
                cartItem:state.cartItem.filter((i)=>i.product_id !== action.payload)
            }

        default:
            return state
    }

}
