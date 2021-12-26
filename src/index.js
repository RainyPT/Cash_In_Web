import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Login from "./routes/Login";
import Register from "./routes/Register";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./componentes/Header";
import Footer from "./componentes/Footer";
import Expenses from "./routes/Expenses";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="expenses" element={<Expenses />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
