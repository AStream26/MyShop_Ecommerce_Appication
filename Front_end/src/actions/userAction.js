import axios from 'axios';
import {SETBACK, UPDATE_PASSWORD_FAIL, UPDATE_PASSWORD_REQUEST, UPDATE_PASSWORD_SUCCESS, USER_FAIL, USER_LOGOUT, USER_REQUEST, USER_SUCCESS, USER_UPDATE_FAIL,USER_UPDATE_REQUEST,USER_UPDATE_SUCCESS} from '../Reducer/constants';

export const getuserData  = ()=>async(dispatch)=>{

   try{
    dispatch({type:USER_REQUEST});
    
    const {data} = await axios.get('/api/v1/user/profile');
    dispatch({type:USER_SUCCESS,
             payload:data.doc})
    

   }catch(error){
       dispatch({type:USER_FAIL,
                payload:error.response && error.response.data.message
                ?error.response.data.message
                :error.response })

   }
}


export const upadteuserData  = (data1)=>async(dispatch)=>{

    try{
        
     dispatch({type:USER_UPDATE_REQUEST});
     const config = {
        headers:{
            'Content-Type':'application/json'
        }
    }
     const {data} = await axios.patch('/api/v1/user/updateuser',{
        name:data1.name,
        email:data1.email
     },config);
    // console.log(data);
     dispatch({type:USER_UPDATE_SUCCESS,
              payload:data.doc})
    
    localStorage.setItem('userData',JSON.stringify(data.doc));
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

        const {data} = await axios.patch('/api/v1/user/updatepassword',{
            password,newPassword,confirmPassword
        })

        dispatch({
            type:UPDATE_PASSWORD_SUCCESS
        })

    }catch(error){
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