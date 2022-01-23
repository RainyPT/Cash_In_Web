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
import AccountSettings from "./routes/AccountSettings";
export default function App() {
  function RequireAuth({ children }) {
    return Cookies.get("userToken") ? (
      children
    ) : (
      <Navigate to="/login" replace />
    );
  }
  function IsAuth({ children }) {
    return Cookies.get("userToken") ? (
      <Navigate to="/expenses" replace />
    ) : (
      children
    );
  }
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <IsAuth>
              <Homepage />
            </IsAuth>
          }
        />
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
        <Route
          path="accountsettings"
          element={
            <RequireAuth>
              <AccountSettings />
            </RequireAuth>
          }
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
