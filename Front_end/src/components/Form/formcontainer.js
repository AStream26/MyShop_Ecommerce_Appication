import React from 'react'
import { Col, Container, Form, Row } from 'react-bootstrap';
import Classes from '../style.module.css';

const formcontainer = ({children}) => {
    return (
        <Container>
            <Row className="justify-content-center ">
                <Col xs={12} md={4} className={Classes.border} >
                  {children}
                </Col>
            </Row>
        </Container>
    )
}

export default formcontainer
