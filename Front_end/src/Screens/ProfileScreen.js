import React from 'react'
import { Row,Col, ListGroup, ListGroupItem } from 'react-bootstrap'
import {Link, NavLink, Route} from 'react-router-dom';
import Basicinfo from '../components/profile/basicinfo';
import ChangePassword from '../components/profile/changePassword';
import Review from '../components/profile/myReviews';
import Orders from '../components/profile/mybooking';
import Classes from './style.module.css';
const ProfileScreen = props => {
    return (
        <>
       <Row className="mt-4" >
           <Col lg={4} style={{borderRight:"1px solid gray"}}>
              <ListGroup className="p-1" >
                  
                  <NavLink activeClassName={Classes.active} to={props.match.url+'/setting'}className={Classes.remove}>
                  <ListGroupItem  >    Basic Info    </ListGroupItem>
                  </NavLink>
                

                  
                  <NavLink activeClassName={Classes.active} to={props.match.url+'/changepassword'} className={Classes.remove}>
                  <ListGroupItem  >    Change Password    </ListGroupItem>
                  </NavLink>
               

                  
                  <NavLink activeClassName={Classes.active} to={props.match.url+'/myorders'} className={Classes.remove}>
                  <ListGroupItem  >    My Orders   </ListGroupItem>
                  </NavLink>
                 

                 
                  <NavLink activeClassName={Classes.active} to={props.match.url+'/myreviws'} className={Classes.remove}>
                  <ListGroupItem  >    My Orders    </ListGroupItem>
                  </NavLink>
                  
              </ListGroup>
           </Col>
           <Col lg={8}>
           <Route path='/profile/setting' exact component={Basicinfo} />
           <Route path='/profile/changepassword'  exact component={ChangePassword} />
           <Route path='/profile/myorders' exact component={Review} />
           <Route path='/profile/myreviws' exact component={Orders} />
           </Col>
       </Row>
        </>
    )
}


export default ProfileScreen
