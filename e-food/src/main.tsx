import React from 'react'
import ReactDOM from 'react-dom/client'
// import Dashboad from './components/layouts/Dashboard'
import App from './App.tsx'
// import './index.css'
import { HoverProvider } from './components/features/fayssol/context/HoverContext.tsx';
import { ModalProvider } from './components/features/fayssol/context/ModalContext.tsx';
//REDUX
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {
    // Ici tu spécifies les reducers de ton application
    // Exemple :
    // myFeature: myFeatureReducer,
    // anotherFeature: anotherFeatureReducer,
  },
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>

    <HoverProvider> 
      <ModalProvider>
      <App />
        {/* <Provider store={store}>
        <App />
        </Provider> */}

      </ModalProvider>
    </HoverProvider>
   
  </React.StrictMode>,
)
