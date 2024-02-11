import React, { useContext } from 'react';
import { PiBookOpenTextLight } from 'react-icons/pi';
import { Link } from 'react-router-dom';
import { AuthProvider } from './ApiContext';
const Navbar = () => {
  const {isLoggedIn} = useContext(AuthProvider);
  return (
    <div className="bg-gradient-to-r from-gray-900 to-gray-800 p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <PiBookOpenTextLight className="text-3xl text-red-300" />
          <h2 className="text-white text-xl font-bold">Book-Store</h2>
        </div>
        <div className="flex space-x-4">
          <Link to="/" className="text-white hover:text-gray-300">Home</Link>
          {isLoggedIn? ( <Link to="/logout" className="text-white hover:text-gray-300">Logout</Link>) :
          (<>
          <Link to="/register" className="text-white hover:text-gray-300">Register</Link>
          <Link to="/login" className="text-white hover:text-gray-300">Login</Link>
          </>)}
          
        </div>
      </div>
    </div>
  );
}

export default Navbar;
