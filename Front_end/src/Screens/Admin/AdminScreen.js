import React, { useEffect, useState } from 'react'
import { Col, Row,ListGroup } from 'react-bootstrap'
import { useSelector } from 'react-redux';
import Classes from '../style.module.css';
import Allusers from '../../components/Admin/allusers';
import Edituser from '../../components/Admin/Edituser';
import AllProducts from '../../components/Admin/AllProducts';
import EditProduct from '../../components/Admin/EditProduct';
import { Route, Switch,NavLink, useLocation } from 'react-router-dom';
import {ScreenAnimation,PageTransition1} from '../Animation'
import createProduct from '../../components/Admin/createProduct';
import {greet} from '../../components/utilities_/greet'
import Indicator from '../../components/Indicator/indicator';
const AdminScreen = props => {
   const location  = useLocation();
    const {userData}  = useSelector(state=>state.userDetail);
    const [show,setShow] = useState(false);

    useEffect(()=>{
      setShow(true);
    },[userData])
   const handler = ()=>{
     setShow(false);
   }
    return (
        <div>
             {
               show?
               <>
              <Indicator message={`${greet()} ${userData?.name} 😀😀`} color='alert-success' handler={handler}  />
              </>
              :null
             }
         <Row className={Classes.rowup}>
           
         <Col className="d-none d-md-block"  md={2} style={{
            backgroundColor: `#abe9cd`,
            backgroundImage: `linear-gradient(315deg, #abe9cd 0%, #3eadcf 74%)`,
            opacity:"1"
           
        }}>
      
        
              <ListGroup className="p-1" >
                  
                  <NavLink activeClassName={Classes.active} to={props.match.url+'/users'} className={Classes.remove}>
                      Users
                  </NavLink>
                

                  
                  <NavLink  activeClassName={Classes.active} to={props.match.url+'/products'} className={Classes.remove}>
                     Products   
                  </NavLink>
               

                  
                  <NavLink activeClassName={Classes.active} to={props.match.url+'/product'} className={Classes.remove}>
                    Products   
                  </NavLink>
                 

                 
                  <NavLink activeClassName={Classes.active} to={props.match.url+'/myreview'} className={Classes.remove}>
                    Reviews  
                  </NavLink>

                
                  
              </ListGroup>
           </Col>

             <Col md={10}>

             <Switch loaction={location} key={location.pathname} >
           <Route path='/admin/users' exact component={Allusers} />
           <Route path='/admin/user/:id/edit'  exact component={Edituser} />
           <Route path='/admin/products' exact component={AllProducts} />
           <Route path='/admin/product/:id/edit' exact component={EditProduct} />
           <Route path='/admin/product/create' exact component={createProduct} />
           

           
           <Route path='/profile/myreview' exact component={Allusers} />
          
          
           </Switch>

             </Col>
         </Row>
        </div>
    )
}



export default AdminScreen
