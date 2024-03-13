// utils/api.js
import axios from "axios";

export const fetchBalance = async () => {
  try {
    const token = localStorage.getItem("tokenn");
    const response = await axios.get(
      "https://paytm-like-app.onrender.com/api/v1/account/balance",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data.balance;
  } catch (error) {
    console.log("Error fetching balance:", error);
    throw error;
  }
};
