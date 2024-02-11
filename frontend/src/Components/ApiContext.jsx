import React, { createContext, useState } from 'react'
export const AuthProvider = createContext();


const ApiContext = ({children}) => {
    const [token, setToken] = useState('')
    const storeToken = (serverToken)=>{
        setToken(serverToken)
        return localStorage.setItem("Token", serverToken)
    }
    let isLoggedIn = !!token;
     
    const logOutUser = ()=>{
        setToken("");
        return localStorage.removeItem("Token")
    }
  return (
    <div>
        <AuthProvider.Provider value={{isLoggedIn,storeToken, logOutUser}}>
            {children}
        </AuthProvider.Provider>
    </div>
  )
}

export default ApiContext