import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface SignOutProps {
  setUserType: (type: "guest" | "loginUser") => void;
}

function SignOut({ setUserType }: SignOutProps) {
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.removeItem("token");
    setUserType("guest"); // ✅ reset user type
    navigate("/login");
  }, [navigate, setUserType]);

  return <h1>Signing Out...</h1>;
}

export default SignOut;