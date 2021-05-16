import axios from 'axios';
import {ADD_CART_ITEM,REMOVE_CART_ITEM} from '../Reducer/constants';

export const AddItem = (id,qty)=>async (dispatch,getState)=>{
    try{
         
        const {data} = await axios.get(`/api/v1/product/${id}`);
        const item = data.products;
        
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