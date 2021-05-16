import React from 'react'
import {Row,Col} from 'react-bootstrap';
const Quantity = props => {
    return (
        <div >
        <Row > 
            <Col className="p-0">
            <i class="fas fa-plus-square fa-5x" ></i>
            </Col>
            <Col>
            Quantity
            </Col>
            <Col>
            ++
            </Col>
        </Row>  
        </div>
    )
}



export default Quantity
