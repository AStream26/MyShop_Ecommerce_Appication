import {createStore,combineReducers,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import {productListReducer,productItemReducer,create_Product, uploadPhoto} from './Reducer/ProductReducer';
import {CartReducer,orderDetailReducer} from './Reducer/CartReducer';
import {UserLoginReducer} from './Reducer/AuthReducer';
import {UserReducer,AdminReducer} from './Reducer/userReducer';
import {OrderReducer,PayReducer,GetAllorder} from './Reducer/Orderreducer'

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
    uploadPhotoReduces:uploadPhoto

});
const cartItem = localStorage.getItem('cartItem')?JSON.parse(localStorage.getItem('cartItem')):[];
const userData = sessionStorage.getItem('USERDATA_')?JSON.parse(sessionStorage.getItem('USERDATA_')):null;                                                    
const product  = sessionStorage.getItem('cartItems')?JSON.parse(sessionStorage.getItem('cartItems')):[];  
const Address  = sessionStorage.getItem('Address')?JSON.parse(sessionStorage.getItem('Address')):{};                                                    
const Method    =  sessionStorage.getItem('Method')?JSON.parse(sessionStorage.getItem('Method')):null;  

const intialstate = {
    cart:{cartItem:cartItem},
    userDetail:{userData:userData},
    OrderDetail:{orderItems:product,
                 shippingAddress:Address,
                 paymentMethod: Method
                }
   
};
const middleware = [thunk];
const store = createStore(reducer,intialstate,
    composeWithDevTools(applyMiddleware(...middleware)));




    export default store;

