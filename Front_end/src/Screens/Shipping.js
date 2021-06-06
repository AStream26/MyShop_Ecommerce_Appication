import React, { useEffect, useState } from 'react'
import {Form,Button, Col,Row, Container} from 'react-bootstrap'
import FormContainer from '../components/Form/formcontainer';
import { useHistory ,useLocation, useParams} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import MyInput from '../components/myInput';
import MyAddress from '../components/Address/address';
import Indicator from '../components/Indicator/indicator';
import {upadteuserData,setback} from '../actions/userAction';
import {Addaddress, AddItem, Addproduct} from '../actions/CartAction';
import { getShippingAddress } from '../actions/shipingAction';

const Shipping = () => {
    let history  = useHistory();
    let location = useLocation();
    let params = useParams();

    let {userData,loading,success} = useSelector(state=>state.userDetail);
    let {Address:shippingAddress,loading:loading1,error} =  useSelector(state=>state.shipppingReducer);
    let orderDetail = useSelector(state=>state.OrderDetail);
    
  
    let dispatch = useDispatch();
    let orderItems = orderDetail.orderItems;
    //------------------------------------------------------------------------------
    let [Address,SetAddress] = useState('');
    let [State,SetState] = useState('');
    let [Country,SetCountry] = useState('');
    let [MobileNo,SetMobileNo] = useState('');
    let [City,SetCity] = useState('');
    let [Pincode,SetPincode] = useState('');
    let [ChooseAddress,setChooseAddress] = useState({});
    let [newaddress,SetnewAddress] = useState(!( shippingAddress?.length!==0));
    let [message,setMessage] = useState(null);
    let [redirect,setredirect] = useState('/payment')
  

    let [proceed,setproceed] = useState(false);
    
    if(location.search){
      let query = new URLSearchParams(location.search);
      if(query.get('ref')==='from cart'){
        setredirect( `/payment?ref=checkout`);
      }
        
    }
    let clicked = ()=>{
        setChooseAddress({});
        SetnewAddress(!newaddress);
    }
    useEffect(()=>{
      if(!loading1){
          dispatch(getShippingAddress());
      }
    },[])

    useEffect(()=>{
      if(params?.id){
          if((orderItems.length===1) && (orderItems[0].product === params.id)){
              setproceed(true);
          }
        else {
        
        history.push('/');
        }
      }
      else{
          if(orderDetail.orderItems.length === 0){
            history.push('/cart');

          }
            
       else{
           
           setredirect('/payment?ref=fromcart')
       }
      }
      
    },[]);


    useEffect(()=>{
        if(success){
            setMessage('Address Added');
            setTimeout(()=>{
                dispatch(Addaddress({Address,State,City,MobileNo,Pincode,Country}));
                dispatch(setback())
                history.push(redirect);
                
               },1500)
        }
        return (()=>{
            setMessage(null);
        })
        
    },[success])
   
    let radiohandler = (value)=>{
      
        setChooseAddress(value);
       // console.log(value);
       SetnewAddress(false);
    }

    let addaddress = (e)=>{
     e.preventDefault();
       let  c = {
           Address,
           State,
           Country,
           MobileNo,
           City,
           Pincode
       }
      
       let local ='';
       Object.keys(c).forEach((el)=>{
           if(c[el]==='')
           local+=(el +' , ');
       })
          if(local!== '')
          setMessage(`Enter Valid ${local}`);

          else{
              setChooseAddress({
                  ...ChooseAddress,
                  Address,State,Country,Pincode,City,MobileNo
              })
              dispatch(upadteuserData( {shippingAddress:{Address,State,City,MobileNo,Pincode,Country}}));
             
          }
     
      
    }
    let Submithandler = (e)=>{
       
        e.preventDefault();
          
     if(Object.keys(ChooseAddress).length===0)
     setMessage('Enter Valid Data !!');
     else{
          // console.log(id);
          dispatch(Addaddress(ChooseAddress));
           history.push(redirect);
     }

    }
   
     let myhandler = ()=>{
         setMessage(null);
     }
    return (
        <Container>
        {  
            success?(<Indicator message = {message} handler={myhandler} color='alert-success'/>):null
        }
        {
           !success &&  message?(<Indicator message = {message} handler={myhandler} color='alert-danger'/>):null
        }
        <strong className="d-flex justify-content-start mb-2 border-bottom "><h1>Select Delivery Location</h1></strong>
      <FormContainer bactive={true} >
           
         
        {
            !newaddress?(
                <Row  >
                <Col >
                { 
                   shippingAddress?.length>0?(
                      <Form onSubmit={Submithandler} className='m-0'>
                      
                       {
                           shippingAddress.map((el,i)=><MyAddress handler = {radiohandler} i ={i} key={i}address={el} />)
                       }
                      
                       
                      </Form>
                    
                    
                   ):null
                 }
                    
                  </Col>
                </Row>
            ):null
        }
         
         
          <Col >

         {
             shippingAddress?.length>0 && (Object.keys(ChooseAddress).length===0)?(
                <Button onClick={clicked} className='btn btn-info btn-lg'>{!newaddress?'Add New Address':'Cancel'}</Button>
             ):null

             
         }

        {
            (newaddress || shippingAddress?.length <=0)? (
                <>
              
                <FormContainer active={true} >
                <h3>Enter New Address</h3>
                <Form    >
                     <Form.Group  controlId="Address">
                       {/* <Form.Label style={{color:"black"}}>Address</Form.Label> */}
                       <MyInput controlId="Address" type="text" value={Address} handler = {(e)=>SetAddress(e.target.value)} placeholder='Address'  />
                       
                   </Form.Group>
                    
                   <Form.Group   controlId="City">
                       {/* <Form.Label  style={{color:"black"}}>City</Form.Label> */}
                       <MyInput controlId="City" type="text" value={City} handler = {(e)=>SetCity(e.target.value)} placeholder='City'   />
                       
                   </Form.Group>
               
                   <Form.Group   controlId="State">
                       {/* <Form.Label  style={{color:"black"}}>State</Form.Label> */}
                       <MyInput controlId="state" type="text" value={State} handler = {(e)=>SetState(e.target.value)} placeholder='State'  />
                       
                   </Form.Group>
                   
       
   
                  
                   <Form.Group   controlId="Pincode">
                       {/* <Form.Label  style={{color:"black"}}>Pincode</Form.Label> */}
                       <MyInput controlId="pincode" type="text" value={Pincode} handler = {(e)=>SetPincode(e.target.value)} placeholder='Pincode'   />
                      
                   </Form.Group>
                   <Form.Group  className="m-2 mt-4" controlId="Country">
                       {/* <Form.Label  style={{color:"black"}}>Country</Form.Label> */}
                       <MyInput controlId="Country" type="text" value={Country} handler = {(e)=>SetCountry(e.target.value)} placeholder='Country'   />
                      </Form.Group>
   
                     <Form.Group  className="m-2 mt-4" controlId="MobileNo">
                       {/* <Form.Label  style={{color:"black"}}>MobileNo</Form.Label> */}
                       <MyInput controlId="MobileNO" type="text" value={MobileNo} handler = {(e)=>SetMobileNo(e.target.value)} placeholder='Mobile No'  />
           
                   </Form.Group>
                   <Row className="m-4">
            <Col  className="d-flex justify-content-center">
            <button size="lg" className="btn btn-info btn-lg" disabled={loading}  onClick={addaddress}>
                {
                    loading?'SAVING....':'SAVE AND PROCEED'
                }
                  </button>
            </Col>
             </Row>
                  
               
            
               </Form>
              
          </FormContainer>
          </>
            ):null
        }
          </Col>
      </FormContainer>
      {
          (Object.keys(ChooseAddress).length===0)?null:(
            <Row className="m-4">
            <Col >
            <div class="d-grid gap-2">
            <button className="btn btn-dark "
           
             disabled={loading}  onClick={Submithandler}>
                  {loading?'Shiping....':'Proceed'}
                  </button>
                  </div>
            </Col>
             </Row>
          )
      }
      
      </Container>
    )
}

export default Shipping
