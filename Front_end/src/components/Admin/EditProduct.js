import React, { useEffect, useRef, useState } from 'react'
import {Row,Col, Button,Form, NavLink} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
import Button1 from '../Button'
import Formcontainer from '../Form/formcontainer'
import {GetProduct,editproduct} from '../../actions/productAction'
import { useHistory, useParams } from 'react-router'
import Indicator from '../Indicator/indicator'
import Loader from '../utilities_/myloader'
import { ADMIN_EDIT_PRODUCT_RESET, PRODUCT_ITEM_RESET } from '../../Reducer/constants'


const EditProduct1 = () => {
    const name = useRef();
    const price = useRef();
    const category = useRef();
    const image = useRef();
    const description = useRef();
    const subcategory = useRef();
    const brand = useRef();
    const countInStock = useRef();
    const [message,SetMessage] = useState(null);
    const dispatch = useDispatch();

   const {product,loading,error,success}  = useSelector(state=>state.productItem);
   const {success:success1,loading:loading1,error:error1}  = useSelector(state=>state.createProductReducer);

    const params  = useParams();
    
    useEffect(()=>{
       if(params.id && !loading){
        dispatch(GetProduct(params.id));

       }

       return (()=>{
        dispatch({type:ADMIN_EDIT_PRODUCT_RESET});
      })
    },[])

    useEffect(()=>{
        if(success1){
           // console.log('ee');
            SetMessage('Data Updated successfully !!');
            
        }
  else if(success){
    name.current.value = product.name;
    price.current.value= product.price;
    image.current.value = product.image;
    brand.current.value = product.brand;
    category.current.value = product.category;
    subcategory.current.value = product?.subcategory?product.subcategory:''
    description.current.value  = product.description;
    countInStock.current.value = product.countInStock;
    dispatch({type:PRODUCT_ITEM_RESET});

  }


    },[success,success1])

    const Submithandler = (e)=>{
       e.preventDefault();
       if(description.current.value.length <50)
         SetMessage('description must be of atleast 50 characters!!')
      else if(countInStock.current.value<0)
      SetMessage('countInStock must be greater than 0')
      else if(image.current.value === '')
      SetMessage('Insert an Image !!')
         
       else{
        let product = {
            name:name.current.value,
            price:price.current.value,
            image:image.current.value,
            brand:brand.current.value,
            category:category.current.value,
            subcategory:subcategory.current.value,
            description:description.current.value,
            countInStock:countInStock.current.value
        }
       dispatch(editproduct(product,params.id));

       }
      


    }
    const handler = ()=>{
        SetMessage(null);
    }
    return (
        <>
        
          
          { message && success1 && <Indicator handler={handler} message={message} color="alert-success" />}

         <LinkContainer to='/admin/products' >
         <button className="btn btn-outline-dark">Go Back</button>
         </LinkContainer>
            <Row>
            
            <Col className='d-flex justify-content-center'>
             
                  <h3 ><strong>Add Product</strong> 😋😋</h3>

            </Col>
            <Col sm={12} >
            <Formcontainer>
            <Form onSubmit={Submithandler}>
                  <Form.Group  controlId="Product Name">
                    <input required type='text' placeholder='Product Name'  ref={name}   />
                  </Form.Group>
                  <Form.Group  controlId="Product Price">
                    <input required type='text' placeholder='Product Price' ref={price}   />
                  </Form.Group>
                  <Form.Group  controlId="Product Image">
                    <input required type='text' placeholder='Product Image' ref={image}   />
                  </Form.Group>
                  <Form.Group  controlId="Product Brand">
                    <input required type='text' placeholder='Product Brand' ref={brand}   />
                  </Form.Group>
                  <Form.Group  controlId="Category">
                    <input required type='text' placeholder='Category' ref={category}   />
                  </Form.Group>
                  <Form.Group  controlId="Subcategory">
                    <input required type='text' placeholder='Subcategory' ref={subcategory}   />
                  </Form.Group>
                  
                  <Form.Group  controlId="Description">
                    <textarea required rows='5' cols='44' placeholder='Description' ref={description}   />
                  </Form.Group>
                  <Form.Group  controlId="Quantity">
                    <input required  type='number' placeholder='Quantity' ref={countInStock}   />
                  </Form.Group>
                  <br/>
                  <Button1  type='submit'active={!loading1} >{loading1?'updating...':'Update'}</Button1>

            </Form>
          
            </Formcontainer>
           
            </Col>

            
            
            </Row>

        </>
    )
}

export default EditProduct1;
