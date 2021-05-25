import  {PRODUCT_LIST_FAIL,PRODUCT_LIST_REQUEST,PRODUCT_LIST_SUCCESS,
       PRODUCT_ITEM_FAIL,PRODUCT_ITEM_REQUEST,PRODUCT_ITEM_SUCCESS } from './constants';

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
            return {loading:true,product:{}}
        case PRODUCT_ITEM_SUCCESS:
            return {loading:false,product:action.payload}
        case PRODUCT_ITEM_FAIL:
            return {loading:false,error:action.payload}
        default: return state;
    }
};




