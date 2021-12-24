import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Header from './components/Header';

ReactDOM.render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<App />}/>
    <Route path="expenses" element={<Header />} />
  </Routes>
</BrowserRouter>,
  document.getElementById('root')
);