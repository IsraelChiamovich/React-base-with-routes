// src/App.tsx

import React, { useState } from "react";
import BankContext from "./context/bank";
import Bank from "./types/Bank";
import Account from "./types/Account";
import AccountContext from "./context/account";
import Layout from "./components/Layout";
import AppRoutes from "./routes/AppRoutes";

export default function App() {
  const [bank, setBank] = useState<Bank>({
    treasure: 10000,
    users: [
      {
        name: "Yo",
        account_id: "12345",
      },
      {
        name: "Jo",
        account_id: "54321",
      },
    ],
  });
  const [account, setAccount] = useState<Account>({
    balance: 5000,
    id: "12345",
    loans: [],
    transactions: [],
  });
  return (
    <div className="app">
      <BankContext.Provider value={bank}>
        <AccountContext.Provider value={account}>
          <Layout>
            <AppRoutes />
          </Layout>
        </AccountContext.Provider>
      </BankContext.Provider>
    </div>
  );
}
