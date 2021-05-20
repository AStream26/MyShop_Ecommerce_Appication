import React from 'react'
import { Col, Container, Form, Row } from 'react-bootstrap';
import Classes from '../style.module.css';

const formcontainer = ({children,active}) => {

   if(active){
    return (
        
            <Row className="d-flex justify-content-center">
                <Col xs={9}  className="rounded p-4" >
                  {children}
                </Col>
            </Row>
       
    )
   }


    return (
        <Container>
            <Row className="justify-content-center ">
                <Col xs={12} md={6} lg={4} className={Classes.border} >
                  {children}
                </Col>
            </Row>
        </Container>
    )
}

export default formcontainer
