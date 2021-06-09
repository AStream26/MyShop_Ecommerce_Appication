import React, { useEffect,useState } from 'react'
import {motion } from 'framer-motion'
import {NestedAnimation,PageTransition} from '../../Screens/Animation'
import { Button, Table,Row,Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { getALLorderAdmin} from '../../actions/orderaction'
import Loader from '../utilities_/myloader'
import Indicator from '../Indicator/indicator'
import { Link, useHistory } from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'
import {RESET_ORDER} from '../../Reducer/constants'
const Mybooking = () => {
    const dispatch = useDispatch();
    let history = useHistory();

    const [page,setPage] = useState(1);

    let previoushandler = ()=>{
        setPage(page-1);
    }
    let nexthandler = ()=>{
     setPage(page+1);
 }
   let {order,loading,error} = useSelector(state=>state.getAllOrderReducer);
   let {userData} = useSelector(state=>state.userDetail);


   useEffect(()=>{
   
   if(!loading)
    dispatch(getALLorderAdmin(page,9));
  
   
 },[page])

   



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
      <Row className='d-flex justify-content-center' style={{transform:'scale(0.8)'}}>
        {
         <Col  xs={6} md={2}><button style={{width:'100%',padding:'10px', border:'1px solid black'}} disabled={page==1} onClick={previoushandler} >Previous</button></Col>
        }
         {
      <Col  xs={6} md={2}><button style={{width:'100%',padding:'10px', border:'1px solid black'}} disabled={order?.length<9} onClick={nexthandler} >Next</button></Col>
         }
     </Row> 
    </>
          )
}
    




        </motion.div>
    )
}

export default Mybooking
