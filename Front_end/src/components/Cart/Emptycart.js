import React from 'react'
import {Jumbotron,Button, Container, Col,Row, ListGroup, ListGroupItem} from 'react-bootstrap';
import { useSelector } from 'react-redux';
import {Link, NavLink} from 'react-router-dom'
import MyButton from '../Button';

const Quantity = ({userData}) => {

   

    return (
        <Container className='d-flex align-items-center my-5'>
     
                           <Row className=" d-flex justify-content-center">
                                   <Col sm={12}>
                                   <Row >
                                       <Col sm={12} className=" d-flex justify-content-center my-5" >
                                       <i style={{transform:'scale(1.4)',opacity:'0.6', backgroundColor:'skyblue', borderRadius:'50px'}}className="fas fa-shopping-cart fa-10x p-4"></i>
                                       </Col>
                                       <Col xs={12} className='d-flex justify-content-center my-5' >
                                       <h1 >{`Your MyShop Cart is Empty  😥😥😕`}</h1>
                                          
                                    </Col>
                                    </Row>
                                   </Col>
                                   <Col sm={12} md={6}>
                                   <ListGroup variant='flush'>
                                       {
                                           userData?(
                                            <ListGroupItem>
                                                <NavLink to='/'>
                                                <div className="d-grid gap-2">
                                                    <MyButton active={true}>Continue Shopping</MyButton>
                                                    </div>
                                                </NavLink>
                                               
                                            </ListGroupItem>
                                           ):(
                                              <>
                                               <ListGroupItem>
                                                <NavLink to='/login?redirect=/cart'>
                                                <div className="d-grid gap-2">
                                                <MyButton active={true}>Sign in </MyButton>
                                                    </div>
                                                  
                                                </NavLink>
                                            </ListGroupItem>
                                            <ListGroupItem>
                                           
                                            <NavLink to='/register?redirect=/cart'>
                                            <div className="d-grid gap-2">
                                                    <MyButton active={true}>Sign up now</MyButton>
                                               
                                                </div>
                                                </NavLink>
                                            </ListGroupItem>
                                              </>
                                           )
                                       }
                                   </ListGroup>
                                   </Col>
                         

                                   
                                     
                          </Row>
                             
                                
                             
        </Container>
    )
}



export default Quantity
