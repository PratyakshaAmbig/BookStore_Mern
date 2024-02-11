import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import{toast} from "react-toastify"
const RegisterPage = () => {
  const [user, setUser] = useState({
    username: "",
    password: "",
    email: "",
    phone: ""
  });

const navigatePage = useNavigate();
  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser({
      ...user,
      [name]: value
    });
  };

  const handleForm = async(e) => {
    
    try {
        e.preventDefault();
    console.log(user);
        const response = await fetch(`http://localhost:5555/user`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(user)
        })
        console.log(response)
        const data = await response.json();
        console.log(data)
        if(response.ok){
            toast.success(data.message)
            navigatePage("/login")
        }
        else{
            toast.error(data.extra_details? data.extra_details : data.message)
        }
    } catch (error) {
        console.log(error.message)
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-teal-400 via-teal-500 to-blue-500">
      <form className="bg-white p-8 rounded shadow-md w-96 " onSubmit={handleForm}>
      <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">Registration Form</h2>

        <input
          type="text"
          name="username"
          value={user.username}
          placeholder="Username"
          onChange={handleInput}
          className="w-full py-2 px-4 mb-4 border rounded-md focus:outline-none focus:ring focus:border-blue-300 transition duration-300"
        />
        <input
          type="password"
          name="password"
          value={user.password}
          placeholder="Password"
          onChange={handleInput}
          className="w-full py-2 px-4 mb-4 border rounded-md focus:outline-none focus:ring focus:border-blue-300 transition duration-300"
        />
        <input
          type="email"
          name="email"
          value={user.email}
          placeholder="Email"
          onChange={handleInput}
          className="w-full py-2 px-4 mb-4 border rounded-md focus:outline-none focus:ring focus:border-blue-300 transition duration-300"
        />
        <input
          type="number"
          name="phone"
          value={user.phone}
          placeholder="Phone"
          onChange={handleInput}
          className="w-full py-2 px-4 mb-4 border rounded-md focus:outline-none focus:ring focus:border-blue-300 transition duration-300"
        />
        <h3 className="text-center text-gray-600 text-sm mt-0 mb-4">
  Already have an account? <Link to='/login' className="text-blue-500 hover:underline">Login</Link>
</h3>

        <button type="submit" className=" w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300 transition duration-300">Register</button>
      </form>
    </div>
  );
};

export default RegisterPage;
