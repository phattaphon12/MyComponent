import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';

import Home from './page/Home/Home.jsx'
import Otp from './page/OTP/useOtp.jsx';
import PhoneNumberInput from './page/InputPhoneNumber/InputPhoneNumber.jsx';
import MultiStepForm from './page/MultiStepForm/MultiStepForm.jsx';
import SlideBanner from './page/SlideBanner/SlideBanner.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />
      }, {
        path: 'otp',
        element: <Otp />,
      }, {
        path: 'inputPhoneNumber',
        element: <PhoneNumberInput />
      }, {
        path: 'multiStepForm',
        element: <MultiStepForm />
      }, {
        path: 'SlideBanner',
        element: <SlideBanner />
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
