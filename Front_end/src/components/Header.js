import React from 'react'
import {Container,Nav,Navbar} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
const Header = () => {
    return (
      
          <header>
<Navbar bg="light" variant='light' expand="lg"  collapseOnSelect>
    
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
       <LinkContainer to='/login'>
       <Nav.Link ><i className='fas fa-user mx-3'></i><strong>sign in</strong></Nav.Link>
       </LinkContainer>
      </Nav>
    
      </Navbar.Collapse>
  </Container>

</Navbar>
        </header>
       
    )
}

export default Header;
