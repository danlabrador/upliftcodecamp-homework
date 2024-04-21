import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import EditProfileContextProvider from './context/EditProfileContextProvider.tsx'
import ProfileContextProvider from './context/ProfileContextProvider.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <EditProfileContextProvider><ProfileContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ProfileContextProvider></EditProfileContextProvider>
  </React.StrictMode>,
)
