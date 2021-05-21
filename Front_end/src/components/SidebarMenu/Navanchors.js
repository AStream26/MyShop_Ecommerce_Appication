import React from 'react'
import {NavLink} from 'react-router-dom';

export const Navanchors = ({link,text}) => {
    return (
        <>
           <NavLink  style={{
         display:"block",
         borderBottom:"2px solid white",
         textDecoration:"none",
         fontSize: "25px",
         color: "#818181",
         padding: "8px 8px 8px 32px"
     }} activeClassName="active" to={link}>{text}</NavLink>

     </>
   

)
}

