import {createStore,combineReducers,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import {productListReducer,productItemReducer} from './Reducer/ProductReducer';
import {CartReducer,orderDetailReducer} from './Reducer/CartReducer';
import {UserLoginReducer} from './Reducer/AuthReducer';
import {UserReducer} from './Reducer/userReducer';
import {OrderReducer} from './Reducer/Orderreducer'
const reducer = combineReducers({

    productList:productListReducer,
    productItem:productItemReducer,
    cart:CartReducer,
    userLogin:UserLoginReducer,
    userDetail:UserReducer,
    OrderDetail:orderDetailReducer,
    CurrentPlaceOrder:OrderReducer
});
const cartItem = localStorage.getItem('cartItem')?JSON.parse(localStorage.getItem('cartItem')):[];
const userData = localStorage.getItem('userData')?JSON.parse(localStorage.getItem('userData')):{};                                                    
const product  = localStorage.getItem('cartItems')?JSON.parse(localStorage.getItem('cartItems')):[];  
const Address  = localStorage.getItem('Address')?JSON.parse(localStorage.getItem('Address')):{};                                                    
const Method    =  localStorage.getItem('Method')?JSON.parse(localStorage.getItem('Method')):null;  

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

