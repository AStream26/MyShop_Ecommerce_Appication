import React, { useEffect } from 'react'
import {motion } from 'framer-motion'
import {NestedAnimation} from '../../Screens/Animation'
import { Button, Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import {getALLorder} from '../../actions/orderaction'
import Loader from '../utilities_/myloader'
import Indicator from '../Indicator/indicator'
import { Link } from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'
const Mybooking = () => {
    const dispatch = useDispatch();
   let {order,loading,error} = useSelector(state=>state.getAllOrderReducer);

   useEffect(()=>{
     if(order?.length==0)
     dispatch(getALLorder());
   },[dispatch])



    return (
        <motion.div
        initial="initial"
        animate="in"
        exit="out"
        variants={NestedAnimation}
        >
      {
          loading?<Loader />
          :error?(
              <indicator message={error} color='alert-danger' />
          ):order?.length === 0?(
              <h3>No Order</h3>
          ):(

            <>
            <table className="table table-hover" >
      <thead>
          <tr style={{transform:'scale(0.9)'}} >
          <th scope="col">S.NO</th>
          <th scope="col">DATE</th>
          <th scope="col">TOTAL</th>
          <th scope="col">PAYMENT</th>
          <th scope="col">DELIVERED</th>
          
          </tr>
      </thead>
      <tbody>
      
         {
             order?.map((el,index)=>{
                 return (
                    <tr className={el.isPaid?`table-info`:'table-danger'}>
                    <th scope="row">{index+1}</th>
                    <td>{`${el.createdAt}`.substring(0,10)}</td>
                    <td>{el.totalPrice}</td>
                    <td>{el.paidAt?el.paidAt.substring(0,10):(
                        <i style={{color:'red'}} className="fas fa-times-circle"></i>
                    )}</td>
                    <td>{el.isDeliver?el.deliverAt.substring(0,10):(
                        <i style={{color:'red'}} className="fas fa-times-circle"></i>
                    )}</td>
                    <td>
                        <LinkContainer  to={`/checkout/${el?._id}`} >
                            <Button className='btn btn-sm btn-dark'>Detail</Button>
                        </LinkContainer>
                    </td>
                    </tr>
                    
                 )
             })
         }
      
      
      </tbody>
      </table>
    </>
          )
}
    




        </motion.div>
    )
}

export default Mybooking
