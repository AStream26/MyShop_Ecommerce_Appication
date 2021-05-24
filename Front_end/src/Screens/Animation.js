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
   
     scale:0.5
    }
}


export const PageTransition = {

    
    type:"spring",
    stiffness:100,
    duration:0.8
    
}

export const PageTransition1 = {
    
  
    type:"tween",
    ease:"anticipate",
    duration:0.8
}