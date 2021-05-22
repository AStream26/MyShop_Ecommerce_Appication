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
        x:"-5vw",
        scale:0.1
    },

    in:{
      opacity:1,
      x:0,
      scale:1
    },
    out:{
     opacity:0,
     x:"10vw",
     scale:1.5
    }
}


export const PageTransition1 = {

    
    type:"spring",
    stiffness:120,
    duration:0.1
    
}

export const PageTransition = {
    
  
    type:"tween",
    ease:"anticipate",
    duration:0.5
}