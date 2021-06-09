import  {PRODUCT_LIST_FAIL,PRODUCT_LIST_REQUEST,PRODUCT_LIST_SUCCESS,
       PRODUCT_ITEM_FAIL,PRODUCT_ITEM_REQUEST,PRODUCT_ITEM_SUCCESS,
        ADMIN_EDIT_PRODUCT_REQUEST, ADMIN_EDIT_PRODUCT_SUCCESS, ADMIN_EDIT_PRODUCT_FAIL, 
        ADMIN_EDIT_PRODUCT_RESET, 
        PRODUCT_ITEM_RESET,ADMIN_UPLOAD_PHOTO_FAIL,ADMIN_UPLOAD_PHOTO_REQUEST,ADMIN_UPLOAD_PHOTO_SUCCESS, ADMIN_USER_DELETE_REQUEST, CREATE_REVIEW_SUCCESS, CREATE_REVIEW_FAIL, CREATE_REVIEW_RESET, CREATE_REVIEW_REQUEST, GET_TOP_PRODUCT_REQUEST, GET_TOP_PRODUCT_SUCCESS, GET_TOP_PRODUCT_FAIL} from './constants';

export const productListReducer = (state={ product:[] },action)=>{
  
    switch(action.type){
        case PRODUCT_LIST_REQUEST:
            return {
                ...state,
                loading:true,
               
            }
        case PRODUCT_LIST_SUCCESS:
            return {
                ...state,
                loading:false,
                product:action.payload}
        case PRODUCT_LIST_FAIL:
            return {
                ...state,
                loading:false,
                error:action.payload}
                
        default: return state;
    }
};


export const productItemReducer = (state={ product:{} },action)=>{
  
    switch(action.type){
        case PRODUCT_ITEM_REQUEST:
            return {...state,
                loading:true,
                }
        case PRODUCT_ITEM_SUCCESS:
            return {...state,loading:false,success:true,product:action.payload}
        case PRODUCT_ITEM_FAIL:
            return {...state,loading:false,success:false,error:action.payload}
        case PRODUCT_ITEM_RESET:
            return {}
        default: return state;
    }
};

export const create_Product = (state={},action)=>{

    switch(action.type){
        case ADMIN_EDIT_PRODUCT_REQUEST:
            return {...state,
                loading:true,
                success:false
                }
        case ADMIN_EDIT_PRODUCT_SUCCESS:
            return {...state,loading:false
                ,success:true,
                id:action?.payload
            }
        case ADMIN_EDIT_PRODUCT_FAIL:
            return {...state,loading:false,success:false,error:action.payload}
        case ADMIN_EDIT_PRODUCT_RESET:
            return {}
        default: return state;
    }
}

export const uploadPhoto = (state={},action)=>{
   
    switch(action.type){
        case  ADMIN_USER_DELETE_REQUEST :
            return {...state,
                loading:true,
                success:false
                }
        case ADMIN_UPLOAD_PHOTO_SUCCESS:
            return {...state,loading:false
                ,success:true,
                
            }
        case ADMIN_EDIT_PRODUCT_FAIL:
            return {...state,loading:false,success:false,error:action.payload}
        case ADMIN_EDIT_PRODUCT_RESET:
            return {}
        default: return state;
    }
}


export const createReview = (state={},action)=>{
   
    switch(action.type){
        case CREATE_REVIEW_REQUEST:
            return{
                ...state,
                loading:true
            }
        case CREATE_REVIEW_SUCCESS:
            return{
                ...state,
                loading:false,
                success:true
            }
       case  CREATE_REVIEW_FAIL:
        return{
            ...state,loading:false,success:false,error:action.payload
        }
        case CREATE_REVIEW_RESET:
            return {
                
            }
            default: return state;
    }
}

export const  TopProduct  =  (state={product:[]},action)=>{
    switch(action.type){
        case GET_TOP_PRODUCT_REQUEST:
            return{
                loading:true,
                product:[]
            }
        case GET_TOP_PRODUCT_SUCCESS:
            return{
                loading:false,
                product:action.payload
            }
        case GET_TOP_PRODUCT_FAIL:
            return{
                loading:false,
                product:[],
                error:action.payload
            }
        default :return state
    }
}







