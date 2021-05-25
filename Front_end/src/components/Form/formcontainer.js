import React from 'react'
import { Col, Container, Form, Row } from 'react-bootstrap';
import Classes from '../style.module.css';

const formcontainer = ({children,active,bactive}) => {

   if(active){
    return (
        
            <Row className="d-flex justify-content-center">
                <Col xs={12} md={6} className="rounded p-4" >
                  {children}
                </Col>
            </Row>
       
    )
   }
   if(bactive){
    return (
        
            <Row >
                <Col  className="rounded p-4" >
                  {children}
                </Col>
            </Row>
       
    )
   }


    return (
        <>
            <Row className="justify-content-center ">
                <Col xs={12} md={6} lg={5}  >
                  {children}
                </Col>
            </Row>
        </>
    )
}

export default formcontainer
