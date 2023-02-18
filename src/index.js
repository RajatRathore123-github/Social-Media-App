import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { firebaseContext } from './context/firebase';
import { firebaseApp, db } from './lib/firebase';
import "./styles/app.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <firebaseContext.Provider value={{ firebaseApp, db}}>
    <App />
    </firebaseContext.Provider>
  
);

// client side rendered app : react
// database which is firebase
// react-loading-skeleton
// tailwind

// folder-structure
 // src
    // ->components
    // ->pages
    // ->context
    // ->constants
    // ->helpers
    // ->lib (firebase is going to live in here)
    // ->services (firebase functions in here)
    // ->styles (tailwind's folder (app/tailwind))
