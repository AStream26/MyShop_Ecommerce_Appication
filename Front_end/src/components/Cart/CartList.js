// eslint-disable-next-line
import React, { useEffect, useState } from 'react'
import {Link, useHistory} from 'react-router-dom';
import {AddItem, Addproduct, getCartList, RemoveItem} from '../../actions/CartAction';
import {Button,Card,Form, Col,Row, ListGroupItem,Image} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';


const CartList = ({product,quantity,changeHandler,loading,deleteHandler}) => {
    
    const dispatch = useDispatch();
    let [qtyq,seqty] = useState(product.countInStock<quantity?product.countInStock:quantity);
  let active = product.countInStock>0?true:false;


     let history = useHistory();
      
      
        let CheckouHandler = ()=>{
          dispatch(Addproduct([
            {
               name:product.name,
               image:product.image,
               quantity:quantity,
               price:product.price,
               product:product._id
            }
          ]));
          history.push(`/${product._id}/shipping`);
      }
 

    return (
        <ListGroupItem className="rounded" >
          < Card className="border-0">
           
            <Card.Body >
               <Row>

                   <Col lg={4}  >
                  <Link to={`/product/${product._id}`}>
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

                            {
                              product.countInStock>0?<>
                               <Row  className="p-1"> 
                                 <Col >
                                 <strong>Quantity</strong>
                                 </Col>
                                 <Col >
                                 <Form.Group >
                               
                               <Form.Control as="select"  value={qtyq} onChange={(e)=>changeHandler(product._id,Number(e.target.value),seqty)}  >
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
                              </>:null
                            }
                           
                      </Col>
        
                  </Row>

                  <Row >
                 <Col xs={4} >
                 <Button className="btn  btn-dark"  onClick ={()=>deleteHandler(product._id)}>{'Delete'}</Button>
                 </Col>
               
                 <Col xs={8} md={6} className="d-grid gap-2">
                 {
                          active?(
                         
                            <Button onClick={CheckouHandler} className="btn btn-lg " style={{backgroundColor:"#ffbf00"}}>Order Now</Button>
                          
                            
                          ):(
                            <Button style={{backgroundColor:"#ffbf00"}} disabled className="btn btn-lg" >Out Of Stock</Button>
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
