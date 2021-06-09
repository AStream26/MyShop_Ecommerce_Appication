import React from 'react'
import {Container,Nav,Navbar, NavDropdown,Badge} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import {LinkContainer} from 'react-router-bootstrap';
import { Link, Route } from 'react-router-dom';
import {logout} from '../actions/Authuseraction';
import Searchbox from './searchbox';
const Header = (props) => {
   
    const dispatch = useDispatch();
    const {userData}= useSelector(state=>state.userDetail);
     const {cartList}  = useSelector(state=>state.cartItemReducer)
    //console.log(userInfo);
 
    
  

    let logouthandler = ()=>{
    
        dispatch(logout());
    }
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
}} className="navbar-dark bg-primary p-0" expand="md" collapseOnSelect   >
    
  
   
  
   
   
   
   <i style={{ color:"white",Zindex:"200",marginLeft:"0.2em",position:"absolute"} } onClick={props.toggler} className="fas fa-bars fa-2x"></i>
   <LinkContainer to='/'>
   <Navbar.Brand  ><strong style={{ color:"white",Zindex:"200",marginLeft:"2.5em" ,position:"absolute"} }className="d-sm-block d-md-none mt-3">MyShop</strong></Navbar.Brand>
    
   </LinkContainer>
   <Container className='my-0' >
   <LinkContainer to='/'>
   <Navbar.Brand   ><strong  className="d-none d-xl-block">MyShop</strong></Navbar.Brand>
    
   </LinkContainer>
   
    

   <LinkContainer  to='/cart'>
   <Navbar.Brand  className="d-sm-block d-md-none"  >
       <i className='fas fa-shopping-cart my-2'></i>
       { cartList?.products.length && cartList?.products.length>0? `${cartList?.products.length}`:''}
       </Navbar.Brand>
    
   </LinkContainer>
  
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end d-none d-xl-block">
      <span>
  <Route render={({history})=><Searchbox history={history}  />} />
  </span>
       <Nav   >
     
        <LinkContainer to='/cart'>
        
        <Nav.Link ><i className='fas fa-shopping-cart fa-2x mx-1'></i>{ cartList?.products.length && cartList?.products.length>0? `${cartList?.products.length}`:''}</Nav.Link>
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
              
              <Link to="/profile/setting">
              <img className='shadow' style={{
                     verticalAlign: 'middle',
                     width: '40px',
                     height: '40px',
                     borderRadius: '50%',
                     zIndex:'2',
                     border:'2px solid #89d8d3 '

                }} src={`/public/img/users/${userData.photo}`} alt='dp'/>
              </Link>
               
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
<Navbar  style={{
     backgroundImage: `linear-gradient(315deg, #89d8d3 0%, #03c8a8 74%)`,
     backgroundColor: `#89d8d7`
   
}} className="navbar-dark bg-primary p-0 m-0 d-block d-md-none" expand="md" collapseOnSelect>
    <Route render={({history})=><Searchbox history={history}  />} />
</Navbar>
</>
        </header>
       
    )
}

export default Header;
