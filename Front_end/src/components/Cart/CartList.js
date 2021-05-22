// eslint-disable-next-line
import React from 'react'
import {Link} from 'react-router-dom';
import {AddItem} from '../../actions/CartAction';
import {Button,Card,Form, Col,Row, ListGroupItem,Image} from 'react-bootstrap';


const CartList = ({product,changeHandler,deleteHandler}) => {

        let active = product.countInStock>0?true:false;
    return (
        <ListGroupItem className="rounded" >
          < Card className="border-0">
           
            <Card.Body >
               <Row>

                   <Col lg={4}  >
                  <Link to={`/product/${product.product_id}`}>
                  <Image style={{height:"100%",width:"100%"}}src={product.image} alt={product.name} fluid  />
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
                               
                               <Form.Control as="select"  value={product.qty} onChange={(e)=>changeHandler(AddItem(product.product_id,Number(e.target.value)))} style={{transform:"scale(0.9)"}} >
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
                 <Button className="btn btn-outline-dark" style={{backgroundColor:"white"}} onClick ={()=>deleteHandler(product.product_id)}>Delete</Button>
                 </Col>
               
                 <Col xs={8} md={6} className="d-grid gap-2">
                 {
                          active?(
                            <Button className="btn btn-lg " style={{backgroundColor:"#ffbf00"}}>Order Now</Button>
                            
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
