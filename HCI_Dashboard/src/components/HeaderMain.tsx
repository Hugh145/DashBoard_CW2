import React from "react";
import { Link } from "react-router-dom";
import logoPath from "../assets/Image_logo.png";
import { useTheme } from "../context/themeColorContext";

type UserType = "guest" | "loginUser";

interface HeaderMainProps {
  userType: UserType;
}
const HeaderMain: React.FC<HeaderMainProps> = ({ userType }) => {
  const isLoggedIn = userType === "loginUser";
  const { theme, toggleTheme } = useTheme();

  return (
    <header className={`px-3 py-2 ${theme === "dark" ? "theme-dark" : "theme-light"}`}>
      <div className="container-fluid h-100">
        <div className="row h-100 align-items-center justify-content-between">
          <div className="col-3 d-flex align-items-center">
            <Link to="/dashboard">
              <img src={logoPath} alt="Logo" height="150" width={"200"} style={{ cursor: "pointer" }} />
            </Link>
          </div>
          <div className="col-6 text-center">
            <h3 className="mb-0 fw-bold">MEDIA SCOPE ANALYTICS</h3>
          </div>
          <div className="col-3 text-end">
            <button onClick={toggleTheme} className="btn btn-theme-toggle me-2">
              {theme === "light" ? "Dark Mode" : "Light Mode"}
            </button>
            {!isLoggedIn ? (
              <>
                <Link to="/register" className="btn btn-light me-2">Register</Link>
                <Link to="/login" className="btn btn-outline-light">Login</Link>
              </>
            ) : (
              <Link to="/signout" className="btn btn-warning">Logout</Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderMain;
