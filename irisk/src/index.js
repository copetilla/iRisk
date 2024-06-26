import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './pages/App';
import Questions from './pages/Questions';
import Result from './pages/Result';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyAE_MIj_ouzvuvD-qpb6DDHWlttje_aCQk",
  authDomain: "irisk-54c96.firebaseapp.com",
  projectId: "irisk-54c96",
  storageBucket: "irisk-54c96.appspot.com",
  messagingSenderId: "558131244626",
  appId: "1:558131244626:web:5d9f3c34f728fb8b5df98b"
};

const router = createBrowserRouter([{
  path: '/',
  element: <App />,
  errorElement: <div>Error 404</div>
}, {
  path: '/Questions/:section',
  element: <Questions />
},
{
  path: '/Result/:points',
  element: <Result />
}
])

const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>


    <div className='App'>
      <div className='top'>
        <a className='btn btn-secondary m-2' href='/'>Home</a>
      </div>

      <div className="container-fluid d-flex justify-content-center align-items-center">
        <div className='row'>
          <div className="col">
            <RouterProvider router={router} />
          </div>
        </div>
      </div>


    </div>

  </React.StrictMode >
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals