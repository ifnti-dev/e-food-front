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
import rootReducer from './reducers/index.ts';
import { getPublicites } from './actions/pub.action.ts';

const store = configureStore({
    reducer: rootReducer,
    devTools:true,
});
store.dispatch(getPublicites(1));
import { ComandListProvider } from './components/features/commandes/context/ComandContext.tsx';
import { EventListProvider } from './components/features/events/context/EventContext.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HoverProvider> 
      <ModalProvider>
      
        {/* <Provider store={store}>
        <App />
        </Provider> */}
        {/* <App /> */}

      <ComandListProvider>
        <EventListProvider>
        <App />
        </EventListProvider>
        </ComandListProvider>
      </ModalProvider>
    </HoverProvider>
    
   
  </React.StrictMode>,
)
