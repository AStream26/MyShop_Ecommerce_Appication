import {USER_REQUEST,USER_SUCCESS,USER_FAIL,USER_UPDATE_FAIL, 
    USER_LOGOUT, USER_UPDATE_SUCCESS, USER_UPDATE_REQUEST, UPDATE_PASSWORD_REQUEST, 
    UPDATE_PASSWORD_SUCCESS, UPDATE_PASSWORD_FAIL, SETBACK,
    ADMIN_USER_FAIL,ADMIN_USER_REQUEST,ADMIN_USER_RESET,ADMIN_USER_SUCCESS,
     ADMIN_USER_DELETE_REQUEST, ADMIN_USER_DELETE_SUCCESS, ADMIN_USER_DELETE_FAIL,
      ADMIN_USER_GET_REQUEST, ADMIN_USER_GET_SUCCESS, ADMIN_USER_GET_FAIL,
      ADMIN_RESET_GET_USER,
      ADMIN_USER_UPADTE_REQUEST,
      ADMIN_USER_UPADTE_SUCCESS,
      ADMIN_USER_UPADTE_FAIL,RESET_ADMIN
} from './constants';

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


export const AdminReducer = (state={users:[],userbyID:{}},action)=>{
  
    switch(action.type){
        
        case ADMIN_USER_REQUEST:
            return {
                ...state,
                loading:true
            }
        case ADMIN_USER_SUCCESS:
            return{
                ...state,
                loading:false,
                users:action.payload
            }
        case ADMIN_USER_FAIL:
            return{
                ...state,
                loading:false,
                error:action.payload
            }
        case ADMIN_USER_RESET:
            return{
                users:[]
            }
        case ADMIN_USER_DELETE_REQUEST:
            return {
                ...state,
                deleting:true,
                success:false

            }

        case ADMIN_USER_DELETE_SUCCESS:
            return{
                ...state,
                deleting:false,
                 success:true
            }
        case ADMIN_USER_DELETE_FAIL:
                return{
                    ...state,
                    deleting:false,
                    error:action.payload,
                    success:false
                }
        case ADMIN_USER_GET_REQUEST:
            return {
                ...state,
                success:false,
                loading:true
            }
        case ADMIN_USER_GET_SUCCESS:
            return{
                ...state,
                loading:false,
                success:true,
                userbyID:action.payload
            }
        case ADMIN_USER_GET_FAIL:
                return{
                    ...state,
                    loading:false,
                    success:false,
                    error:action.payload
                }
        case ADMIN_RESET_GET_USER:
            return {
                ...state,
                userbyID:{}
            }
        case ADMIN_USER_UPADTE_REQUEST:
            return{
                ...state,
                loading1:true
            }
        case ADMIN_USER_UPADTE_SUCCESS:
            return{
                ...state,
                loading1:false,
                success1:true,
                userbyID:action.payload
            }
        case ADMIN_USER_UPADTE_FAIL:
            return{
                    ...state,
                    loading1:false,
                    success1:false,
                    error:action.payload
                }
        case RESET_ADMIN:
            return{
                ...state,
                success1:null
            }

        default:
            return state;
    }
}
