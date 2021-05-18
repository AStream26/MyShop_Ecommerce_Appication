import React,{useState,useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux';
import {Link } from 'react-router-dom';
import Rating from '../components/Rating';
import MyButton from '../components/Button';
import {Row ,Col,ListGroup , Card ,Image ,Form, Button, ListGroupItem} from 'react-bootstrap';
import Loader from '../components/utilities_/myloader';
import {GetProduct} from '../actions/productAction';

const ProductScreen = props => {
    const [qty,setQty] = useState(1);
    const dispatch = useDispatch();
    const {loading,product,error} = useSelector(state=>state.productItem)
   

      useEffect(()=>{
         
        dispatch(GetProduct(props.match.params.id)); 
        
      },[dispatch,props.match])

      let AddtocardHandler = ()=>{
          props.history.push(`/cart/${props.match.params.id}?qty=${qty}`)
      }
    
  let active =product.countInStock>0?true:false;

    //nsole.log(product);
    return loading?<Loader center={true} />:
       error?(error.message): (
        <>
          <Link to ='/'>
          <Button variant='outline-dark' size='sm'>Go Back</Button>
          </Link>

          <Row className="mt-4">
              <Col  lg={6}>
              <Image src={product.image} alt={product.name} fluid />    
              </Col>
              <Col  lg={3} >
                  <ListGroup variant='flush' >
                      <ListGroup.Item className="my-4" style={{borderBottom:'1px solid #D5D3DA'}}>
                          <h2>{product.name}</h2>
                      </ListGroup.Item>
                      <ListGroup.Item  style={{borderBottom:'1px solid #D5D3DA'}}>
                         <Rating rating={product.rating} text={`${product.numReviews} Reviews`}  />
                      </ListGroup.Item>
                      <ListGroup.Item  style={{borderBottom:'1px solid #D5D3DA'}} > 
                        <p> <strong>Price: ₹ {product.price}</strong></p>
                      </ListGroup.Item>
                      <ListGroup.Item style={{borderBottom:'1px solid #D5D3DA'}}>
                          <strong>Description:</strong> 
                          {product.description}
                      </ListGroup.Item>

                      
                  </ListGroup>
              </Col>

              <Col md={3}>
                  <Card>
                      <ListGroup variant='flush'>
                       <ListGroupItem>
                           <Row >
                               <Col>
                              <strong> Price</strong>
                               </Col>
                               <Col>
                              <strong> ₹ {product.price}</strong>
                               </Col>
                           </Row>
                       </ListGroupItem>
                       <ListGroupItem>
                           <Row style={{borderTop:'1px solid #D5D3DA'}}>
                               <Col >
                               Stock
                               </Col>
                               <Col>
                              <strong>{active?'In Stock':'Out Of Stock'}</strong>
                               </Col>
                           </Row>
                       </ListGroupItem>


                     {
                         active?(<>
                            <ListGroupItem style={{borderTop:'1px solid #D5D3DA',borderBottom:'1px solid #D5D3DA'}} >
                     
                            <Row>
                            <Col>
                            <strong>Quantity</strong>
                            </Col>
                           
                            <Col>
                            <Form.Group >
                               
                               <Form.Control as="select" value={qty} onChange={(e)=>setQty(e.target.value)} style={{transform:"scale(0.8)"}} >
                               
                              {
                                  [...new Array(product.countInStock).keys()].map(el=>(
                                 <option key={el+1} value={el+1}>{el+1}</option>
                                  )
                                  )
                              }
                               </Form.Control>
                           </Form.Group>
                            </Col>
                        </Row>
                         
                    
                      </ListGroupItem>
                      <MyButton handler={AddtocardHandler} color='#ffbf00' text='Add to Cart' active />
                      <MyButton color='#ff8000' text='Order Now' active />

         </>
                         ):(<>
                          <MyButton color='#ffbf00' text='Out Of Stock' />
                         </>)
                     } 
                      
                      
                      </ListGroup>

                     
                      
                   
                  </Card>
                 
              </Col>
              
          </Row>
        </>
    )
}


export default ProductScreen
