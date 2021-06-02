import React from 'react'
import {Jumbotron,Button, Container, Col,Row} from 'react-bootstrap';
import { useSelector } from 'react-redux';
import {Link, NavLink} from 'react-router-dom'
import MyButton from '../Button';

const Quantity = props => {

    const {userData}   = useSelector(state=>state.userDetail);

    return (
        <Container className='d-flex align-items-center my-5'>
     
                           <Row className=" d-flex justify-content-center">
                                     <Row >
                                       <Col sm={12} className=" d-flex justify-content-center my-5" >
                                       <i style={{transform:'scale(1.4)',opacity:'0.6'}}className="fas fa-shopping-cart fa-10x"></i>
                                       </Col>
                                       <Col xs={12} className='d-flex justify-content-center my-5' >
                                       <h1 >Your MyShop Cart is Empty</h1>
                                          
                                    </Col>
                                    </Row>
                         

                                   {
                                       !userData?(
                                        <Row   >
                                        <Col xs={12} md={6}className='d-flex justify-content-center my-5'>
                                      
                                    <NavLink to='/login'>
                                        <MyButton>
                                        Login
                                        </MyButton>
                                    </NavLink>
                                      
                                      
                                        </Col>

                                        <Col  xs={12} md={6} className='d-flex justify-content-center my-5'  >
                                        <NavLink to='/register'>
                                            
                                        <MyButton>
                                        Signup
                                        </MyButton>
                                    </NavLink>
                                       
                                       
                                        </Col>
                                    </Row>
                                   
                                       ):null
                                   }
                                
                              
                                
                             </Row>
           
                             
                                
                             
        </Container>
    )
}



export default Quantity
