import { Navigate } from "react-router-dom";
import { isAuthenticated, getRole } from "../../utils/auth";

// Wrap any route element with this to require login.
// Usage: <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
//
// Pass `role="admin"` (or "student") to also restrict by role. A logged-in
// user with the wrong role gets sent to their own home page instead of
// being kicked back to login.
export default function ProtectedRoute({ children, role }) {
  if (!isAuthenticated()) {
    return <Navigate to="/login" replace />;
  }

  if (role && getRole() !== role) {
    const fallback = getRole() === "admin" ? "/dashboard" : "/student";
    return <Navigate to={fallback} replace />;
  }

  return children;
}
