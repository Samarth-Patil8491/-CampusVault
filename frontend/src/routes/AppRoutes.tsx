import { Routes, Route } from "react-router-dom";

import LandingPage from "../pages/Landing/LandingPage";
import LoginPage from "../pages/Auth/Login/LoginPage";
import RegisterPage from "../pages/Auth/Register/RegisterPage";
import ForgotPasswordPage from "../pages/Auth/ForgotPassword/ForgotPasswordPage";

import DashboardPage from "../pages/Student/DashboardPage";
import UploadNotesPage from "../pages/Student/UploadNotesPage";
import BrowseNotesPage from "../pages/Student/BrowseNotesPage";
import ProfilePage from "../pages/Student/ProfilePage";

import TeacherDashboardPage from "../pages/Teacher/TeacherDashboardPage";
import AdminDashboardPage from "../pages/Admin/AdminDashboardPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />

      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/forgot-password" element={<ForgotPasswordPage />} />

      <Route path="/student/dashboard" element={<DashboardPage />} />
      <Route path="/student/upload" element={<UploadNotesPage />} />
      <Route path="/student/browse" element={<BrowseNotesPage />} />
      <Route path="/student/profile" element={<ProfilePage />} />

      <Route path="/teacher/dashboard" element={<TeacherDashboardPage />} />

      <Route path="/admin/dashboard" element={<AdminDashboardPage />} />
    </Routes>
  );
};

export default AppRoutes;