// src/routes/AuthRouter.tsx

import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Dashboard/Home";
import Credit from "../pages/Dashboard/Credit";
import Transactions from "../pages/Dashboard/Transactions";

export default function PagesRouter() {
  return (
    <div className="main">
      <Routes>
        <Route index element={<Home />} />
        <Route path="credit" element={<Credit />} />
        <Route path="transactions" element={<Transactions />} />
      </Routes>
    </div>
  );
}
