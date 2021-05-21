import React, { useEffect, useState,forwardRef,useImperativeHandle } from 'react'



const Nav = forwardRef(({width,children,height},ref) => {
    const [xwidth,setXwidhth] = useState(-(Number(width)));
    

    useEffect(()=>{
      setXwidhth(-(Number(width)));
    },[width])

   let closebar = ()=>{
    setXwidhth(-(Number(width)));
   }

    let openbar = ()=>{
        setXwidhth(0);
    }

    useImperativeHandle(ref,()=>{
        return {
         toggler:openbar
        }
    })
    

    return (
        <>
        
        <div className="SideBarMenu"
        
        style = {{
            height :`${height}`,
            zIndex: 200,
            position:"absolute",
            backgroundColor: "#000000",
            backgroundImage: `linear-gradient(315deg, #485461 0%, #28313b 74%)`,
            
            width:`${width}px`,
            transform:`translatex(${xwidth}px)`,
            transition:`1s`

        }}
        >
             <div style={{
              position: "absolute",
              top: "0",
              right: "25px",
              color:"white",
              fontSize: "50px",
              marginLeft: "50px"
            
            }} onClick={closebar}  >&times;</div>
            <>       
            {
                children
            }
           
            </>
        </div>
        
        </>
    )
});


export default Nav
