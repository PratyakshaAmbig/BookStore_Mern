import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import BackButton from '../Components/BackButton';
import Spinner from '../Components/Spinner';
import { toast } from 'react-toastify';

const EditBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishYear, setPublishYear] = useState("");
  const [loading, setLoading] = useState(false);
  const navigatePage = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios.get(`http://localhost:5555/books/${id}`)
      .then((response) => {
        setAuthor(response.data.author);
        setTitle(response.data.title);
        setPublishYear(response.data.publishYear);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  const handleEditBook = () => {
    const data = {
      title,
      author,
      publishYear
    };
    setLoading(true);
    axios.patch(`http://localhost:5555/books/${id}`, data)
      .then((response) => {
        console.log("Created data:", response);
        if (response.statusText) {
          toast.success(response.data.message);
          setLoading(false);
          navigatePage('/');
        }
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

  return (
    <div className='p-4 bg-gray-100'>
      <BackButton />
      {loading ? <Spinner /> : ''}
      <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[400px] p-4 mx-auto bg-white my-6'>
        <h1 className='text-3xl my-4 text-center text-green-600 shadow-md'>Edit Book</h1>
        <div className='my-4'>
          <label className='text-lg mr-4 text-gray-700'>Title</label>
          <input type='text' value={title} onChange={(e) => { setTitle(e.target.value) }} className='border-2 border-sky-500 px-3 py-2 w-full focus:outline-none focus:border-sky-700' />
        </div>
        <div className='my-4'>
          <label className='text-lg mr-4 text-gray-700'>Author</label>
          <input type='text' value={author} onChange={(e) => { setAuthor(e.target.value) }} className='border-2 border-sky-500 px-3 py-2 w-full focus:outline-none focus:border-sky-700' />
        </div>
        <div className='my-4'>
          <label className='text-lg mr-4 text-gray-700'>Publish Year</label>
          <input type='number' value={publishYear} onChange={(e) => { setPublishYear(e.target.value) }} className='border-2 border-sky-500 px-3 py-2 w-full focus:outline-none focus:border-sky-700' />
        </div>
        <button className='p-2 bg-sky-300 m-8' onClick={handleEditBook}>Save</button>
      </div>
    </div>
  );
};

export default EditBook;
