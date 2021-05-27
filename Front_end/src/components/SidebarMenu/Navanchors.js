import React from 'react'
import {NavLink} from 'react-router-dom';

export const Navanchors = ({link,text}) => {
    return (
        <>
           <NavLink  style={{
         display:"block",
         borderBottom:"1px solid #D5D3DA",
         textDecoration:"none",
      textAlign:"center",
         color: "#000",
         padding: "8px 8px 8px 32px"
     }} activeClassName="active" to={link}>{text}</NavLink>

     </>



   

)
}

