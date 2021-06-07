import React from 'react'
import { ListGroup, ListGroupItem } from 'react-bootstrap'

const Directbtn = ({text}) => {
    return (
       <div className='shadow-sm'>
       <ListGroup >
           <ListGroupItem className='d-flex justify-content-between'>
          <span>
        
         <h5>  {text}</h5>
         
          </span>
          <span >
             <h3> <strong>{`>`}</strong></h3>
          </span>
           </ListGroupItem>
       </ListGroup>
       </div>
    )
}

export default Directbtn
