import React from 'react'
import Classes from './backdrop.module.css';


const backdrop = props => {

if(props.show){
    //console.log(props.clicked);
    return (
        <div className={Classes.backdrop} onClick={props.clicked} >
             </div>   
    )
}
else 
return null;
}



export default backdrop
