import React from 'react'
import { Col, ListGroup, ListGroupItem, NavLink, Row } from 'react-bootstrap'
import Rating from '../Rating'
import Review from './Review/review'
import { Link } from 'react-router-dom';
import Directbtn from '../utilities_/directbtn';
const ReviewScreen = ({review,rating,quantity,id}) => {
    return (
       <>
      <ListGroup variant = 'flush'>
           <ListGroupItem>
           <Row>
           <Col>
           <strong> <h3>Customers Reviews</h3></strong>
            </Col>
       </Row>
        </ListGroupItem>
         
      </ListGroup>
    
         <Row>
           <Col sm={12} md={4}>
           <ListGroup >
         <ListGroupItem>
           <Rating rating={rating} text={`  ${rating } out of 5`}  />
           
           </ListGroupItem>
           <ListGroupItem>
               <strong>{
                   `Reviewed by ${quantity} customers`
               }</strong>
           </ListGroupItem>
     </ListGroup>

     </Col>
    
           <Col md={8}>
              <ListGroup variant='flush' >
                  {
                      id && review.length>3?<>
                      <Review key={0} review={review[0]} />
                  <Review key={1} review={review[1]} />
                  <Review key={2} review={review[2]} />
                  <Review key={3} review={review[3]} />
                 <ListGroupItem>
                     
                   <Link to={`/product/${id}/review`}>
                  <Directbtn text={`See all reviews`} />
                   </Link>
                 </ListGroupItem>
                      </>:<>
                      {
                          review.map((item,i)=><Review key={i} review={item} />)
                      }
                      </>
                  }
                
                 
              </ListGroup>
             
           </Col>
       </Row>
        
       </>
    )
}

export default ReviewScreen
