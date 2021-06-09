import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Directbtn from '../utilities_/directbtn'

const Paneladmin = ({profile}) => {


    if(profile){
        return (
            <Container >
          
            <Row>
                <Col sm={12} className='my-3'> <Link to='/profile/setting'><Directbtn text = 'Basic Info'/></Link> </Col>
                <Col sm={12} className='my-3'> <Link to='/profile/changepassword'><Directbtn text = 'Change Password'/></Link> </Col>
                <Col sm={12} className='my-3'> <Link to='/profile/myorders'><Directbtn text = 'My Orders'/></Link> </Col>
                <Col sm={12}className='my-3'> <Link to='/profile/myreview'><Directbtn text = 'My Reviews'/></Link> </Col>
                <Col sm={12}className='my-3'> <Link to='/profile/myaddress'><Directbtn text = 'My Address'/></Link> </Col>
               
            </Row>
         </Container>
        )
    }
    return (
        <Container >
          
           <Row>
               <Col sm={12} className='my-3'> <Link to='/admin/users'><Directbtn text = 'Admin'/></Link> </Col>
               <Col sm={12} className='my-3'> <Link to='/admin/products'><Directbtn text = 'All Products'/></Link> </Col>
               <Col sm={12} className='my-3'> <Link to='/admin/orders'><Directbtn text = 'All orders'/></Link> </Col>
               <Col sm={12}className='my-3'> <Link to='/admin/review'><Directbtn text = 'All Reviews'/></Link> </Col>
              
           </Row>
        </Container>
    )
}

export default Paneladmin
