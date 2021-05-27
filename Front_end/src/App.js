// eslint-disable-next-line
import Header from './components/Header';
import Footer from './components/Footer';
import {AnimatePresence} from 'framer-motion';
import  {Redirect,Route,Switch} from 'react-router-dom';
import {Button, Container, NavItem} from 'react-bootstrap';
import HomeScreen from './Screens/HomeScreen';
import ProductScreen from './Screens/ProductScreen';
import CartScreen from './Screens/CartScreen';
import LoginScreen  from './Screens/LoginScreen';
import Registerscreen from './Screens/Registerscreen';
import profileScreen from './Screens/ProfileScreen';
import { useDispatch, useSelector } from 'react-redux';
import {getuserData} from './actions/userAction';
import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom'
import Shipping from './Screens/Shipping';
import SideBar from './components/SidebarMenu/NavItem';
import Backdrop from './components/Backdrop/backdrop';
import PaymentScreen from './Screens/PaymentScreen';
import Placeorder from './Screens/Placeorder';
import Checkout from './Screens/checkout';

function App() {
  let [show,setShow] = useState(false);

  const location = useLocation();
  const dispatch = useDispatch();
let {userData} = useSelector(state=>state.userDetail);
  
useEffect(()=>{
dispatch(getuserData());
},[dispatch])

const ref = useRef(null);
//console.log(ref.current);
let toggle = ()=>{
  ref.current.toggler();
  setShow(!show);
}

  return (
 <> 
   
  
  
    <Header  toggler = {toggle}  />
    
   <SideBar show1={show} ref={ref}  width ="300" height="100vh" /> 
   
  
 
    <main  >
  
   
     <Container style={{position:'relative'}}>
 
        
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
              
              <Route path='/:id?/shipping'  component={Shipping} />
              <Route path='/payment'  component={PaymentScreen} />
              <Route path='/placeorder'  component={Placeorder} />
              <Route path='/checkout/:id'  component={Checkout} />
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
