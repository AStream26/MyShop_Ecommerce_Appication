import React from 'react'


const indicator = (props)=> {
   
    let indicate =["alert alert-dismissible"];



    if(!props.color)
    return (
        <div className={indicate.join(' ')} style={{backgroundColor:"#ffbf00",color:"black"}} >
        <button onClick={props.handler} type="button" className="btn-close mx-3" data-bs-dismiss="alert"></button>
        <strong>{props.message}</strong>
      </div>
    )

    else{
      return(
        <div className={["alert alert-dismissible",props.color].join(' ')} style={{transition:"0.4s",zIndex:600,
        position:'sticky',
        top:'0',
        width:"100%"
        }} >
        <button onClick={props.handler}  className="btn-close btn-sm mx-3" data-bs-dismiss="alert"></button>
        <strong className="d-flex justify-content-center">{props.message}</strong>
      </div>
      )
    }
}



export default indicator
