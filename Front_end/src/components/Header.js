import React from 'react'
import {Container,Nav,Navbar, NavDropdown} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import {LinkContainer} from 'react-router-bootstrap';
import {logout} from '../actions/Authuseraction';

const Header = (props) => {
    const dispatch = useDispatch();
    const userInfo= useSelector(state=>state.userLogin);
    const {userData,loading,error} = userInfo;


    let logouthandler = ()=>{
        dispatch(logout());
        window.location.reload(true);
    }
   // console.log(userInfo)
    return (
      
          <header>
<Navbar bg="dark" variant='dark' expand="md"  collapseOnSelect >
    
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
           
            <LinkContainer to='/signup'>
            <Nav.Link ><i className='fas fa-user mx-3'></i><strong>sign up</strong></Nav.Link>
            </LinkContainer>
            </>
           ):(
               <NavDropdown title={userData.name} id="name">
                   <LinkContainer to="/profile">
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
