// src/routes/AuthRouter.tsx

import { Route, Routes } from "react-router-dom";
import Home from "../pages/Dashboard/Home";
import Credit from "../pages/Dashboard/Credit";
import Transactions from "../pages/Dashboard/Transactions";

export default function PagesRouter() {
  return (
    <div className="main">
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="dashboard/credit" element={<Credit />} />
        <Route path="dashboard/transactions" element={<Transactions />} />
      </Routes>
    </div>
  );
}
