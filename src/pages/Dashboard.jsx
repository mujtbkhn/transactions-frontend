import { useEffect, useState } from "react";
import { Appbar } from "../components/Appbar";
import { Balance } from "../components/Balance";
import { Users } from "../components/Users";
import { fetchBalance } from "../utils/api";

const Dashboard = ({ }) => {
  const [loading, setLoading] = useState(true);
  const [balance, setBalance] = useState(null)
  const [newLoad, setNewLoad] = useState(true)

  useEffect(() => {
    const loadBalance = async () => {
      try {
        const balance = await fetchBalance();
        setBalance(balance);
        setLoading(false); // Set loading to false once balance is fetched
      } catch (error) {
        console.log("error fetching", error);
        setLoading(false); // Set loading to false in case of error
      }
    };
    loadBalance();
  }, []);

  const updateBalance = async() => {
    try {
      setNewLoad(false)
      const newBalance = await fetchBalance()
      setBalance(newBalance)
      setNewLoad(true)
    } catch (error) {
      console.error("error updating balance", error)
    }
  }

  const formatBalance = balance !== null ? parseFloat(balance).toFixed(4) : " ";

  return (
    <div>
      <Appbar onBalanceIncrease={updateBalance}/>
      <div className="m-8">
        {loading ? (
          <p>Loading...</p> // Show loading state while fetching balance
        ) : (
          <>
            {formatBalance !== null && (
              <Balance value={newLoad ? formatBalance : 'Loading'} isDashboardVisible={true} />
            )}
            <Users />
          </>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
