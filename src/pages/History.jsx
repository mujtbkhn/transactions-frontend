import React, { useEffect, useState } from "react";
import axios from "axios";

const History = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const token = localStorage.getItem("tokenn");
        const response = await axios.get(
          "https://transactions-kxx7.onrender.com/api/v1/account/transactions",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setUser(response.data.transactions);
      } catch (error) {
        console.log("error fetching", error);
      }
    };
    fetchTransactions();
  }, []);

  return (
    <>
    {/* <AuthCheck /> */}
      <div className="bg-white border-2 border-gray md:m-10 mx-4 mt-8 md:w-[600px] h-[580px] flex justify-start md:mx-auto flex-col rounded-xl px-8">
        <h1 className="flex justify-start mt-4 text-2xl font-semibold">
          Recent Transactions
        </h1>
        <p>Your Last 10 Transactions</p>
        <div className="flex justify-between pb-4 mt-10 font-semibold">
          <p>Date</p>
          <br></br>
          <p>Receiver's Name</p>
          <p>Amount</p>
        </div>
        <div className="flex flex-col justify-between gap-4">
          {user.map((user, index) => (
            <Transaction key={index} user={user} />
            
          ))}
        </div>
      </div>
    </>
  );
};

function Transaction({ user }) {
  const date = new Date(user.timestamp);
  const formattedTime = date.toISOString().split("T")[0];
  const capitalFirstName = user.to? user.to.firstName[0].toUpperCase() + user.to.firstName.slice(1) : ' ';
  const capitalLastName = user.to? user.to.lastName[0].toUpperCase() + user.to.lastName.slice(1) : ' ';
  return (
    <div className="flex justify-between border-b border-gray">
      <div>{formattedTime}</div>
      <div>
        {user.to ? (
          <>
            <h2>
              {capitalFirstName} {capitalLastName}
            </h2>
          </>
        ) : (
          <h2>no recipient</h2>
        )}
      </div>
      <div>
        <h1>${user.amount}</h1>
      </div>
    </div>
  );
}

export default History;
