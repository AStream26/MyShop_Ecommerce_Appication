import React from 'react'
import {Container,Nav,Navbar, NavDropdown} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import {LinkContainer} from 'react-router-bootstrap';
import {logout} from '../actions/Authuseraction';
const Header = (props) => {
   
    const dispatch = useDispatch();
    const {userData}= useSelector(state=>state.userDetail);
    
    //console.log(userInfo);
 
    
  

    let logouthandler = ()=>{
    
        dispatch(logout());
     
     //   window.location.assign('/login');
    }
  //  console.log(props.toggle)
    return (
      
          <header style={{
              position:"sticky",
              top:'0',
              zIndex:'2',
              width:'100wh'
              
          }}  >
              
              <>
              
<Navbar   style={{
     backgroundImage: `linear-gradient(315deg, #89d8d3 0%, #03c8a8 74%)`,
     backgroundColor: `#89d8d3`,
}} className="navbar-dark bg-primary  " expand="md" collapseOnSelect   >
    
  
   
  
   
   
   
   <i style={{ color:"white",Zindex:"200",marginLeft:"0.2em",position:"absolute"} } onClick={props.toggler} className="fas fa-bars fa-2x"></i>
   <Container >
   <LinkContainer to='/'>
   <Navbar.Brand   ><strong  className="d-none d-xl-block">MyShop</strong></Navbar.Brand>
    
   </LinkContainer>
      <Navbar.Toggle style={{opacity:"0"}} />
      <LinkContainer to='/'>
   <Navbar.Brand  ><strong style={{opacity:"1"}} className="d-sm-block d-md-none">MyShop</strong></Navbar.Brand>
    
   </LinkContainer>
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end d-none d-xl-block">
          
       <Nav   >
     
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
           ):( <>
                 
               <NavDropdown title={`${userData.name}`.split(' ')[0]} id="profile">
                   <LinkContainer to="/profile/setting">
                      <NavDropdown.Item>
                       Profile
                      </NavDropdown.Item>
                   </LinkContainer>
                   {
                       userData.role==='admin'?(
                        <>
                         <LinkContainer to="/admin/users">
                      <NavDropdown.Item>
                       Admin
                      </NavDropdown.Item>
                   </LinkContainer>
                        </>
                       ):null
                   }
                   <NavDropdown.Item onClick={logouthandler}>
                       Logout
                   </NavDropdown.Item>
               </NavDropdown>
               </>
           )
       }
       
      </Nav>
    
      </Navbar.Collapse>
  
      </Container>
</Navbar>
</>
        </header>
       
    )
}

export default Header;
