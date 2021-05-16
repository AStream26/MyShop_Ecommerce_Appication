import React,{useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux';
import {AddItem} from '../actions/CartAction';
const CartScreen = ({match,location,history}) => {
    
    let id = match.params.id;
    let qty = location.search?Number(location.search.split('=')[1]):1;
    const dispatch = useDispatch();
    
    useEffect(()=>{
     if(id){
        
        dispatch(AddItem(id,qty));
     }
    },[dispatch,id,qty])



    return (
        <div>
            <h1>MY Cat</h1>
        </div>
    )
}


export default CartScreen
