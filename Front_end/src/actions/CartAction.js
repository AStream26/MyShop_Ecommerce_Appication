import axios from 'axios';
import {ADD_SHIPPING_ADDRESS,ADD_TO_ORDER_ITEM,SAVE_PAYMENT_METHOD,ADD_CART_ITEM_REQUSET,ADD_CART_ITEM_FAIL,ADD_CART_ITEM_SUCCESS, GET_CART_ITEM_REQUSET, GET_CART_ITEM_SUCCESS, GET_CART_ITEM_FAIL, REMOVE_CART_ITEM_REQUSET, REMOVE_CART_ITEM_SUCCESS, REMOVE_CART_ITEM_FAIL} from '../Reducer/constants';

export const AddItem = ({product:id,quantity})=>async (dispatch,getState)=>{
    try{
         dispatch({type:ADD_CART_ITEM_REQUSET});
         let product = {
            product:id,quantity
        }
        
             const {data} = await axios.post(`/api/v1/user/cart/`,{
                 product
             });
        
        
         dispatch({type:ADD_CART_ITEM_SUCCESS});
         
       
 
    }catch(error){
        dispatch({
            type:ADD_CART_ITEM_FAIL,
            payload:error.response && error.response.data.message
            ?error.response.data.message
            :error.response 
        })
    }
}

export const RemoveItem = (id)=>async (dispatch,getState)=>{
    try{
         dispatch({type:REMOVE_CART_ITEM_REQUSET});
           await axios.delete(`/api/v1/user/cart/${id}`)
        
        
         dispatch({type:REMOVE_CART_ITEM_SUCCESS});
        
       
     
    }catch(error){
        dispatch({
            type:REMOVE_CART_ITEM_FAIL,
            payload:error.response && error.response.data.message
            ?error.response.data.message
            :error.response 
        })
    }
}



export const getCartList = ()=> async (dispatch)=>{

    try{
        dispatch({type:GET_CART_ITEM_REQUSET});
       
            const {data} = await axios.get(`/api/v1/user/cart/`);
       
        dispatch({type:GET_CART_ITEM_SUCCESS,payload:data.cart[0]});
        
      

   }catch(error){
       dispatch({
           type:GET_CART_ITEM_FAIL,
           payload:error.response && error.response.data.message
           ?error.response.data.message
           :error.response 
       })
   }

}

export const DeleteItem = (id)=> async (dispatch,getState) =>{
  

    localStorage.setItem('cartItem',JSON.stringify(getState().cart.cartItem));
}

export const Addproduct = (product)=>(dispatch)=>{
    dispatch({
        type:ADD_TO_ORDER_ITEM,
        payload:product
    });
   // let a = [product]
   sessionStorage.setItem('cartItems',JSON.stringify(product));
}


export const Addaddress = (address)=>(dispatch)=>{
    dispatch({
        type:ADD_SHIPPING_ADDRESS,
        payload:address
    });

  sessionStorage.setItem('Address',JSON.stringify(address));
}

export const PaymentMethod = (method)=>(dispatch)=>{
    dispatch({
        type:SAVE_PAYMENT_METHOD,
        payload:method
    });

    sessionStorage.setItem('Method',JSON.stringify(method));
}