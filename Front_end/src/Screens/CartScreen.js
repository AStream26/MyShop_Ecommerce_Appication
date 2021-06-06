import {useEffect, useState} from 'react'
import {useDispatch,useSelector} from 'react-redux';
import {AddItem,DeleteItem, getCartList, RemoveItem} from '../actions/CartAction';
import EmptyCart from '../components/Cart/Emptycart';
import CartList from '../components/Cart/CartList';
import { ListGroup,Container,Button,Row,Col,Card, ListGroupItem, } from 'react-bootstrap';
import Mybutton from '../components/Button';
import { useHistory, useLocation, useParams } from 'react-router';
import {motion} from 'framer-motion'
import {ScreenAnimation,PageTransition1} from '../Screens/Animation'
import {Addproduct} from '../actions/CartAction';

import { REMOVE_CART_ITEM_RESET ,ADD_CART_ITEM_RESET } from '../Reducer/constants';
import CartLoader from '../components/utilities_/cartloader';
const CartScreen = ({userData}) => {
    let history = useHistory();
    let dispatch = useDispatch();
    let [totalprice,setPrice] = useState(0);
    let {loading,error,cartList} = useSelector(state=>state.cartItemReducer) ;
    let {success:successadd} = useSelector(state=>state.cart);
    useEffect(()=>{
        if(userData && !loading)
      dispatch(getCartList());

     
    },[])
    let redirect = userData?'/shipping':'/login?redirect=shipping';
    let {success,loading:loadingremove}  = useSelector(state=>state.removeItemCartReducer);
    useEffect(()=>{
       if(success)
       {
        dispatch(getCartList());
        dispatch({type:REMOVE_CART_ITEM_RESET})
       }
       else if(successadd){
        dispatch(getCartList());
          dispatch({type:ADD_CART_ITEM_RESET})
       }
     
    },[success,successadd])
    
    let changeHandler = (id,qty,fn)=>{
      
        dispatch(AddItem({
            product:id,
            quantity:qty
        }));
      
        
    }

    let deleteHandler = (id)=>{
        dispatch(RemoveItem(id));
    }
    useEffect(()=>{
        if(cartList){
            let price  = 0;
        cartList.products.forEach((item)=>{
            price+=(item.quantity * item.product.price);
        });
        setPrice(price.toFixed(2));
        }
  
      },[cartList])
  
      let CheckouHandler = ()=>{
          let product = [];

          cartList.products.forEach((item)=>{
            product.push({
                name:item.product.name,
                image:item.product.image,
                quantity:item.quantity,
                product:item.product._id,
                price: item.product.price
            })
          })
        dispatch(Addproduct(product));
        history.push(redirect);
    }
 

    

    return loading?<CartLoader  opacity='0.6' />:(
        <>
       {
          !cartList ||(cartList && cartList.products==0)?<EmptyCart userData={userData} />:(
              <Container>
                <Row>
                    <Col md={12} lg={8}>
                       
                    <ListGroup variant="flush"  >
                                 <Card.Header className="m-2 mb-4"><h2>{'my shopping cart'.toLocaleUpperCase()}</h2> </Card.Header>
                                 {
                                     cartList.products.map((item,i) =><CartList key={i+1} 
                                     loading={loadingremove}
                                     product = {item.product} quantity={item.quantity}
                                      changeHandler = {changeHandler} deleteHandler={deleteHandler}  />)
                                 }
                    </ListGroup>
                    </Col>
                
           {
               cartList.products.length>0?(
                <Col md={12} className=" mt-4" lg={4}>
                <ListGroup  >
                    <ListGroupItem style={{textAlign:"center"}} >
                   <h5> {`SUBTOTAL (${cartList.products.length}) ITEMS `}</h5>
                    </ListGroupItem>
                    <ListGroupItem style={{textAlign:"center"}} >
                        <Row>
                            <Col ><strong>TOTALPRICE</strong></Col>
                            <Col><strong> ₹ {totalprice}</strong></Col>
                        </Row>
                    </ListGroupItem>
                  
                </ListGroup>
                 <ListGroup variant="flush">
                 <span  className="d-grid gap-2 m-1" >
                    <Button className="btn  btn-block " style={{backgroundColor:"black",height:"130%"}} onClick={CheckouHandler} >Checkout</Button>
                    </span>
                 </ListGroup>
               
               
              
               
            </Col>
               ):null
           }



                </Row>

              </Container>
          )

       }
        
        </>
    )
}

export default CartScreen
