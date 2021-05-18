
import {LOGIN_USER_REQUEST,LOGIN_USER_FAIL,LOGIN_USER_SUCCESS,USER_LOGOUT} from './constants';

export const UserLoginReducer = (state={ },action)=>{
    switch(action.type){
        
        case LOGIN_USER_REQUEST:
        return {loading:true}

        
        case LOGIN_USER_SUCCESS:
        return {
            loading:false,
            userInfo:action.payload
        }
        
        case LOGIN_USER_FAIL:
        return {
         loading:false,
         error:action.payload
        }
        
        case USER_LOGOUT:
            return{}
        
            default:
        return state;
    }
}

