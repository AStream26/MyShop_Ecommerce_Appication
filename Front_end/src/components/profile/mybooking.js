import React, { useEffect } from 'react'
import {motion } from 'framer-motion'
import {NestedAnimation,PageTransition} from '../../Screens/Animation'
import { Button, Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import {getALLorder} from '../../actions/orderaction'
import Loader from '../utilities_/myloader'
import Indicator from '../Indicator/indicator'
import { Link, useHistory } from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'
import {RESET_ORDER} from '../../Reducer/constants'
const Mybooking = () => {
    const dispatch = useDispatch();
    let history = useHistory();
   let {order,loading,error} = useSelector(state=>state.getAllOrderReducer);
   let {userData} = useSelector(state=>state.userDetail);
   useEffect(()=>{
   
   if(!loading)
    dispatch(getALLorder());
  
   
 },[])

   



    return (
        <motion.div
        initial='initial'
        animate="in"
        exit="out"
        variants={NestedAnimation}
        transition={PageTransition}
        >
      {
          loading?<Loader />
          :error?(
              <Indicator message={error} color='alert-danger' />
          ):order?.length === 0?(
              <h3>No Purchase history</h3>
          ):(

            <>
            <table className="table table-hover" >
      <thead>
          <tr key='01jjaha' style={{transform:'scale(0.9)'}} >
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
                    <tr key={index+1} className={el.isPaid?`table-info`:'table-danger'}>
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
