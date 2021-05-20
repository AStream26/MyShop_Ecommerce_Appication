// eslint-disable-next-line
import Header from './components/Header';
import Footer from './components/Footer';
import {BrowserRouter  as Router ,Redirect,Route} from 'react-router-dom';
import {Container} from 'react-bootstrap';
import HomeScreen from './Screens/HomeScreen';
import ProductScreen from './Screens/ProductScreen';
import CartScreen from './Screens/CartScreen';
import LoginScreen  from './Screens/LoginScreen';
import Registerscreen from './Screens/Registerscreen';
import profileScreen from './Screens/ProfileScreen';
import { useDispatch, useSelector } from 'react-redux';
import {getuserData} from './actions/userAction';
import { useEffect } from 'react';


function App() {
  const dispatch = useDispatch();
let userData = useSelector(state=>state.userDetail);
  
useEffect(()=>{
dispatch(getuserData());
},[dispatch])
  return (
 <>
   <Header />
   
    <main className='py-3'>
    
     <Container>
     <Route path='/' component={HomeScreen} exact />
     <Route path='/product/:id'  component={ProductScreen}/>
     <Route path='/cart/:id?' component={CartScreen}/>
     <Route path='/login'    component={LoginScreen}/>
     <Route path='/register'    component={Registerscreen}/>

     
     {
       userData?(
        <Route path='/profile' component={profileScreen} />
       ):null
     }

     <Redirect to='/' />
    
     </Container>
    
    </main>
   
    <Footer/>
    </>
   
  );
}

export default App;
