// eslint-disable-next-line
import React from 'react'
import {Button} from 'react-bootstrap';

const Button1 = props => {
     
    if(!props.active){
        return (
            <Button className='btn btn-dark btn-block my-2' block
         disabled={!props.active}
        style={{borderRadius:0, zIndex:"-1"} }  >
        {props.text}
       </Button>
        )
    }

    return (
        <Button className="mb-2"   block
         disabled={!props.active}
         onClick={props.handler}
        style={{color:'black', zIndex:"2",borderRadius:"10px",backgroundColor:`${props.color}`} } >
        {props.text}
       </Button>
    )
}


export default Button1
