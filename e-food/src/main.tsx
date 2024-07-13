import React from 'react'
import ReactDOM from 'react-dom/client'
// import Dashboad from './components/layouts/Dashboard'
import App from './App.tsx'
// import './index.css'
import { HoverProvider } from './components/features/fayssol/context/HoverContext.tsx';
import { ModalProvider } from './components/features/fayssol/context/ModalContext.tsx';
//REDUX
import { Provider } from 'react-redux';
import { PrimeReactProvider } from 'primereact/api';

// import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers/index.ts';
import { getPublicites } from './actions/pub.action.ts';
// import 'primeflex/primeflex.css';  
// import 'primereact/resources/primereact.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';

// const store = configureStore({
//     reducer: rootReducer,
//     devTools:true,
// });
// store.dispatch(getPublicites(1));
import { ComandListProvider } from './components/features/commandes/context/ComandContext.tsx';
import { EventListProvider } from './components/features/events/context/EventContext.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>

<PrimeReactProvider>
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
    
    </PrimeReactProvider>
  </React.StrictMode>,
)
