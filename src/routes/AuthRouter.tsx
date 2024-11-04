// src/routes/AuthRouter.tsx

import { Outlet, Route, Routes } from "react-router-dom";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";

export default function AuthRouter() {
  return (
    <div>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Routes>
      <Outlet />
    </div>
  );
}