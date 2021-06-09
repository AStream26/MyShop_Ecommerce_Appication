import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {NestedAnimation,PageTransition} from '../../Screens/Animation'
import {getAllusers,deleteuser} from '../../actions/userAction'
import Loader from '../utilities_/myloader'
import Indicator from '../Indicator/indicator'
import { Button, Table,Row,Col } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
const Allusers = () => {
   
    const {users,loading,error,success} = useSelector(state=>state.AdminReducer);
    let[message,setMessage] = useState(null);

    const [page,setPage] = useState(1);

    let previoushandler = ()=>{
        setPage(page-1);
    }
    let nexthandler = ()=>{
     setPage(page+1);
 }

   const dispatch  = useDispatch();
    useEffect(()=>{
       
        if(!loading)
      dispatch(getAllusers(page,3));
    },[dispatch,success,page]);
   // console.log(users);
    let deletehandler=(id)=>{
        if(window.confirm('Are you sure ??'))
        dispatch(deleteuser(id));
    }

    useEffect(()=>{
     if(error){
         setMessage(error);
     }
    },[error])
  let handler = ()=>{
      setMessage(null);
  }
    return (
        <motion.div
        initial='initial'
        animate="in"
        exit="out"
        variants={NestedAnimation}
        transition={PageTransition}
        >
     {
        loading ?<Loader />:error?<Indicator message={message} handler={handler}color='alert-danger' />
        :( <>
            <Table striped bordered hover responsive className='table-sm'>
                <thead>
                    <tr>
                        <th>S.no</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Admin</th>
                        <th></th>
                       
                    </tr>
                </thead>

                <tbody>
                    {
                        users.map((el,i)=>{
                           return (
                            <tr key={el._id}>
                            <td>{i+1}</td>
                            <td>{el.name}</td>
                            <td>{el.email}</td>
                            <td>{
                                el.role === 'admin'?<i className='fas fa-check' style={{color:'green'}}></i>
                                                   :<i className='fas fa-times' style={{color:'red'}}></i>
                                }</td>

                                <td className='d-flex justify-content-between'>
                                    <LinkContainer to={`/admin/user/${el._id}/edit`}>
                                    <Button variant='warning' className='btn-sm'><i className='fas fa-edit'></i></Button>
                                    </LinkContainer>
                                    <Button variant='danger' className='btn-sm' onClick={()=>deletehandler(el._id)}>
                                        <i className='fas fa-trash'></i>
                                    </Button>
                                </td>
                          </tr>
                           )
                        })
                    }
                </tbody>

            </Table>
            <Row className='d-flex justify-content-center' style={{transform:'scale(0.8)'}}>
        {
         <Col  xs={6} md={2}><button style={{width:'100%',padding:'10px', border:'1px solid black'}} disabled={page==1} onClick={previoushandler} >Previous</button></Col>
        }
         {
      <Col  xs={6} md={2}><button style={{width:'100%',padding:'10px', border:'1px solid black'}} disabled={users?.length<3} onClick={nexthandler} >Next</button></Col>
         }
     </Row> 
            </>
        )
     }
        
        </motion.div>
    )
}

export default Allusers
