// eslint-disable-next-line
import React from 'react'
import {Link, useHistory} from 'react-router-dom';
import {AddItem, Addproduct} from '../../actions/CartAction';
import {Button,Card,Form, Col,Row, ListGroupItem,Image} from 'react-bootstrap';
import { useDispatch } from 'react-redux';


const CartList = ({product,changeHandler,deleteHandler}) => {
  let active = product.countInStock>0?true:false;
     const dispatch = useDispatch();
     let history = useHistory();
      
      
        let CheckouHandler = ()=>{
          dispatch(Addproduct([
            {
               name:product.name,
               image:product.image,
               quantity:product.quantity,
               price:product.price,
               product:product.product
            }
          ]));
          history.push(`/${product.product}/shipping`);
      }
   

    return (
        <ListGroupItem className="rounded" >
          < Card className="border-0">
           
            <Card.Body >
               <Row>

                   <Col lg={4}  >
                  <Link to={`/product/${product.product}`}>
                  <Image style={{height:"90%",width:"90%"}}src={`/public/img/Product/${product.image[0]}`} alt={product.name} fluid  />
                  </Link>
                   </Col>
                   <Col lg={8} >

                  <Row >
                        <Col  md={4}  >
                           <Row >
                           <p  ><strong>{product.name}</strong></p>
                           </Row>

                           <Row className="p-1" >
                           <Col  >
                           <strong>In Stock</strong>
                           </Col>
                           <Col >
                           <strong>{product.countInStock}</strong>
                           </Col>
                           </Row>

                         
                        </Col>
                        
                        <Col md={8}>
                             
                             <Row  className="p-1" >
                                 <Col >
                                 <strong>Price</strong>
                                 </Col>
                                 <Col>
                                 <strong>₹ {` ${product.price}`}</strong>
                                 </Col>
                             </Row>

                             <Row  className="p-1"> 
                                 <Col >
                                 <strong>Quantity</strong>
                                 </Col>
                                 <Col >
                                 <Form.Group >
                               
                               <Form.Control as="select"  value={product.quantity} onChange={(e)=>changeHandler(AddItem(product.product,Number(e.target.value)))}  >
                                  {
                                  [...new Array(product.countInStock).keys()].map(el=>(
                                 <option key={el+1} value={el+1}>{el+1}</option>
                                  )
                                  )
                                   }
                               </Form.Control>
                            </Form.Group >
                                 
                                 </Col>
                             </Row>
                           
                      </Col>
        
                  </Row>

                  <Row >
                 <Col xs={4} >
                 <Button className="btn  btn-dark"  onClick ={()=>deleteHandler(product.product)}>Delete</Button>
                 </Col>
               
                 <Col xs={8} md={6} className="d-grid gap-2">
                 {
                          active?(
                         
                            <Button onClick={CheckouHandler} className="btn btn-lg " style={{backgroundColor:"#ffbf00"}}>Order Now</Button>
                          
                            
                          ):(
                            <Button className="btn btn-lg " >Out Of Stock</Button>
                          )
                      }
                 </Col>
                
                  </Row>
                   </Col>
                
               </Row>
               
               
            </Card.Body>
            </Card>
        </ListGroupItem>
    )
}



export default CartList
