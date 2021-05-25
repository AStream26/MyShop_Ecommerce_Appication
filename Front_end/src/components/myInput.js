import React from 'react'


const myInput = props => {
    if(props.required){
        return (
            <>
            <input id={props.controlId} required   onChange={props.handler} value = {props.value} type={props.type} placeholder={props.type === 'password'?'••••••••':props.placeholder} />
            </>
        )
    }
    return (
        <>
        <input id={props.controlId}   onChange={props.handler} value = {props.value} type={props.type} placeholder={props.type === 'password'?'••••••••':props.placeholder} />
        </>
    )
}



export default myInput
