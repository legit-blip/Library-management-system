import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Books from "./pages/Books";
import ReturnBooks from "./pages/ReturnBooks";
import BorrowBooks from "./pages/BorrowedBooks";
import Students from "./pages/Students";
import StudentProfile from "./pages/StudentProfile";
import Profile from "./pages/Profile";
import ProtectedRoute from "./components/common/ProtectedRoute";

const App = () => {
  return (
    <BrowserRouter>
      <ToastContainer position="top-right" autoClose={3000} theme="dark" />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Everything below requires a logged-in user */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/books"
          element={
            <ProtectedRoute>
              <Books />
            </ProtectedRoute>
          }
        />
        <Route
          path="/returnbooks"
          element={
            <ProtectedRoute>
              <ReturnBooks />
            </ProtectedRoute>
          }
        />
        <Route
          path="/borrowbooks"
          element={
            <ProtectedRoute>
              <BorrowBooks />
            </ProtectedRoute>
          }
        />
        <Route
          path="/studentprofile"
          element={
            <ProtectedRoute>
              <StudentProfile />
            </ProtectedRoute>
          }
        />
        <Route
          path="/students"
          element={
            <ProtectedRoute>
              <Students />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
