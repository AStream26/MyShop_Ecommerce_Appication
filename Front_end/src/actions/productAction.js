import  {PRODUCT_LIST_FAIL,PRODUCT_LIST_REQUEST,PRODUCT_LIST_SUCCESS,
PRODUCT_ITEM_SUCCESS,PRODUCT_ITEM_REQUEST,PRODUCT_ITEM_FAIL} from '../Reducer/constants';
import axios from 'axios';
export const listProduct = ()=> async (dispatch)=>{
    try{
        dispatch({type:PRODUCT_LIST_REQUEST});
       
        const {data} = await axios.get('/api/v1/product');
        dispatch({type:PRODUCT_LIST_SUCCESS,payload:data.doc});  
 
    }catch(error){
       
        dispatch({type:PRODUCT_LIST_FAIL,
        payload:error.response && error.response.data.message
        ?error.response.data.message
        :`${JSON.stringify(error.response)}`
        });
    }
}

export const GetProduct = (id)=> async (dispatch)=>{
    try{
        dispatch({type:PRODUCT_ITEM_REQUEST});
        const {data} = await axios.get(`/api/v1/product/${id}`);
        dispatch({type:PRODUCT_ITEM_SUCCESS,payload:data.doc});  
 
    }catch(error){
        dispatch({type:PRODUCT_ITEM_FAIL,
        payload:error.response && error.response.data.message
        ?error.response.data.message
        :`Server Error`
        });
    }
}