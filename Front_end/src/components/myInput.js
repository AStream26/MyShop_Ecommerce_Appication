import React from 'react'


const myInput = props => {
    return (
        <>
        <input id={props.controlId}  onChange={props.handler} value = {props.value} type={props.type} placeholder={props.type === 'password'?'••••••••':props.placeholder} />
        </>
    )
}



export default myInput
