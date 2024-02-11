import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import BackButton from '../Components/BackButton';
import Spinner from '../Components/Spinner';

const ShowBooks = () => {
  const [book, setBook] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios.get(`http://localhost:5555/books/${id}`)
      .then((response) => {
        console.log(response);
        setBook(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className='p-4 bg-gray-100'>
      <BackButton />
      {loading ? (
        <Spinner />
      ) : (
        <div className='flex flex-col center-content border-2 border-sky-400 rounded-xl w-fit p-4 mx-auto bg-white my-6'>
          <h1 className='text-3xl my-4 text-center text-green-600 shadow-md'>Book</h1>
          <div className='my-4'>
            <span className='text-xl mr-4 text-purple-700 font-semibold'>Id</span>
            <span className='text-xl'>{book._id}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-green-700 font-semibold'>Title</span>
            <span className='text-xl'>{book.title}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-yellow-700 font-semibold'>Author</span>
            <span className='text-xl'>{book.author}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-blue-700 font-semibold'>Publish Year</span>
            <span className='text-xl'>{book.publishYear}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-red-700 font-semibold'>Create Time</span>
            <span className='text-xl'>{new Date(book.createdAt).toString()}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-indigo-700 font-semibold'>Last Update Time</span>
            <span className='text-xl'>{new Date(book.updatedAt).toString()}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShowBooks;
