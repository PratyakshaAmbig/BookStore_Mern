import React from 'react'
import { Link } from 'react-router-dom'
import {BsArrowLeft} from "react-icons/bs"
const BackButton = () => {
  return (
    <div className='flex'>
      <Link to="/" className='bg-sky-800 text-white-900 px-4 py-1 rounded-lg w-fit shadow-md hover:shadow-lg transition duration-300'>
    <BsArrowLeft className='text-2xl' />
</Link>

    </div>
  )
}

export default BackButton