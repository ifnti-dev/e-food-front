import React from 'react'
import ReactDOM from 'react-dom/client'
// import Dashboad from './components/layouts/Dashboard'
import App from './App.tsx'
// import './index.css'
import { HoverProvider } from './components/features/fayssol/context/HoverContext.tsx';
import { ModalProvider } from './components/features/fayssol/context/ModalContext.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>

    <HoverProvider> 
      <ModalProvider>
        <App />
      </ModalProvider>
    </HoverProvider>
   
  </React.StrictMode>,
)
