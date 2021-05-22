import React from 'react';
import{motion} from 'framer-motion'
import {NestedAnimation} from '../../Screens/Animation'
const myReviews = () => {
    return (
        <motion.div
        
        initial="initial"
        animate="in"
        exit="out"
        variants={NestedAnimation}
        >
            MyReviews
        </motion.div>
    )
}

export default myReviews
