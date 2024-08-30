import axios from "axios";
import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Balance } from "../components/Balance";

const SendMoney = ({ balance, onBalanceUpdate }) => {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const name = searchParams.get("name");
  const [amount, setAmount] = useState(0);
  const [isTransferring, setIsTransferring] = useState(false);

  const handleTransfer = async () => {
    setIsTransferring(true);
    try {
      await axios.post(
        "https://transactions-kxx7.onrender.com/api/v1/account/transfer",
        {
          to: id,
          amount,
        },
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("tokenn"),
          },
        }
      );
      // Assuming the transfer is successful, update the balance locally
      // For demonstration purposes, just decrement the balance by the transferred amount
      onBalanceUpdate()
      setAmount(0); // Reset the input field
      setIsTransferring(false); // Reset the transfer state
    } catch (error) {
      console.error("Error initiating transfer: ", error);
      setIsTransferring(false); // Reset the transfer state in case of error
    }
  };

  const formatBalance =
    balance !== null ? parseFloat(balance).toFixed(4) : " ";

  return (
    <div className="flex justify-center h-screen bg-gray-100">
      <div className="flex flex-col justify-center h-full">
        <div className="max-w-md p-4 space-y-8 bg-white border rounded-lg shadow-lg h-min text-card-foreground w-96">
          <div className="flex gap-5 space-y-1.5 p-6">
            <Link to={"/dashboard"}>
              <img className="w-10" width="48" height="48" src="https://img.icons8.com/fluency-systems-filled/48/1A1A1A/long-arrow-left.png" alt="long-arrow-left" />
            </Link>
            <h2 className="text-3xl font-bold text-center">Send Money</h2>
          </div>
          <div>
            {formatBalance !== null && (
              <Balance value={formatBalance} isDashboardVisible={false} />
            )}
          </div>
          <div className="p-6">
            <div className="flex items-center space-x-4">
              <div className="flex items-center justify-center w-12 h-12 bg-green-500 rounded-full">
                <span className="text-2xl text-white">
                  {name[0].toUpperCase()}
                </span>
              </div>
              <h3 className="text-2xl font-semibold">{name}</h3>
            </div>
            <div className="space-y-4">
              <div className="space-y-2">
                <label
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  htmlFor="amount"
                >
                  Amount (in Rs)
                </label>
                <input
                  value={amount}
                  onChange={(e) => {
                    setAmount(e.target.value);
                  }}
                  type="number"
                  className="flex w-full h-10 px-3 py-2 text-sm border rounded-md border-input bg-background"
                  id="amount"
                  placeholder="Enter amount"
                />
              </div>
              <button
                onClick={handleTransfer}
                disabled={isTransferring}
                className="justify-center w-full h-10 px-4 py-2 text-sm font-medium text-white transition-colors bg-green-500 rounded-md ring-offset-background"
              >
                {isTransferring ? "Transferring..." : "Initiate Transfer"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SendMoney;
