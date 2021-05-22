export const ScreenAnimation= {
    in:{
      opacity:1,
      scale:1
    },
    out:{
     opacity:0,
     scale:0.9
    }
}

export const NestedAnimation= {
   
    initial:{
        opacity:0,
       
        scale:0.5
    },

    in:{
      opacity:1,
    
      scale:1
    },
    out:{
     opacity:0,
   
     scale:1.5
    }
}


export const PageTransition1 = {

    
    type:"spring",
    stiffness:120,
    duration:1
    
}

export const PageTransition = {
    
  
    type:"tween",
    ease:"anticipate",
    duration:1
}