import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import {ToastContainer} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'
import ApiContext from './Components/ApiContext.jsx'




ReactDOM.createRoot(document.getElementById('root')).render(
  <ApiContext>
    <BrowserRouter>
  <App/>
  <ToastContainer
position="top-right"
autoClose={1000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="colored"
bodyClassName="toastBody"
/>
  </BrowserRouter>
  </ApiContext>
)
