import React from 'react'


const indicator = props => {

    let indicate =["alert alert-dismissibl"];

  
    return (
        <div className={indicate.join(' ')} style={{backgroundColor:"#ffbf00",color:"black",opacity:"0.7"}} >
        <button onClick={props.handler} type="button" className="btn-close mx-3" data-bs-dismiss="alert"></button>
        <strong>{props.message}</strong>
      </div>
    )
}



export default indicator
