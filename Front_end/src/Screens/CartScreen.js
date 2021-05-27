import {useEffect, useState} from 'react'
import {useDispatch,useSelector} from 'react-redux';
import {AddItem,DeleteItem} from '../actions/CartAction';
import EmptyCart from '../components/Cart/Emptycart';
import CartList from '../components/Cart/CartList';
import { ListGroup,Container,Button,Row,Col,Card, ListGroupItem, } from 'react-bootstrap';
import Mybutton from '../components/Button';
import { useHistory, useLocation, useParams } from 'react-router';
import {motion} from 'framer-motion'
import {ScreenAnimation,PageTransition1} from '../Screens/Animation'
import {Addproduct} from '../actions/CartAction';
const CartScreen = () => {
     let history = useHistory();
     let params = useParams();
     let location = useLocation();

    let [totalprice,setPrice] = useState(0);
    let id = params.id;
    let qty = location.search?Number((new URLSearchParams(location.search)).get('qty')):1;
    
 
    const dispatch = useDispatch();
    const {cartItem} = useSelector(state=>state.cart);
    const {userData} = useSelector(state=>state.userDetail);
    let redirect = userData?'/shipping':'/login?redirect=shipping';

    useEffect(()=>{
     if(id){
        dispatch(AddItem(id,qty));
     }
    },[dispatch,id,qty])

    useEffect(()=>{
      let price  = 0;
      cartItem.forEach((item)=>{
          price+=(item.quantity * item.price);
      });
      setPrice(price.toFixed(2));

    },[cartItem])


   let deleteItem = (id)=>{
       dispatch(DeleteItem(id));
   }
   let CheckouHandler = ()=>{
       dispatch(Addproduct(cartItem));
       history.push(redirect);
   }




    return (
        <motion.div
        initial="out" animate="in" exit="out" variants={ScreenAnimation} 
        transition={PageTransition1}
        
        >
 
        <Row >
            <Col  md={12} lg={8}>
            {
             cartItem.length<=0?( <EmptyCart />)
                               :(
                             <ListGroup variant="flush"  >
                                 <Card.Header className="m-2 mb-4"><h2>{'my shopping cart'.toLocaleUpperCase()}</h2> </Card.Header>
                                 {
                                     cartItem.map((item,i) =><CartList key={i+1} product = {item} changeHandler = {dispatch} deleteHandler = {deleteItem} />)
                                 }
                             </ListGroup>
                               )    
         }  
            </Col>
           {
               cartItem.length>0?(
                <Col md={12} className=" mt-4" lg={4}>
                <ListGroup  >
                    <ListGroupItem style={{textAlign:"center"}} >
                   <h5> {`SUBTOTAL (${cartItem.length}) ITEMS `}</h5>
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
       
        
        </motion.div>
    )
}


export default CartScreen
