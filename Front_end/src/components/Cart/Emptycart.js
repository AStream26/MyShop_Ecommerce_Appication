import React from 'react'
import {Jumbotron,Button, Container, Col,Row} from 'react-bootstrap';

const Quantity = props => {
    return (
        <div >
        <Jumbotron fluid style={{height:"60vh"}}  className="m-5 ">
                               <Container>
                                   <Row>
                                       <Col sm={12}md={4}>
                                       <i className="fas fa-shopping-cart fa-10x"></i>
                                       </Col>
                                       <Col sm={12} md={8}>
                                       <h1>Your MyShop Cart is Empty</h1>
                                          <br/>
                                       <Row>
                                           <Col>
                                           <Button  style={{color:'black',borderRadius:"1px",backgroundColor:`#ffbf00`}} size="md" block >
                                                Signup
                                        </Button>
                                        
                                           </Col>
                                           <Col>
                                           <Button  style={{color:'black',borderRadius:"1px",backgroundColor:`#ffbf00`}} size="md" block >
                                                Login
                                        </Button>
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
