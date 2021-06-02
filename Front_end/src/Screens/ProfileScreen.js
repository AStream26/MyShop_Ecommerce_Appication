import React, { useEffect } from 'react'
import { Row,Col, ListGroup, ListGroupItem } from 'react-bootstrap'
import {Link, NavLink, Route, Switch, useHistory, useLocation} from 'react-router-dom';
import Basicinfo from '../components/profile/basicinfo';
import ChangePassword from '../components/profile/changePassword';
import Review from '../components/profile/myReviews';
import Orders from '../components/profile/mybooking';
import Classes from './style.module.css';
import {motion} from 'framer-motion'
import {ScreenAnimation,PageTransition1} from '../Screens/Animation'
import { useSelector } from 'react-redux';
import NotFound from './notfound';

const ProfileScreen = props => {
    let {userData} = useSelector(state=>state.userDetail);
    let history = useHistory();
    useEffect(()=>{
       if(!userData){
         history.push('/login')
       } 
    },[])
   // console.log(props);
   let cl = ['shadow-lg bg-body rounded',Classes.rowup]
   const location = useLocation();
    return (
        <motion.div
         animate="in"  variants={ScreenAnimation} 
        transition={PageTransition1}
        
        >
          <nav className='m-2' ><h1>Welcome {userData.name}</h1></nav>
       <Row className={cl.join(' ')} style={{
           
       }} >
           <Col className="d-none d-md-block" md={2} style={{
            backgroundColor: `#abe9cd`,
            backgroundImage: `linear-gradient(315deg, #abe9cd 0%, #3eadcf 74%)`,
            opacity:"1"
           
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
                 

                 
                  <NavLink activeClassName={Classes.active} to={props.match.url+'/myreview'} className={Classes.remove}>
                     My Reviews  
                  </NavLink>

                  <NavLink activeClassName={Classes.active} to={props.match.url+'/myaddress'} className={Classes.remove}>
                     Address 
                  </NavLink>
                  
              </ListGroup>
           </Col>
           <Col md={10}   className="m-0">
              
           <Switch loaction={location} key={location.pathname} >
           <Route path='/profile/setting' exact component={Basicinfo} />
         
           <Route path='/profile/changepassword'  exact component={ChangePassword} />
           <Route path='/profile/myorders' exact component={Orders} />
           <Route path='/profile/myreview' exact component={Review} />
          
          
           </Switch>
           
           </Col>
       </Row>
        </motion.div>
    )
}


export default ProfileScreen
