import {createStore,combineReducers,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import {productListReducer,productItemReducer} from './Reducer/ProductReducer';
import {CartReducer,orderDetailReducer} from './Reducer/CartReducer';
import {UserLoginReducer} from './Reducer/AuthReducer';
import {UserReducer} from './Reducer/userReducer';
const reducer = combineReducers({

    productList:productListReducer,
    productItem:productItemReducer,
    cart:CartReducer,
    userLogin:UserLoginReducer,
    userDetail:UserReducer,
    OrderDetail:orderDetailReducer
});
const cartItem = localStorage.getItem('cartItem')?JSON.parse(localStorage.getItem('cartItem')):[];
const userData = localStorage.getItem('userData')?JSON.parse(localStorage.getItem('userData')):{};                                                    
const product  = localStorage.getItem('cartItems')?JSON.parse(localStorage.getItem('cartItems')):[];                                                    


const intialstate = {
    cart:{cartItem:cartItem},
    userDetail:{userData:userData},
    OrderDetail:{orderItems:product}
   
};
const middleware = [thunk];
const store = createStore(reducer,intialstate,
    composeWithDevTools(applyMiddleware(...middleware)));




    export default store;

