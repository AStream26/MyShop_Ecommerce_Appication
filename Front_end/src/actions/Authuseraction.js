import axios from 'axios';
import {LOGIN_USER_FAIL, LOGIN_USER_REQUEST, LOGIN_USER_SUCCESS} from '../Reducer/constants';
export const login = (email,password)=> async(dispatch)=>
    {
        try{
            dispatch({type:LOGIN_USER_REQUEST});

            const config = {
                headers:{
                    'Content-Type':'application/json'
                }
            }
         const {data}  = await axios.post('/api/v1/user/login',{email,password},config);

         localStorage.setItem('userInfo',JSON.stringify(data));

         dispatch({type:LOGIN_USER_SUCCESS,
                   payload:data});
         
        }catch(error){
           dispatch({ type:LOGIN_USER_FAIL,
                        payload:error.response && error.response.data.message
                        ?error.response.data.message
                        :error.response 
                    })
        }
    }
