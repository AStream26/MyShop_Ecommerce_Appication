import React from 'react'
import {Jumbotron,Button, Container, Col,Row} from 'react-bootstrap';
import {Link} from 'react-router-dom'
const Quantity = props => {
    return (
        <div >
        <Jumbotron fluid className="bg  pt-5 pb-0" style={{height:"75vh",backgroundColor:"#FFFFFF"}} >
                               <Container >
                                   <Row className="d-flex">
                                       <Col sm={12}md={4}>
                                       <i className="fas fa-shopping-cart fa-10x"></i>
                                       </Col>
                                       <Col sm={12} md={8}>
                                       <h1>Your MyShop Cart is Empty</h1>
                                          <br/>
                                          <br/>
                                       <Row >
                                           <Col xs={12} md={4} className="d-grid gap-2">
                                          <Link to="/register">
                                          <Button  className="btn btn-lg btn-block" >
                                                Signup
                                           </Button>
                                          </Link>
                                         
                                           </Col>
                                           <Col  xs={12} md={4} className="d-grid gap-2" >
                                               <Link to="/login">
                                               <Button  className="btn btn-lg" >
                                                Login
                                           </Button>
                                               </Link>
                                          
                                           </Col>
                                       </Row>
                              
                                       </Col>
                                      
                                   </Row>
                              
                                
                                  
                               </Container>
                                
                              </Jumbotron>
        </div>
    )
}



export default Quantity
