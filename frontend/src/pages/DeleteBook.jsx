import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import BackButton from '../Components/BackButton';
import Spinner from '../Components/Spinner';
import { toast } from 'react-toastify';

const DeleteBook = () => {
  const [loading,setLoading] = useState(false);
  const {id} = useParams();
  const navigatePage = useNavigate();

  const handleDeleteBook = ()=>{
    setLoading(true)
    axios.delete(`http://localhost:5555/books/${id}`)
    .then((response)=>{
      console.log("Delete",response)
      if(response.statusText){
        toast.success(response.data.message)
        setLoading(false)
        navigatePage('/')
      }
         
    })
    .catch((error)=>{
      console.log(error);
      setLoading(false)
    })
  }
  return (
    <div className='p-4 '>
      <BackButton/>
      
      {loading? <Spinner/> : ''}
      <div className='flex flex-col items-center justify-center border-2 border-sky-400 rounded-xl w-[600px] p-8 m-auto'>
      <h1 className='text-4xl my-4 text-blue-500 shadow-lg'>Delete Book</h1>
  <h3 className='text-2xl'>Are You Sure You want to delete this book?</h3>
  <button className='p-4 bg-red-600 text-white m-8 w-full' onClick={handleDeleteBook}>Yes, Delete it</button>
</div>

      
    </div>
  )
}

export default DeleteBook