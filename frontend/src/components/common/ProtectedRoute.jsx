import { Navigate } from "react-router-dom";
import { isAuthenticated } from "../../utils/auth";

// Wrap any route element with this to require login.
// Usage in App.jsx: <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
export default function ProtectedRoute({ children }) {
  if (!isAuthenticated()) {
    return <Navigate to="/login" replace />;
  }
  return children;
}
