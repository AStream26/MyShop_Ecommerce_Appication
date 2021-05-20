import React, { useEffect } from 'react'
import {Container,Nav,Navbar, NavDropdown} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import {LinkContainer} from 'react-router-bootstrap';
import {logout} from '../actions/Authuseraction';
import {useHistory} from 'react-router-dom'
const Header = (props) => {
    const history = useHistory();
    const dispatch = useDispatch();
    const userInfo= useSelector(state=>state.userDetail);
    
    //console.log(userInfo);
        let userData = null;
    userData = userInfo?.userData;
    
  

    let logouthandler = ()=>{
    
        dispatch(logout());
      history.push('/login');
        //window.location.reload(true);
    }
   // console.log(userInfo)
    return (
      
          <header>
<Navbar className="navbar-dark bg-primary" expand="md"  collapseOnSelect >
    
    <Container>
   <LinkContainer to='/'>
   <Navbar.Brand ><strong>MyShop</strong></Navbar.Brand>
   </LinkContainer>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
       <Nav >
       
        <LinkContainer to='/cart'>
        <Nav.Link ><i className='fas fa-shopping-cart mx-3'></i><strong>Cart</strong></Nav.Link>
        </LinkContainer>
       {
           !userData?(
               <>
            <LinkContainer to='/login'>
            <Nav.Link ><i className='fas fa-user mx-3'></i><strong>login</strong></Nav.Link>
            </LinkContainer>
           
            <LinkContainer to='/register'>
            <Nav.Link ><i className='fas fa-user mx-3'></i><strong>sign up</strong></Nav.Link>
            </LinkContainer>
            </>
           ):(
               <NavDropdown title={userData.name} id="name">
                   <LinkContainer to="/profile/setting">
                      <NavDropdown.Item>
                          Profile
                      </NavDropdown.Item>
                   </LinkContainer>
                   <NavDropdown.Item onClick={logouthandler}>
                       Logout
                   </NavDropdown.Item>
               </NavDropdown>
           )
       }
       
      </Nav>
    
      </Navbar.Collapse>
  </Container>

</Navbar>
        </header>
       
    )
}

export default Header;
