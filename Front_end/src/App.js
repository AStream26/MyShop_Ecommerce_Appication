import Header from './components/Header';
import Footer from './components/Footer';
import {BrowserRouter  as Router ,Route} from 'react-router-dom';
import {Container} from 'react-bootstrap';
import HomeScreen from './Screens/HomeScreen';
import ProductScreen from './Screens/ProductScreen';
import CartScreen from './Screens/CartScreen';

function App() {
  return (
   <Router> 
   <Header />
   
    <main className='py-3'>
    
     <Container>
     <Route path='/' component={HomeScreen} exact />
     </Container>
     <Container>
     <Route path='/product/:id'  component={ProductScreen}/>
     </Container>
     <Route path='/cart/:id?' component={CartScreen}/>
    
    </main>
   
    <Footer/>
   </Router>
  );
}

export default App;
