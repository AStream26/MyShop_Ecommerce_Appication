import {createStore,combineReducers,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import {productListReducer,productItemReducer,create_Product, uploadPhoto,createReview} from './Reducer/ProductReducer';
import {CartReducer,getCartItem,orderDetailReducer, removeItemCart} from './Reducer/CartReducer';
import {UserLoginReducer} from './Reducer/AuthReducer';
import {UserReducer,AdminReducer} from './Reducer/userReducer';
import {OrderReducer,PayReducer,GetAllorder, Deliver} from './Reducer/Orderreducer'
import { shippingReducer } from './Reducer/shippingReducer';

const reducer = combineReducers({

    productList:productListReducer,
    productItem:productItemReducer,
    cart:CartReducer,
    userLogin:UserLoginReducer,
    userDetail:UserReducer,
    OrderDetail:orderDetailReducer,
    CurrentPlaceOrder:OrderReducer,
    PaymentReducer:PayReducer,
    getAllOrderReducer:GetAllorder,
    AdminReducer:AdminReducer,
    createProductReducer:create_Product,
    uploadPhotoReduces:uploadPhoto,
    shipppingReducer:shippingReducer,
    DeliverReducer:Deliver,
    cartItemReducer:getCartItem,
    removeItemCartReducer:removeItemCart,
    createReviewReducer:createReview

});
// const cartItem = localStorage.getItem('cartItem')?JSON.parse(localStorage.getItem('cartItem')):[];
// const userData = sessionStorage.getItem('USERDATA_')?JSON.parse(sessionStorage.getItem('USERDATA_')):null;                                                    
// const product  = sessionStorage.getItem('cartItems')?JSON.parse(sessionStorage.getItem('cartItems')):[];  
// const Address  = sessionStorage.getItem('Address')?JSON.parse(sessionStorage.getItem('Address')):{};                                                    
// const Method    =  sessionStorage.getItem('Method')?JSON.parse(sessionStorage.getItem('Method')):null;  

const intialstate = {
      
    
   
};
const middleware = [thunk];
const store = createStore(reducer,intialstate,
    composeWithDevTools(applyMiddleware(...middleware)));




    export default store;

