import React from 'react'



const Nav = ({width,children,height,handler,width1}) => {
    

//console.log(width1);
    return (
        <>
        
        <div className="SideBarMenu"
        onClick={handler}
        style = {{
            height :`${height}`,
            zIndex: "600",
            position:"fixed",
            backgroundColor: `#ffffff`,
            backgroundImage: `linear-gradient(315deg, #ffffff 0%, #d7e1ec 74%)`,
            overflowY:"auto",
            width:`${width}px`,
            transform:`translatex(${width1}px)`,
            transition:`0.3s`,
            top:"0",
           

        }}
        >
                 
            {
                children
            }
           
          
          
        </div>
        
        </>
    )
}


export default Nav
