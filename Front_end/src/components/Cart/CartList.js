// eslint-disable-next-line
import React from 'react'
import {Link} from 'react-router-dom';
import {AddItem} from '../../actions/CartAction';
import {Button,Card,Form, Col,Row, ListGroupItem,Image} from 'react-bootstrap';
import Mybutton from '../Button';

const CartList = ({product,changeHandler,deleteHandler}) => {

        let active = product.countInStock>0?true:false;
    return (
        <ListGroupItem >
          < Card >
           
            <Card.Body>
               <Row>

                   <Col lg={4} style={{border:"1px solid #D5D3DA"}}>
                  <Link to={`/product/${product.product_id}`}>
                  <Image style={{height:"100%",width:"100%"}}src={product.image} alt={product.name} fluid  />
                  </Link>
                   </Col>
                   <Col lg={8} style={{border:"1px solid #D5D3DA"}}>

                  <Row>
                        <Col style={{borderBottom:"1px solid #D5D3DA",borderRight:"1px solid #D5D3DA"}}  md={4}  >
                           <Row >
                           <p  ><strong>{product.name}</strong></p>
                           </Row>

                           <Row className="p-3" >
                           <Col  style={{borderRight:"1px solid #D5D3DA"}}>
                           <strong>In Stock</strong>
                           </Col>
                           <Col >
                           <strong>{product.countInStock}</strong>
                           </Col>
                           </Row>

                         
                        </Col>
                        
                        <Col md={8}>
                             
                             <Row  style={{borderBottom:"1px solid #D5D3DA"}} className="p-3">
                                 <Col style={{borderRight:"1px solid #D5D3DA"}}>
                                 <strong>Price</strong>
                                 </Col>
                                 <Col>
                                 <strong>₹ {` ${product.price}`}</strong>
                                 </Col>
                             </Row>

                             <Row style={{borderBottom:"1px solid #D5D3DA"}} className="p-3"> 
                                 <Col style={{borderRight:"1px solid #D5D3DA"}}>
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

                  <Row className="p-2">
                 <Col sm={2} className="p-2">
                 <Button onClick ={()=>deleteHandler(product.product_id)}><i className="fa fa-trash"></i></Button>
                 </Col>
                 <Col sm={6}></Col>
                 <Col sm={4}>
                 {
                          active?(
                            <Mybutton text="Order Now"  active color="#ffbf00"/>
                          ):(
                            <Mybutton text="Out Of Stock" />
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
