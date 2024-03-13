import React, { useState } from "react";
import { Heading } from "../components/Heading";
import { SubHeading } from "../components/SubHeading";
import { InputBox } from "../components/InputBox";
import { Button } from "../components/Button";
import { BottomWarning } from "../components/BottomWarning";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Signin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isError, setIsError] = useState(false);

  const navigate = useNavigate();
  return (
    <>
     {/* <AuthCheck /> */}
      <div className="flex flex-col items-center justify-center w-3/4 mx-auto mt-5 border-2 border-black md:w-1/5">
        <Heading label={"Sign in"} />
        <SubHeading
          label={"Enter your information to signin to your account"}
        />
        <InputBox
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          label={"email"}
          placeholder={"mujju@gmail.com"}
          name={"email"}
        />
        <InputBox
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          label={"password"}
          placeholder={"#####"}
          name={"password"}
          type={"password"}
        />
        <Button
          onClick={async () => {
            try {
              const response = await axios.post(
                "https://paytm-like-app.onrender.com/api/v1/user/signin",
                {
                  username,
                  password,
                }
              );
              localStorage.setItem("tokenn", response.data.token);
              navigate("/dashboard");
            } catch (error) {
              setIsError(true);
              setIsError(error.message);
            }
          }}
          label={"Sign In"}
        />
        {isError ? <p className="text-red-700">Wrong Credentials</p> : null}
        <BottomWarning
          label={"Dont have an account?"}
          buttonText={"Sign Up"}
          to={"/signup"}
        />
      </div>
    </>
  );
};

export default Signin;
