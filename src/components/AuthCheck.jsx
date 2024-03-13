// AuthCheck.jsxplus
import { useEffect, useState } from "react";

const AuthCheck = () => {
  const [hasToken, setHasToken] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("tokenn");
    setHasToken(!!token);
  }, []);

  return hasToken; 
};

export default AuthCheck;
