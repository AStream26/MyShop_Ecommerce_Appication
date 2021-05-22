import React from 'react'
import {motion } from 'framer-motion'
import {NestedAnimation} from '../../Screens/Animation'
const mybooking = () => {
    return (
        <motion.div
        
        initial="initial"
        animate="in"
        exit="out"
        variants={NestedAnimation}
        >
            Booking
        </motion.div>
    )
}

export default mybooking
