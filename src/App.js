import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import React from "react";
import Header from "./componentes/Header";
import Footer from "./componentes/Footer";
import Homepage from "./routes/Homepage";
import Login from "./routes/Login";
import Register from "./routes/Register";
import Expensespage from "./routes/Expenses";
import Graphspage from "./routes/Graphs";
import Cookies from "js-cookie";
export default function App() {
  function RequireAuth({ children }) {
    return localStorage.getItem("userEmail") ? (
      children
    ) : (
      <Navigate to="/login" replace />
    );
  }
  function IsAuth({ children }) {
    return localStorage.getItem("userEmail") ? (
      <Navigate to="/expenses" replace />
    ) : (
      children
    );
  }
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route
          path="login"
          element={
            <IsAuth>
              <Login />
            </IsAuth>
          }
        />
        <Route
          path="register"
          element={
            <IsAuth>
              <Register />
            </IsAuth>
          }
        />
        <Route
          path="expenses"
          element={
            <RequireAuth>
              <Expensespage />
            </RequireAuth>
          }
        />
        <Route
          path="graphs"
          element={
            <RequireAuth>
              <Graphspage />
            </RequireAuth>
          }
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
