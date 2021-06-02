import  {PRODUCT_LIST_FAIL,PRODUCT_LIST_REQUEST,PRODUCT_LIST_SUCCESS,
       PRODUCT_ITEM_FAIL,PRODUCT_ITEM_REQUEST,PRODUCT_ITEM_SUCCESS, ADMIN_CREATE_PRODUCT_REQUEST, ADMIN_CREATE_PRODUCT_SUCCESS, ADMIN_CREATE_PRODUCT_FAIL, ADMIN_CREATE_PRODUCT_RESET } from './constants';

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
            return {...state,loading:false,product:action.payload}
        case PRODUCT_ITEM_FAIL:
            return {...state,loading:false,error:action.payload}
        default: return state;
    }
};

export const create_Product = (state={},action)=>{

    switch(action.type){
        case ADMIN_CREATE_PRODUCT_REQUEST:
            return {...state,
                loading:true,
                success:false
                }
        case ADMIN_CREATE_PRODUCT_SUCCESS:
            return {...state,loading:false,success:true}
        case ADMIN_CREATE_PRODUCT_FAIL:
            return {...state,loading:false,success:false,error:action.payload}
        case ADMIN_CREATE_PRODUCT_RESET:
            return {}
        default: return state;
    }
}




