import  {PRODUCT_LIST_FAIL,PRODUCT_LIST_REQUEST,PRODUCT_LIST_SUCCESS} from './constants';

export const productListReducer = (state={ product:[] },action)=>{
  
    switch(action.type){
        case PRODUCT_LIST_REQUEST:
            return {loading:true,product:[]}
        case PRODUCT_LIST_SUCCESS:
            return {loading:false,product:action.payload}
        case PRODUCT_LIST_FAIL:
            return {loading:false}
        default: return state;
    }
};
