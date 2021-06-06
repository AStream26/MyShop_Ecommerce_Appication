import React from 'react';
import Classes from './style1.module.css';

const Loader = (props) => {

   let cl = [Classes.loader,'mx-auto']
    return props.center?
    (
     <>
      <div style={{position:'absolute' ,top:'45%',right:'45%'}} className={cl.join(' ')}>
            
            </div>

     </>
    ):(
        <div className={cl.join(' ')}>
            
        </div>
    )
}

export default Loader;


