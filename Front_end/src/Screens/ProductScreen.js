import React,{useState,useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux';
import {Link, Redirect, useHistory } from 'react-router-dom';
import Rating from '../components/Rating';
import MyButton from '../components/Button';
import {Row ,Col,ListGroup ,Container, Card ,Image ,Form, Button, ListGroupItem} from 'react-bootstrap';
import Loader from '../components/utilities_/myloader';
import {GetProduct} from '../actions/productAction';
import {AddItem,Addproduct} from '../actions/CartAction';
import Indicator from './../components/Indicator/indicator'
import Carosal1 from '../components/Carosal/carosal';

const ProductScreen = props => {
    const [qty,setQty] = useState(1);
    const dispatch = useDispatch();
    const {userData} = useSelector(state=>state.userDetail);

    const {loading,product,error} = useSelector(state=>state.productItem)
    const [msg,setmsg] = useState('Add To cart');
    const history = useHistory();
    
      useEffect(()=>{
       //  console.log("Dispatching.....");
       if(!loading)
         dispatch(GetProduct(props.match.params.id)); 
      },[])

      

      useEffect(()=>{
        setmsg(msg);
      },[msg,qty])

      useEffect(()=>{
        setmsg('Add To Cart');
      },[])

      let AddtocardHandler = ()=>{

          dispatch(AddItem(props.match.params.id,qty));
         setmsg('Item Added To Cart')
      }
      let orderDetailReducer= ()=>{

           dispatch(Addproduct([{
            name:product.name,
            image:product.image,
            quantity:qty,
            price:product.price,
            product:product._id
      }]));

           if(userData){
               history.push(`/${product._id}/shipping`);
           }else{
               history.push(`/login?redirect=/${product._id}/shipping`);
           }
      }


    //nsole.log(product);
    return loading?<Loader center={true} />:
       error?(
          <Redirect to='/' />
       ): (
        <Container>
          <Link to ='/'>
          <Button className='mt-1'variant='outline-dark' size='md'>Go Back</Button>
          </Link>
          <Row className="mt-4">
              <Col  lg={5} className="mb-1">
           {
               product?.image?   <Carosal1  product={product.image} />:null
           }
              </Col>
              <Col  lg={3} className="mb-1" >
                  <ListGroup  >
                      <ListGroup.Item  >
                          <h3>{product.name}</h3>
                      </ListGroup.Item>
                      <ListGroup.Item  >
                         <Rating rating={product.rating} text={`${product.numReviews} Reviews`}  />
                      </ListGroup.Item>
                      <ListGroup.Item   > 
                       <Row>
                           <Col>Brand</Col>
                           <Col>{product.brand} </Col>
                       </Row>
                      </ListGroup.Item>
                      <ListGroup.Item   > 
                       <Row>
                           <Col>Category</Col>
                           <Col> {product.category}</Col>
                       </Row>
                      </ListGroup.Item>
                      <ListGroup.Item   > 
                       <Row>
                           <Col>Subcategory</Col>
                           <Col>{product.subcategory} </Col>
                       </Row>
                      </ListGroup.Item>


                       </ListGroup>
              </Col>

              <Col md={12} lg={3} >
                  <Card>
                      <ListGroup variant='flush' >
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
                           <Row>
                               <Col >
                              <strong>Stock</strong>
                              </Col>
                               <Col>
                              <strong>{product?.countInStock>0?'In Stock':'Out Of Stock'}</strong>
                               </Col>
                           </Row>
                       </ListGroupItem>
                       <Row className="mt-4 d-block d-md-none">
              <Col>
              <ListGroup variant='flush'>
              <ListGroup.Item style={{borderBottom:'1px solid #D5D3DA'}}>
                          <strong>Description:</strong> 
                        <p>  {product.description}</p>
              </ListGroup.Item>
              </ListGroup>
             
              </Col>
          </Row>
         


                     {
                         product?.countInStock>0?(<>
                            <ListGroupItem className='mb-2'  >
                     
                            <Row>
                            <Col>
                            <strong>Quantity</strong>
                            </Col>
                           
                            <Col>
                            <Form.Group >
                               
                               <Form.Control as="select" value={qty} onChange={(e)=>setQty(e.target.value)} >
                               
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

                      <MyButton  onClick={AddtocardHandler} active={true}> {msg} </MyButton>
                      <br/>
                     
                      <MyButton  active={true} onClick={orderDetailReducer}> Order Now </MyButton>

         </>
                         ):(<>
                           <MyButton  active={false}> Out Of Stock </MyButton>

                         </>)
                     } 
                      
                      
                      </ListGroup>

                     
                      
                   
                  </Card>
                 
              </Col>
              
          </Row>
          <Row className="mt-4 d-none d-md-block">
              <Col>
              <ListGroup variant='flush'>
              <ListGroup.Item style={{borderBottom:'1px solid #D5D3DA'}}>
                          <strong>Description:</strong> 
                        <p>  {product.description}</p>
              </ListGroup.Item>
              </ListGroup>
             
              </Col>
          </Row>
         

        </Container>
    )
}


export default ProductScreen
