import axios from 'axios';
import {ADD_CART_ITEM,ADD_SHIPPING_ADDRESS,ADD_TO_ORDER_ITEM,REMOVE_CART_ITEM,SAVE_PAYMENT_METHOD} from '../Reducer/constants';

export const AddItem = (id,qty)=>async (dispatch,getState)=>{
    try{
         
        const {data} = await axios.get(`/api/v1/product/${id}`);
        const item = data.doc;
        
         dispatch({
             type:ADD_CART_ITEM,
             payload:{
                 product_id:item._id,
                 name:item.name,
                 countInStock:item.countInStock,
                 qty,
                 image:item.image,
                 price:item.price
             }
         });
         localStorage.setItem('cartItem',JSON.stringify(getState().cart.cartItem));
       
 
    }catch(error){
       
    }
}

export const DeleteItem = (id)=> async (dispatch,getState) =>{
    dispatch({
        type:REMOVE_CART_ITEM,
        payload:id
    });

    localStorage.setItem('cartItem',JSON.stringify(getState().cart.cartItem));
}

export const Addproduct = (product)=>(dispatch)=>{
    dispatch({
        type:ADD_TO_ORDER_ITEM,
        payload:product
    });
   // let a = [product]
    localStorage.setItem('cartItems',JSON.stringify(product));
}


export const Addaddress = (address)=>(dispatch)=>{
    dispatch({
        type:ADD_SHIPPING_ADDRESS,
        payload:address
    });

    localStorage.setItem('Address',JSON.stringify(address));
}

export const PaymentMethod = (method)=>(dispatch)=>{
    dispatch({
        type:SAVE_PAYMENT_METHOD,
        payload:method
    });

    localStorage.setItem('Method',JSON.stringify(method));
}