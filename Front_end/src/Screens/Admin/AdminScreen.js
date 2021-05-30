import React from 'react'
import { Col, Row,ListGroup } from 'react-bootstrap'
import { useSelector } from 'react-redux';
import Classes from '../style.module.css';
import Allusers from '../../components/Admin/allusers';
import Edituser from '../../components/Admin/Edituser';
import { Route, Switch,NavLink, useLocation } from 'react-router-dom';
import {ScreenAnimation,PageTransition1} from '../Animation'
const AdminScreen = props => {
   const location  = useLocation();
    const {userData}  = useSelector(state=>state.userDetail);

    return (
        <div>
             <h3>Hello {userData?.name} </h3>
         <Row className={Classes.rowup}>
           
         <Col className="d-none d-md-block"  md={3} style={{
            backgroundColor: `#abe9cd`,
            backgroundImage: `linear-gradient(315deg, #abe9cd 0%, #3eadcf 74%)`,
            opacity:"1"
           
        }}>
      
        
              <ListGroup className="p-1" >
                  
                  <NavLink activeClassName={Classes.active} to={props.match.url+'/users'} className={Classes.remove}>
                      Users
                  </NavLink>
                

                  
                  <NavLink  activeClassName={Classes.active} to={props.match.url+'/orders'} className={Classes.remove}>
                     Change Password   
                  </NavLink>
               

                  
                  <NavLink activeClassName={Classes.active} to={props.match.url+'/product'} className={Classes.remove}>
                    Products   
                  </NavLink>
                 

                 
                  <NavLink activeClassName={Classes.active} to={props.match.url+'/myreview'} className={Classes.remove}>
                    Reviews  
                  </NavLink>

                
                  
              </ListGroup>
           </Col>

             <Col md={9}>

             <Switch loaction={location} key={location.pathname} >
           <Route path='/admin/users' exact component={Allusers} />
         
           <Route path='/admin/user/:id/edit'  exact component={Edituser} />
           <Route path='/profile/myorders' exact component={Allusers} />
           <Route path='/profile/myreview' exact component={Allusers} />
          
          
           </Switch>

             </Col>
         </Row>
        </div>
    )
}



export default AdminScreen
