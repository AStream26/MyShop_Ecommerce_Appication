import React, { useEffect,useState,useRef } from 'react'
import { Form,Row,Col ,Container} from 'react-bootstrap';
import {Input} from 'reactstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useParams } from 'react-router';
import Formcontainer from '../../Form/formcontainer';
import Indicator from '../../Indicator/indicator';
import CartLoader from '../../utilities_/cartloader';
import Button1 from '../../Button'
import { createReview } from '../../../actions/productAction';
import { CREATE_REVIEW_RESET } from '../../../Reducer/constants';
const WriteReview = () => {
    const title = useRef();
    const comment = useRef();
    let[rec,setrec] = useState('Yes')
   let[rating,setRating] = useState(4);
    const [message,SetMessage] = useState(null);
    const dispatch = useDispatch();
    const history =useHistory();
    let {userData} =  useSelector(state=>state.userDetail);
    let params = useParams();
    let {success,loading,error}  = useSelector(state=>state.createReviewReducer);
   


    useEffect(()=>{
       if(!userData){
           history.push(`/login`)
         }
         else{
             if(!params.id)history.push('/');
        }
    },[])

    useEffect(()=>{
        if(success){
        
          SetMessage('Thanks For Submiting review')
          setTimeout(()=>{
            dispatch({type:CREATE_REVIEW_RESET})
            history.push(`/product/${params.id}`)
          },3000)
        }
        else if(error){
            SetMessage(error);
        }
    
        },[success])

    const Submithandler = (e)=>{
       e.preventDefault();
      
      
       let review = {
        title:title.current.value,
        comment:comment.current.value,
       
        rating:rating,
        recommend:rec,
        id:params.id
    }
   dispatch(createReview(review));
      // console.log(review);
    }
    const handler = ()=>{
        SetMessage(null);
    }
    return (
        <Container>
        
          { message && error && <Indicator handler={handler} message={message} color="alert-danger" />}
          { message && success && <Indicator handler={handler} message={message} color="alert-success" />} 
           <Col className='d-flex justify-content-center mt-3'>
             
             <h3 ><strong>Add a Review</strong> 😋😋</h3>

       </Col>
           
            <Formcontainer>
                
            <Form onSubmit={Submithandler}>
                  <Form.Group  controlId="title Name">
                    <input required type='text' placeholder='Title' ref={title}   />
                  </Form.Group>
                  <Form.Group  controlId="comment">
                    <textarea required rows='5' cols='44' placeholder='Comment' ref={comment}   />
                  </Form.Group>
                 
                  <Form.Group>
                    <Form.Label htmlFor="exampleSelect">Select</Form.Label>
                    <Input type="select" name="select" id="exampleSelect" onChange={(e)=>setRating(e.target.value)}>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                    </Input>
                </Form.Group>
                <Form.Group tag="fieldset">
        <legend>Would You Recommend this Product to other Customers ?</legend>
        <Form.Group  >
          <Form.Label >
            <Input checked type="radio" name="radio1" value='Yes' onChange={(e)=>setrec('Yes')}/>{'  '}
           Yes
          </Form.Label>
        </Form.Group>
        <Form.Group >
          <Form.Label >
            <Input type="radio" name="radio1" value='No' onChange={(e)=>setrec('No')} />{'  '}
           No
          </Form.Label>
        </Form.Group>
      </Form.Group>

                  <br/>
                  <Button1   type='submit'active={!loading} >{loading?'submiting...':'Submit Review'}</Button1>

            </Form>
          
            </Formcontainer>
           
           

        </Container>
    )
}

export default WriteReview;
