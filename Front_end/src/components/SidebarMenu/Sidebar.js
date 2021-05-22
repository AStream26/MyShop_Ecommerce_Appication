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
        onClick={closebar}
        style = {{
            height :`${height}`,
            zIndex: "300",
            position:"fixed",
            backgroundColor: `#ffffff`,
            backgroundImage: `linear-gradient(315deg, #ffffff 0%, #d7e1ec 74%)`,
            overflowY:"auto",
            width:`${width}px`,
            transform:`translatex(${xwidth}px)`,
            transition:`0.3s`,
            top:"0"

        }}
        >
                 
            {
                children
            }
           
          
          
        </div>
        
        </>
    )
});


export default Nav
