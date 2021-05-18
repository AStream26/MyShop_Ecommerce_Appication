import React from 'react'
import {Container,Nav,Navbar} from 'react-bootstrap';
import { useSelector } from 'react-redux';
import {LinkContainer} from 'react-router-bootstrap';

const Header = () => {
    const {userInfo} = useSelector(state=>state.userInfo);
    const {isLogin} = userInfo;
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
           !isLogin?(
            <LinkContainer to='/login'>
            <Nav.Link ><i className='fas fa-user mx-3'></i><strong>login</strong></Nav.Link>
            </LinkContainer>
           ):(<h1>hello</h1>)
       }
       <LinkContainer to='/signup'>
       <Nav.Link ><i className='fas fa-user mx-3'></i><strong>sign up</strong></Nav.Link>
       </LinkContainer>
      </Nav>
    
      </Navbar.Collapse>
  </Container>

</Navbar>
        </header>
       
    )
}

export default Header;
