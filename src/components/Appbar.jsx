import { useNavigate } from "react-router-dom";
import { Button } from "./Button";
import PLUS_BTN from "../../images/plus.png";
import { useEffect, useState } from "react";
import axios from "axios";

export const Appbar = ({ onBalanceIncrease }) => {
  const [isError, setIsError] = useState(false);
  const navigate = useNavigate();

  const handleIncrease = async () => {
    try {
      await axios.post(
        "https://paytm-like-app.onrender.com/api/v1/account/addBalance",
        null,
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("tokenn"),
          },
        }
      );
      onBalanceIncrease();
    } catch (error) {
      if (
        error.response &&
        error.response.data &&
        error.response.data.message === "amount more than 2500"
      ) {
        setIsError(true);
        setTimeout(() => {
          setIsError(false);
        }, 3000); // Reset isError state after 3 seconds
      } else {
        console.error("Error increasing balance:", error);
      }
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsError(false);
    }, 3000); // Reset isError state after 3 seconds on component unmount
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex justify-between shadow h-14">
      <div className="flex flex-col justify-center h-full ml-4">
        Transactions App
      </div>
      <div className="flex justify-center my-auto">
        <Button
          className="flex "
          onClick={() => {
            navigate("/history");
          }}
          label={"History"}
        />
      </div>

      <div className="flex">
        <div className="flex flex-col justify-center h-full mr-4">Hello</div>
        <div className="flex justify-center w-12 h-12 mt-1 mr-2 rounded-full bg-slate-200">
          <div className="flex flex-col justify-center h-full text-xl">U</div>
        </div>
        <div>
          <Button
            onClick={() => {
              localStorage.removeItem("tokenn");
              navigate("/signin");
            }}
            label={"Sign Out"}
          />
        </div>
        <div className="flex justify-center w-10 h-10 my-auto mr-2 ">
          <button onClick={handleIncrease}>
            <img src={PLUS_BTN} alt="Increase your amount" />
          </button>
          {isError ? alert("balance more than 2500") : null}
        </div>
      </div>
    </div>
  );
};
