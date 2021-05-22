import React from 'react'
import { Row,Col, ListGroup, ListGroupItem } from 'react-bootstrap'
import {Link, NavLink, Route, Switch, useLocation} from 'react-router-dom';
import Basicinfo from '../components/profile/basicinfo';
import ChangePassword from '../components/profile/changePassword';
import Review from '../components/profile/myReviews';
import Orders from '../components/profile/mybooking';
import Classes from './style.module.css';
import {motion} from 'framer-motion'
import {ScreenAnimation,PageTransition1} from '../Screens/Animation'
const ProfileScreen = props => {
   // console.log(props);
   const location = useLocation();
    return (
        <motion.div
         animate="in"  variants={ScreenAnimation} 
        transition={PageTransition1}
        >
       <Row className={Classes.rowup} style={{
           height:"100vh"
       }} >
           <Col lg={3} style={{borderRight:"1px solid gray",
          backgroundColor: `#fbb034`,
          
          backgroundImage: `linear-gradient(315deg, #fbb034 0%, #ffdd00 74%)`,
          
           opacity:"0.9"
           
        }}>
              <ListGroup className="p-1" >
                  
                  <NavLink activeClassName={Classes.active} to={props.match.url+'/setting'} className={Classes.remove}>
                      Basic Info   
                  </NavLink>
                

                  
                  <NavLink  activeClassName={Classes.active} to={props.match.url+'/changepassword'} className={Classes.remove}>
                     Change Password   
                  </NavLink>
               

                  
                  <NavLink activeClassName={Classes.active} to={props.match.url+'/myorders'} className={Classes.remove}>
                     My Orders   
                  </NavLink>
                 

                 
                  <NavLink activeClassName={Classes.active} to={props.match.url+'/myreviws'} className={Classes.remove}>
                     My Reviews  
                  </NavLink>
                  
              </ListGroup>
           </Col>
           <Col style={{
               borderLeftColor:"black"
           }} lg={9} className="border">
              
           <Switch loaction={location} key={location.pathname} >
           <Route path='/profile/setting' exact component={Basicinfo} />
           <Route path='/profile/changepassword'  exact component={ChangePassword} />
           <Route path='/profile/myorders' exact component={Review} />
           <Route path='/profile/myreviws' exact component={Orders} />
           
           </Switch>
          
           </Col>
       </Row>
        </motion.div>
    )
}


export default ProfileScreen
