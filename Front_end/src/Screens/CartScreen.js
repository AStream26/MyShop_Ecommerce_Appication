import {useEffect, useState} from 'react'
import {useDispatch,useSelector} from 'react-redux';
import {AddItem,DeleteItem} from '../actions/CartAction';
import EmptyCart from '../components/Cart/Emptycart';
import CartList from '../components/Cart/CartList';
import { ListGroup,Container,Row,Col,Card, ListGroupItem, } from 'react-bootstrap';
import Mybutton from '../components/Button';
const CartScreen = ({match,location,history}) => {
    
    let [totalprice,setPrice] = useState(0);

    let id = match.params.id;
    let qty = location.search?Number(location.search.split('=')[1]):1;

    const dispatch = useDispatch();
    const {cartItem} = useSelector(state=>state.cart);
    
    useEffect(()=>{
     if(id){
        dispatch(AddItem(id,qty));
     }
    },[dispatch,id,qty])

    useEffect(()=>{
      let price  = 0;
      cartItem.forEach((item)=>{
          price+=(item.qty * item.price);
      });
      setPrice(price.toFixed(2));

    },[cartItem])


   let deleteItem = (id)=>{
       dispatch(DeleteItem(id));
   }
   let CheckouHandler = ()=>{
       history.push('/login?redirect=shipping')
   }




    return (
        <Container>
        <Row>
            <Col  md={12} lg={9}>
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
            <Col md={12} lg={3}>
                <ListGroup variant="flush">
                    <ListGroupItem  >
                   <h3> {`SUBTOTAL (${cartItem.length}) ITEMS `}</h3>
                    </ListGroupItem>
                    <ListGroupItem style={{border:"2px solid #D5D3DA"}}>
                        <Row>
                            <Col style={{borderRight:"2px solid #D5D3DA"}}><strong>TOTALPRICE</strong></Col>
                            <Col><strong> ₹ {totalprice}</strong></Col>
                        </Row>
                    </ListGroupItem>
                    <ListGroupItem>
                    <Mybutton active = {cartItem.length>0} text ={`Proceed To Buy `} color="#ff8000" handler={CheckouHandler} />
                    </ListGroupItem>
                </ListGroup>

               
               
              
               
            </Col>
           
        </Row>
       
        </Container>
    )
}


export default CartScreen
