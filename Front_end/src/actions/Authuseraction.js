import axios from 'axios';
import {LOGIN_USER_FAIL, LOGIN_USER_REQUEST, LOGIN_USER_SUCCESS,USER_FAIL,USER_LOGOUT, USER_REQUEST, USER_SUCCESS} from '../Reducer/constants';
export const login = (email,password)=> async(dispatch)=>
    {
        try{
            dispatch({type:LOGIN_USER_REQUEST});
         //   dispatch({type:USER_REQUEST});

            const config = {
                headers:{
                    'Content-Type':'application/json'
                }
            }

         const {data}  = await axios.post('/api/v1/user/login',{email,password},config);

         dispatch({type:LOGIN_USER_SUCCESS,
                   payload:data});
         dispatch({type:USER_SUCCESS,
                   payload:data.data})
      
        }catch(error){
            dispatch({ type:USER_FAIL,
                payload:(error.response && error.response.data.message)
                ?error.response.data.message
                :(error.response)?error.response:JSON.stringify(error) 
            })
         
           dispatch({ type:LOGIN_USER_FAIL,
                        payload:(error.response && error.response.data.message)
                        ?error.response.data.message
                        :(error.response)?error.response:JSON.stringify(error) 
                    })
        }
    }

    export const logout =()=> async (dispatch)=>{
        try{
           
            dispatch({type:USER_LOGOUT});
    
            const res = await axios({
                method:'GET',
                url:'/api/v1/user/logout'
            });

           
          //  console.log("akaka");
           window.location.assign('/');
            // if(res.data.status==='success'){
            // window.location.assign('/'); //reload from server side not from browser side
            // }
          
            localStorage.removeItem("userInfo");
            localStorage.removeItem("cartItem");
            sessionStorage.removeItem("USERDATA_");
            sessionStorage.removeItem('Address');
            sessionStorage.removeItem('Method')
            sessionStorage.removeItem('cartItems')
          
    
        }catch(err){
           // alert(err.response.data.message);
        }
    }


    export const Register = (name,email,password,confirmPassword)=>async(dispatch,getState)=>{

        try{
            const config = {
                headers:{
                    'Content-Type':'application/json'
                }
            }
            dispatch({type:LOGIN_USER_REQUEST});

            const {data} = await axios.post('/api/v1/user/signup',{name, email,password,confirmPassword },config);
            dispatch({type:LOGIN_USER_SUCCESS,
                payload:data});
            dispatch({type:USER_SUCCESS,
                      payload:data.data});

      //  sessionStorage.setItem('USERDATA_',JSON.stringify(data.data));

        }catch(error){
            dispatch({ type:LOGIN_USER_FAIL,
                payload:error.response && error.response.data.message
                ?error.response.data.message
                :error.response 
            })
        }

    }
