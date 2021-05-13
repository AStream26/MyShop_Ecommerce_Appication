import React from 'react'
import {Button} from 'react-bootstrap';
import PropTypes from 'prop-types'

const Button1 = props => {
    return (
        <Button className='btn btn-primary btn-block my-2' 
         disabled={!props.active}
        style={{color:'black',borderRadius:0,backgroundColor:`${props.color}`} }  >
        {props.text}
       </Button>
    )
}


export default Button1
