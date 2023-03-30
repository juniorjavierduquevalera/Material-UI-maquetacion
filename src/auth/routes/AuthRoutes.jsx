import { Route, Routes } from "react-router-dom";
import { LoginPage } from "../pages/LoginPge";
import { RegisterPage } from "../pages/RegisterPage";

export const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="login" element={<LoginPage />} />
      <Route path="register" element={<RegisterPage />} />
    </Routes>
  );
};
