import React from 'react'
import ReactDOM from 'react-dom/client'
// import Dashboad from './components/layouts/Dashboard'
import App from './App.tsx'
// import './index.css'
import { HoverProvider } from './components/features/fayssol/context/HoverProvider.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
   
  </React.StrictMode>,
)
