import { Routes, Route } from "react-router-dom";

import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
import UploadNotes from "../pages/UploadNotes";
import ViewNotes from "../pages/ViewNotes";

import ProtectedRoute from "./ProtectedRoute";

function AppRoutes() {

    return (

        <Routes>

            <Route path="/" element={<Login />} />

            <Route path="/register" element={<Register />} />

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

        </Routes>

    );
}

export default AppRoutes;