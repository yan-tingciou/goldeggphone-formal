import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Root from './root';
import './index.css';
import ErrorPage from './pages/error-page'
import Price from './pages/price';
import Service from './pages/service';
import About from './pages/about';

import reportWebVitals from './reportWebVitals';

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      errorElement: <ErrorPage/>,
      children: [
        {
          path: "/price",
          element:  <Price />,
        },
        {
          path: "/service",
          element:  <Service />,
        },
        {
          path: "/about",
          element:  <About />,
        },
      ]
    },
  ]);

  useEffect(() => {
    const redirect = sessionStorage.redirect;
    delete sessionStorage.redirect;
    if (redirect && redirect !== window.location.href) {
      window.history.replaceState(null, null, redirect);
    }
  }, []);

  return (
    <RouterProvider router={router} />
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
