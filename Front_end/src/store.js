import {createStore,combineReducers,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import {productListReducer,productItemReducer} from './Reducer/ProductReducer';
import {CartReducer} from './Reducer/CartReducer';
import {UserLoginReducer} from './Reducer/AuthReducer';
import {UserReducer} from './Reducer/userReducer';
const reducer = combineReducers({

    productList:productListReducer,
    productItem:productItemReducer,
    cart:CartReducer,
    userLogin:UserLoginReducer,
    userDetail:UserReducer
});
const cartItem = localStorage.getItem('cartItem')?JSON.parse(localStorage.getItem('cartItem')):[];
const userData = localStorage.getItem('userData')?JSON.parse(localStorage.getItem('userData')):{};                                                    


const intialstate = {
    cart:{cartItem:cartItem},
    userDetail:{userData:userData}
   
};
const middleware = [thunk];
const store = createStore(reducer,intialstate,
    composeWithDevTools(applyMiddleware(...middleware)));




    export default store;

