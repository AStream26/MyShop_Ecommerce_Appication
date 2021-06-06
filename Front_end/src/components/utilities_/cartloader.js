import React from 'react';
import Classes from './style1.module.css';

const CartLoader = ({opacity,color}) => {

 return (
    <div className={Classes.coverspin} style={{backgroundColor:`${color}`,opacity:`${opacity}`}}></div>
 )
}

export default CartLoader;