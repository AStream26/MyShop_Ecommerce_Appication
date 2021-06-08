import  {PRODUCT_LIST_FAIL,PRODUCT_LIST_REQUEST,PRODUCT_LIST_SUCCESS,
PRODUCT_ITEM_SUCCESS,PRODUCT_ITEM_REQUEST,PRODUCT_ITEM_FAIL,
 ADMIN_EDIT_PRODUCT_REQUEST, ADMIN_EDIT_PRODUCT_SUCCESS, 
 ADMIN_EDIT_PRODUCT_FAIL,
 ADMIN_UPLOAD_PHOTO_REQUEST,
 ADMIN_UPLOAD_PHOTO_FAIL,
 ADMIN_UPLOAD_PHOTO_SUCCESS,
 CREATE_REVIEW_REQUEST,
 CREATE_REVIEW_SUCCESS,
 CREATE_REVIEW_FAIL} from '../Reducer/constants';
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

export const CreateProduct = (data1)=>async(dispatch)=>{
    try{
       // console.log(data1);
        dispatch({type:ADMIN_EDIT_PRODUCT_REQUEST});
        const {data} = await axios.post(`/api/v1/product/`,data1);
        dispatch({type:ADMIN_EDIT_PRODUCT_SUCCESS,
                  payload:data.doc._id});  
    }
    catch(error){
        dispatch({type:ADMIN_EDIT_PRODUCT_FAIL,
            payload:error.response && error.response.data.message
            ?error.response.data.message
            :`Server Error`
            });
    }
}

export const deleteproduct = (id)=>async(dispatch)=>{
    try{
        dispatch({type:ADMIN_EDIT_PRODUCT_REQUEST});
        const {data} = await axios.delete(`/api/v1/product/${id}`);
        dispatch({type:ADMIN_EDIT_PRODUCT_SUCCESS});  
    }
    catch(error){
        dispatch({type:ADMIN_EDIT_PRODUCT_FAIL,
            payload:error.response && error.response.data.message
            ?error.response.data.message
            :`Server Error`
            });
    }
}

export const editproduct = (data1,id)=>async(dispatch)=>{
    try{
        dispatch({type:ADMIN_EDIT_PRODUCT_REQUEST});
        const {data} = await axios.patch(`/api/v1/product/${id}`,data1);
        dispatch({type:ADMIN_EDIT_PRODUCT_SUCCESS});  
    }
    catch(error){
        dispatch({type:ADMIN_EDIT_PRODUCT_FAIL,
            payload:error.response && error.response.data.message
            ?error.response.data.message
            :`Server Error`
            });
    }
}

export const uploadPhoto = (data1,id)=>async (dispatch)=>{
    try{
        dispatch({type:ADMIN_UPLOAD_PHOTO_REQUEST});
        let config = {
            headers:{
                'Content-Type':'multipart/form-data'
            }
        }
        const {data} = await axios.patch(`/api/v1/product/${id}`,data1,config);
        dispatch({type:ADMIN_UPLOAD_PHOTO_SUCCESS});
    }catch(error){
        dispatch({type:ADMIN_UPLOAD_PHOTO_FAIL,
            payload:error.response && error.response.data.message
            ?error.response.data.message
            :`Server Error`
            });

    }
}


export const createReview = (data1)=>async(dispatch)=>{
    let {title,comment,recommend,rating,id} = data1;
    console.log(data1);
    try{
        dispatch({type:CREATE_REVIEW_REQUEST});
        let config = {
            headers:{
                'Content-Type':'application/json'
            }
        }
        const {data} = await axios.post(`/api/v1/product/${id}/review`,{
            title,comment,recommend,rating
        },config);
        dispatch({type:CREATE_REVIEW_SUCCESS});
    }catch(error){
        dispatch({type:CREATE_REVIEW_FAIL,
            payload:error.response && error.response.data.message
            ?error.response.data.message
            :`Server Error`
            });

    }
}