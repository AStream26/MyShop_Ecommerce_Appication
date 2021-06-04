import axios from 'axios';

import {ADMIN_USER_DELETE_FAIL, ADMIN_USER_DELETE_REQUEST, ADMIN_USER_DELETE_SUCCESS,
     ADMIN_USER_FAIL, ADMIN_USER_GET_FAIL, ADMIN_USER_GET_REQUEST, ADMIN_USER_GET_SUCCESS,
      ADMIN_USER_REQUEST, ADMIN_USER_SUCCESS, SETBACK, UPDATE_PASSWORD_FAIL, UPDATE_PASSWORD_REQUEST,
       UPDATE_PASSWORD_SUCCESS, USER_FAIL, USER_LOGOUT, USER_REQUEST, USER_SUCCESS, USER_UPDATE_FAIL,
       USER_UPDATE_REQUEST,USER_UPDATE_SUCCESS,ADMIN_USER_UPADTE_FAIL,ADMIN_USER_UPADTE_REQUEST,ADMIN_USER_UPADTE_SUCCESS} from '../Reducer/constants';

export const getuserData  = ()=>async(dispatch)=>{

   try{
    dispatch({type:USER_REQUEST});
    const config = {
        headers:{
            'Content-Type':'application/json'
        }
    }
    
    const {data} = await axios.get('/api/v1/user/profile',config);
   // console.log(data);
    dispatch({type:USER_SUCCESS,
             payload:data.doc});
   
    
   }catch(error){
       dispatch({type:USER_FAIL,
                payload:error.response && error.response.data.message
                ?error.response.data.message
                :'Server Error'
            })

   }
}


export const upadteuserData  = (data1)=>async(dispatch)=>{
  //  console.log(data1);
    try{
        
     dispatch({type:USER_UPDATE_REQUEST});
     const config = {
        headers:{
            'Content-Type':'application/json'
        }
    }
    let Data ;
    if('shippingAddress' in data1){
        const {data} = await axios.patch('/api/v1/user/updateuser',{
               shippingAddress:data1.shippingAddress
        },config)
        Data = data;
    }else{
        const config1 = {
            headers:{
                'Content-Type':'multipart/form-data'
            }
        }
        const {data} = await axios.patch('/api/v1/user/updateuser',data1.formData,config1);
         Data = data;
    }
   
    // console.log(data);
     dispatch({type:USER_UPDATE_SUCCESS,
              payload:Data.doc})
    
  
   sessionStorage.setItem('USERDATA_',JSON.stringify(Data.doc));
    }catch(error){

        //console.log(error.response);
        dispatch({type:USER_UPDATE_FAIL,
                 payload:error.response && error.response.data.message
                 ?error.response.data.message
                 :error.response })
 
    }
 }




 export const updatePassword = ({password,newPassword,confirmPassword}) => async(dispatch)=>{
    try{
        dispatch({type:UPDATE_PASSWORD_REQUEST});

        const config = {
            headers:{
                'Content-Type':'application/json'
            }
        }


        const {data} = await axios.patch('/api/v1/user/updatepassword',{
            password,newPassword,confirmPassword
        },config)

        dispatch({
            type:UPDATE_PASSWORD_SUCCESS
        })

    }catch(error){
        console.log(error);
        dispatch({type:UPDATE_PASSWORD_FAIL,
            payload:error.response && error.response.data.message
            ?error.response.data.message
            :error.response })
    }
 }

 export const setback = ()=>(dispatch)=>{
     dispatch({
         type:SETBACK
     })
 }


 export const getAllusers = ()=>async(dispatch)=>{

  try{
    dispatch({type:ADMIN_USER_REQUEST});

    const {data} = await axios.get('/api/v1/user/');

    dispatch({type:ADMIN_USER_SUCCESS,
             payload:data.doc});


  }catch(error){
      dispatch({
          type:ADMIN_USER_FAIL,
          payload:error.response && error.response.data.message
          ?error.response.data.message
          :error.response 
      })

  }

 }

 export const deleteuser = (id)=>async(dispatch)=>{

    try{
      dispatch({type:ADMIN_USER_DELETE_REQUEST});
  
      const {data} = await axios.delete(`/api/v1/user/${id}`);
  
      dispatch({type:ADMIN_USER_DELETE_SUCCESS,
              });
  
  
    }catch(error){
        dispatch({
            type:ADMIN_USER_DELETE_FAIL,
            payload:error.response && error.response.data.message
            ?error.response.data.message
            :error.response 
        })
  
    }
  
   }

   export const getuserByID = (id)=>async(dispatch)=>{

    try{
      dispatch({type:ADMIN_USER_GET_REQUEST});
  
      const {data} = await axios.get(`/api/v1/user/${id}`);
  
      dispatch({type:ADMIN_USER_GET_SUCCESS,
                payload:data.doc
              });
  
  
    }catch(error){
        dispatch({
            type:ADMIN_USER_GET_FAIL,
            payload:error.response && error.response.data.message
            ?error.response.data.message
            :error.response 
        })
  
    }
  
   }

export const updateuser_admin = (data1,id)=>async(dispatch)=>{
    
    
    
    try{
      //  console.log(data);

      dispatch({type:ADMIN_USER_UPADTE_REQUEST});
      const config = {
        headers:{
            'Content-Type':'application/json'
        }
    }

  
      const {data} = await axios.patch(`/api/v1/user/${id}`,data1,config);
  
      dispatch({type:ADMIN_USER_UPADTE_SUCCESS,
                payload:data.doc
              });
  
  
    }catch(error){
        dispatch({
            type:ADMIN_USER_UPADTE_FAIL,
            payload:error.response && error.response.data.message
            ?error.response.data.message
            :error.response 
        })
  
    }
  
   }


