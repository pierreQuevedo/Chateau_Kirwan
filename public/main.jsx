import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { AgeGateContent } from './AgeGate/AgeGateContent.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path : '/',
    element : <AgeGateContent id={'francais'}/>,
  },
  {
    path : '/home',
    element : <App/>
  },
  {
    path : '/fr',
    element : <AgeGateContent id={'francais'}/>
  },
  {
    path : '/en',
    element : <AgeGateContent id={'english'}/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
