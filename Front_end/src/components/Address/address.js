import React from 'react'
import { Button ,Col,FormLabel,Row} from 'react-bootstrap';


const Address = ({address,i,handler}) => {
    let {Address,City,Pincode,State,Country,MobileNo} = address;
    let a = `${City} ${State} ${Pincode} ${Country}`;
    
    return (
        <div className="form-check">
        <input className="form-check-input" type="radio" onClick={(e)=>handler(address,e)}  name={`flexRadioDefault1`} id={`flexRadioDefault1 ${i}`} />
        <FormLabel htmlFor={`flexRadioDefault1 ${i}`}  style={{
            width:'100%'
        }}  >

        <div className="card m-1">
               
               <div className="card-body m-0">
                 <h5 className="card-title">Avi</h5>
                 <p className="card-text m-0"><strong>{Address}</strong></p>
                 <p className="card-text m-0"><strong>{a}</strong></p>
                 <p className="card-text"><strong>{MobileNo}</strong></p>
                 {/* <Row className='m-0'>
                     <Col  className='m-0 p-0'>
                     <button onClick = {} className='btn btn-outline-warning'>Edit</button>
                     </Col>
                     <Col className='m-0 p-0'>
                     <button className='btn btn-outline-dark'>Delete</button>
                     </Col>
                 </Row> */}
               </div>
               </div>
                   
         </FormLabel>
    
        </div>


    )
}



export default Address
