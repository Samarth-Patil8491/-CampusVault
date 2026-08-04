import { Routes, Route } from "react-router-dom";

import ProtectedRoute from "../components/ProtectedRoute";

import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
import UploadNotes from "../pages/UploadNotes";
import ViewNotes from "../pages/ViewNotes";
import MyUploads from "../pages/MyUploads";
import Profile from "../pages/Profile";
import EditNote from "../pages/EditNote";

function AppRoutes() {

  return (

    <Routes>

      {/* Public Routes */}

      <Route
        path="/"
        element={<Login />}
      />

      <Route
        path="/register"
        element={<Register />}
      />

      {/* Protected Routes */}

      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/upload"
        element={
          <ProtectedRoute>
            <UploadNotes />
          </ProtectedRoute>
        }
      />

      <Route
        path="/notes"
        element={
          <ProtectedRoute>
            <ViewNotes />
          </ProtectedRoute>
        }
      />

      <Route
        path="/my-uploads"
        element={
          <ProtectedRoute>
            <MyUploads />
          </ProtectedRoute>
        }
      />

      <Route
        path="/edit-note/:id"
        element={
          <ProtectedRoute>
            <EditNote />
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

  );

}

export default AppRoutes;