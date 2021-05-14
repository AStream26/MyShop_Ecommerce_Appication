import  {PRODUCT_LIST_FAIL,PRODUCT_LIST_REQUEST,PRODUCT_LIST_SUCCESS} from '../Reducer/constants';
import axios from 'axios';
export const listProduct = ()=> async (dispatch)=>{
    try{
        dispatch({type:PRODUCT_LIST_REQUEST});
        const {data} = await axios.get('/api/v1/product');
        dispatch({type:PRODUCT_LIST_SUCCESS,payload:data.products});

    }catch(error){
        dispatch({type:PRODUCT_LIST_FAIL,
        payload:error.response && error.response.data.message
        ?error.response.data.message
        :error.response
        });
    }
}