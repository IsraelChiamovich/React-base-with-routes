// src/routes/AppRoutes.tsx

import React from "react";
import { Routes, Route } from "react-router-dom";
import AuthRouter from "./AuthRouter";
import PagesRouter from "./PagesRouter";
import "../index.css";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="auth/*" element={<AuthRouter />} />
      <Route path="dashboard/*" element={<PagesRouter />} />
    </Routes>
  );
};

export default AppRoutes;
