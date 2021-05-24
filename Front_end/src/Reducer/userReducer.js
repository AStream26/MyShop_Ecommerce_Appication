import {USER_REQUEST,USER_SUCCESS,USER_FAIL,USER_UPDATE_FAIL, USER_LOGOUT, USER_UPDATE_SUCCESS, USER_UPDATE_REQUEST, UPDATE_PASSWORD_REQUEST, UPDATE_PASSWORD_SUCCESS, UPDATE_PASSWORD_FAIL, SETBACK} from './constants';

export const UserReducer = (state={},action)=>{

    switch(action.type){

        case USER_REQUEST:
            return {
                loading:true}
        case USER_SUCCESS:
            return {
                
                loading:false,
                userData:action.payload
            }
        case USER_FAIL:
            return{
            
                loading:false,
                error:action.payload
            }
        case USER_UPDATE_REQUEST:
            return {
                ...state,
                success:false,
                loading:true
            }
        case USER_UPDATE_SUCCESS:
            return {

                loading:false,
                success:true,
                userData:action.payload
            }
        case USER_UPDATE_FAIL:
          return {
              ...state,
              success:false,
              loading:false,
              error:action.payload
          }
          case UPDATE_PASSWORD_REQUEST:
              return {
                  ...state,
                  loading:true,
                
              }

          case UPDATE_PASSWORD_SUCCESS:
              return {
                  ...state,
                  loading:false,
                  success:true
              }
           case UPDATE_PASSWORD_FAIL:
               return {
                   ...state,
                   loading:false,
                   success:false,
                   error:action.payload
               }
           case SETBACK:
               return {
                ...state,
                success:null,
                error:null
            }

        case USER_LOGOUT:
            return {

            }
        default:return state

    }

} 
