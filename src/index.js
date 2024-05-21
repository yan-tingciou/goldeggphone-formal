import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';

import Root from './root';
import './index.css';
import ErrorPage from './pages/error-page';
import Price from './pages/price';
import Service from './pages/service';
import About from './pages/about';
import News from './pages/news';

import reportWebVitals from './reportWebVitals';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Root />} errorElement={<ErrorPage />}>
        <Route path="price" element={<Price />} />
        <Route path="service" element={<Service />} />
        <Route path="about" element={<About />} />
        {/* <Route path="news" element={<News />} /> */}
      </Route>
    </Routes>
  </Router>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();