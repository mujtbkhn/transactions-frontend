import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import SendMoney from "./pages/SendMoney";
import History from "./pages/History";
import { fetchBalance } from "./utils/api";
import PrivateRoutes from "./components/PrivateRoutes";

function App() {
  const [balance, setBalance] = useState(null);
  useEffect(() => {
    fetchBalance()
      .then((balance) => {
        setBalance(balance);
      })
      .catch((error) => {
        console.error("error fetching balance", error);
      });
  }, []);

  const updateBalance = () => {
    fetchBalance()
      .then((balance) => {
        setBalance(balance);
      })
      .catch((error) => {
        console.error("error fetching balance", error);
      });
  };

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<PrivateRoutes />}>
            <Route
              path="/dashboard"
              element={<Dashboard balance={balance} setBalance={setBalance} />}
            />
            <Route
              path="/send"
              element={
                <SendMoney balance={balance} onBalanceUpdate={updateBalance} />
              }
            />
            <Route path="/history" element={<History />} />
          </Route>

          <Route path="/" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
