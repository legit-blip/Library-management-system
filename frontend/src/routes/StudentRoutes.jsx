import React from "react";
import { Route } from "react-router-dom";
import StudentLayout from "../layouts/StudentLayout";
import StudentDashboard from "../pages/student/StudentDashboard";
import SearchBooks from "../pages/student/SearchBooks";
import MyBooks from "../pages/student/MyBooks";
import BorrowHistory from "../pages/student/BorrowHistory";
import StudentProfile from "../pages/student/StudentProfile";
import ProtectedRoute from "../components/common/ProtectedRoute";

/**
 * StudentRoutes
 * Nested route tree for the Student Portal, kept separate from the
 * Admin/Librarian route tree so the two dashboards never share layout
 * or navigation. Mount this inside your top-level <Routes>:
 *
 *   <Routes>
 *     <Route path="/admin/*" element={...Librarian routes...} />
 *     {StudentRoutes}
 *   </Routes>
 *
 * The whole tree is wrapped in ProtectedRoute with role="student", so an
 * admin account (or anyone not logged in) gets redirected away from it.
 * Every page here is read-only: no student route can add, edit, or
 * delete books, manage other students, or view admin reports.
 */
const StudentRoutes = (
  <Route
    path="/student"
    element={
      <ProtectedRoute role="student">
        <StudentLayout />
      </ProtectedRoute>
    }
  >
    <Route index element={<StudentDashboard />} />
    <Route path="search-books" element={<SearchBooks />} />
    <Route path="my-books" element={<MyBooks />} />
    <Route path="borrow-history" element={<BorrowHistory />} />
    <Route path="profile" element={<StudentProfile />} />
  </Route>
);

export default StudentRoutes;
