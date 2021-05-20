import axios from 'axios';
import {USER_FAIL, USER_REQUEST, USER_SUCCESS, USER_UPDATE_FAIL} from '../Reducer/constants';

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
         console.log(data1.name);
         console.log(data1.email);
     dispatch({type:USER_REQUEST});
     
     const {data} = await axios.patch('/api/v1/user/updateuser',{
        name:data1.name,
        email:data1.email
     });
     dispatch({type:USER_SUCCESS,
              payload:data.doc})
     
 
    }catch(error){
        dispatch({type:USER_UPDATE_FAIL,
                 payload:error.response && error.response.data.message
                 ?error.response.data.message
                 :error.response })
 
    }
 }
 

