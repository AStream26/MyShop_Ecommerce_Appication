import {createStore,combineReducers,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import {productListReducer,productItemReducer} from './Reducer/ProductReducer';
import {CartReducer} from './Reducer/CartReducer';
import {UserLoginReducer} from './Reducer/AuthReducer';

const reducer = combineReducers({
    productList:productListReducer,
    productItem:productItemReducer,
    cart:CartReducer,
    userInfo:UserLoginReducer
});
const cartItem = localStorage.getItem('cartItem')?JSON.parse(localStorage.getItem('cartItem')):[]; ;
const userInfo = localStorage.getItem('userInfo')?JSON.parse(localStorage.getItem('cartItem')):null;
                                                    


const intialstate = {
    cart:{cartItem:cartItem},
    userInfo:{userInfo}
};
const middleware = [thunk];
const store = createStore(reducer,intialstate,
    composeWithDevTools(applyMiddleware(...middleware)));




    export default store;

