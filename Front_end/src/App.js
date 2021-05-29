// eslint-disable-next-line
import Header from './components/Header';
import Footer from './components/Footer';
import {AnimatePresence} from 'framer-motion';
import  {Redirect,Route,Switch} from 'react-router-dom';
import {Container} from 'react-bootstrap';
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
import PaymentScreen from './Screens/PaymentScreen';
import Placeorder from './Screens/Placeorder';
import Checkout from './Screens/checkout';
import AdminScreen from './Screens/Admin/AdminScreen';
import Indicator from './components/Indicator/indicator';
import Loader from './components/utilities_/myloader';
import NotFound from './Screens/notfound';

function App() {
  let [show,setShow] = useState(false);

  const location = useLocation();
  const dispatch = useDispatch();
let {userData,loading,error} = useSelector(state=>state.userDetail);

useEffect(()=>{
  if(!userData || (Object.keys(userData).length === 0))
 // console.log('dispatch........');
dispatch(getuserData());
},[])

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
          {!userData &&  <Route path='/login'   exact  component={LoginScreen}/>}
          {!userData && <Route path='/register'exact    component={Registerscreen}/>}
          { userData &&   <Route path='/profile'  component={profileScreen} />}
          { userData &&    <Route path='/:id/shipping' exact  component={Shipping} />}
          { userData  &&   <Route path='/payment'exact  component={PaymentScreen} />}
          { userData  &&     <Route path='/placeorder' exact component={Placeorder} />}
          { userData  &&     <Route path='/checkout/:id' exact  component={Checkout} />}
          {
            userData && userData.role ==='admin' &&    <Route path='/admin'  component={AdminScreen} />
          }
             
     
     
     <Route path='*' >
      <NotFound />
       </Route>
     </Switch>
  
         
     </AnimatePresence>
    
    
      </Container>
     
     </main>
    
     <Footer/>
  </>
   
   
  );
}

export default App;
// {
//   userData.role ==='admin'?(
//     <>
//       <Route path='/admin'  component={AdminScreen} />
//     </>
//   ):null
//     }