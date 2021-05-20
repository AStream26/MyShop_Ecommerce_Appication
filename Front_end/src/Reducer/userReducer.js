import {USER_REQUEST,USER_SUCCESS,USER_FAIL,USER_UPDATE_FAIL} from './constants';

export const UserReducer = (state={},action)=>{

    switch(action.type){

        case USER_REQUEST:
            return {...state,
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
        case USER_UPDATE_FAIL:
          return {
              ...state,
              loading:false,
              error:action.payload
          }
        default:return state

    }

} 
