// eslint-disable-next-line
import Header from './components/Header';
import Footer from './components/Footer';
import {AnimatePresence} from 'framer-motion';
import {BrowserRouter  as Router ,Redirect,Route,Switch} from 'react-router-dom';
import { TransitionGroup,CSSTransition } from 'react-transition-group'
import {Button, Container, NavItem} from 'react-bootstrap';
import HomeScreen from './Screens/HomeScreen';
import ProductScreen from './Screens/ProductScreen';
import CartScreen from './Screens/CartScreen';
import LoginScreen  from './Screens/LoginScreen';
import Registerscreen from './Screens/Registerscreen';
import profileScreen from './Screens/ProfileScreen';
import { useDispatch, useSelector } from 'react-redux';
import {getuserData} from './actions/userAction';
import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom'
import Shipping from './Screens/Shipping';
import SideBar from './components/SidebarMenu/NavItem';

function App() {
  const location = useLocation();
  const dispatch = useDispatch();
let {userData} = useSelector(state=>state.userDetail);
  
useEffect(()=>{
dispatch(getuserData());
},[dispatch])

const ref = useRef(null);

let toggle = ()=>{
  ref.current.toggler();
}

  return (
 <> 
   <SideBar ref={ref} style={{position:"absolute"}} width ="300" height="100vh" />
  
    <Header toggler = {toggle}  />
   
    <main className='py-3'>
    
     <Container>
 
        
          <AnimatePresence exitBeforeEnter>
         <Switch loaction = {location} key={location.pathname}>
                  <Route path='/' exact  component={HomeScreen}/>
        <Route path='/product/:id' exact  component={ProductScreen}/>
        <Route path='/cart/:id?' exact component={CartScreen}/>
        <Route path='/login'   exact  component={LoginScreen}/>
        <Route path='/register'exact    component={Registerscreen}/>
        
           {
             userData?(
              <>
              <Route path='/profile'  component={profileScreen} />
              <Route path='/shipping' component={Shipping} />
              </>

             ):null
           } 
    
           

       
       
    </Switch>
 
        
    </AnimatePresence>
     
   
     </Container>
    
    </main>
   
    <Footer/>
    </>
   
  );
}

export default App;
