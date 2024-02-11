import React from 'react'
import {Routes,Route} from "react-router-dom"
import CreateBooks from './pages/CreateBooks'
import DeleteBook from './pages/DeleteBook'
import Home from './pages/Home'
import ShoowBooks from './pages/ShoowBooks'
import EditBook from './pages/EditBook'
import RegisterPage from './pages/RegisterPage'
import Navbar from './Components/Navbar'
import Login from './pages/Login'
import Logout from './pages/Logout'
const App = () => {
  return (
    <div >
      <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/books/create' element={<CreateBooks/>}/>
      <Route path='/books/delete/:id' element={<DeleteBook/>}/>
      <Route path='/books/edit/:id' element={<EditBook/>}/>
      <Route path='/books/details/:id' element={<ShoowBooks/>}/>
      <Route path='/register' element={<RegisterPage/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/logout' element={<Logout/>}/>
    </Routes>
    </div>
  )
}

export default App