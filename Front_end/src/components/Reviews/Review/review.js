import React from 'react'
import { Col, ListGroupItem, Row } from 'react-bootstrap'
import Rating from '../../Rating'


const Review = ({review}) => {
    return (
        <>
            <ListGroupItem>
                <Row>
                    <Col>
                   <p>
                   <img style={{
                     verticalAlign: 'middle',
                     width: '40px',
                     height: '40px',
                     borderRadius: '50%',
                     zIndex:'2' }} src={`/public/img/users/${review.user.photo}`} alt={`${review.user.name}`} />
                   {
                       ` ${review.user.name}`
                   }
                       </p> 
                   <p>
                   <strong>
                     <Rating rating={review.rating} text={`  ${review.title}`} />
                    </strong>
                    <br/>
                    {
                      `reviewed on ${review.createdAt.substring(0,10)}`
                       }
                   </p>
                    
                      
                    <p>
                   {review.comment}
                    </p>

                  <strong>
                  {
                        review.recommend=='Yes'?<><i className="far fa-thumbs-up"></i> {` ${review.user.name.split(' ')[0]} recommend this product`}</>
                                               :<><i className="far fa-thumbs-down"></i> {` ${review.user.name.split(' ')[0]} not recommend this product`}</>
                    }
                  </strong>
                    </Col>
                </Row>
            </ListGroupItem>
        </>
    )
}

export default Review
