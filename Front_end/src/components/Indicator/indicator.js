import React from 'react'


const indicator = (props)=> {
   
    let indicate =["alert alert-dismissible"];



    if(!props.color)
    return (
        <div className={indicate.join(' ')} style={{backgroundColor:"#ffbf00",color:"black",opacity:"0.4"}} >
        <button onClick={props.handler} type="button" className="btn-close mx-3" data-bs-dismiss="alert"></button>
        <strong>{props.message}</strong>
      </div>
    )

    else{
      return(
        <div className={["alert alert-dismissible",props.color].join(' ')} style={{transition:"0.4s",opacity:"0.4"}} >
        <button onClick={props.handler}  className="btn-close mx-3" data-bs-dismiss="alert"></button>
        <strong>{props.message}</strong>
      </div>
      )
    }
}



export default indicator
