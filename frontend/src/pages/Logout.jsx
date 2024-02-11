import React, { useContext, useEffect } from 'react'
import { AuthProvider } from '../Components/ApiContext'
import { Navigate } from 'react-router-dom'

const Logout = () => {
 const {logOutUser} = useContext(AuthProvider)

 useEffect(()=>{
    logOutUser()
 },[logOutUser])
 return <Navigate to='/register'/>
}

export default Logout