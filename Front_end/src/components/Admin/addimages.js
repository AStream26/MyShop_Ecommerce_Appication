import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Form } from 'react-bootstrap';
import { useParams } from 'react-router'
import {uploadPhoto} from '../../actions/productAction'
import Indicator from '../Indicator/indicator';

const Addimages = () => {
    let params = useParams();
    let[Images,setImages] = useState();
   const dispatch = useDispatch();
   const {success,loading,error}  = useSelector(state=>state.uploadPhotoReduces);
   let [message,setMessage] = useState(null);
    const id = params.id;

   useEffect(()=>{
      if(success){
          setMessage('Images uploaded successfully !!');
      } else if(error){
          setMessage(error);
      }
   
   },[success,error])

    let fileChange = (e)=>{
       const files = e.target.files;
       setImages(files);
    }

    let submithandler = (e)=>{
        e.preventDefault();
        let formData = new FormData();
        Object.keys(Images).forEach((el,i)=>{
          //  console.log(Images[i]);
            formData.append('image',Images[i])
        })
       
       dispatch(uploadPhoto(formData,id));

    }
    let handler = ()=>{
        setMessage(null);
    }
    return (
        <>
       {
           message && <Indicator message={'Images uploaded successfully !!'} handler={handler} color={success?'alert-success':'alert-danger'} />
       }
       <h3>Add Images to better understand the Product </h3>

     <Form onSubmit ={submithandler}>

         <Form.Label > You can add max upto 5 photos </Form.Label>
         <br/>
     <input type='file' accept='image/*' onChange={fileChange} multiple />
     <br/><br/>
     <Button type="submit" disabled={loading} className='btn btn-dark'>{loading?'uploading.....':'Upload'}</Button>
     </Form>

        </>
    )
}

export default Addimages
