import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'semantic-ui-css/semantic.min.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyB_TIR2DodJgLOPb3nkhKbm2kT9ZobZrng",
  authDomain: "fir-auth-5838a.firebaseapp.com",
  projectId: "fir-auth-5838a",
  storageBucket: "fir-auth-5838a.appspot.com",
  messagingSenderId: "428660930908",
  appId: "1:428660930908:web:26698e8df5b520288be999",
  measurementId: "G-B9P29LZ0Y6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getDatabase(app);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
