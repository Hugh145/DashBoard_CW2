import React from "react";
import { NavLink } from "react-router-dom";
import { useTheme } from "../context/themeColorContext"; // ✅ use your ThemeContext

type UserType = "guest" | "loginUser";

interface SidebarProps {
  userType: UserType;
}

const Sidebar: React.FC<SidebarProps> = ({ userType }) => {
  const { theme } = useTheme(); // ✅ get current theme

  const guestLinks = [
    { name: "Dashboard", path: "/dashboard" },
    { name: "Comparing Companies", path: "/comparingcompanies" },
    { name: "Register", path: "/register" },
    { name: "Login", path: "/login" },
  ];

  const loginUserLinks = [
    { name: "Dashboard", path: "/dashboard" },
    { name: "Comparing Companies", path: "/comparingcompanies" },
    { name: "AI Evaluation", path: "/ai_helper" },
    { name: "View Saved Results", path: "/viewsavedresults" },
    { name: "Sign Out", path: "/signout" },
  ];

  const links = userType === "guest" ? guestLinks : loginUserLinks;

  const sidebarClass = `d-flex flex-column vh-100 border-end p-3 ${theme === "dark" ? "bg-dark text-white" : "bg-light text-dark"}`;

  return (
    <div className={sidebarClass} style={{ width: "22%" } }>
      <h4 className="mb-4">Navigation</h4>
      <div className="list-group">
        {links.map((link, index) =>
          link.name === "Sign Out" ? (
            <button
              key={index}
              className="list-group-item list-group-item-action list-group-item-danger"
              onClick={() => (window.location.href = "/signout")}
            >
              {link.name}
            </button>
          ) : (
            <NavLink
              key={index}
              to={link.path}
              className={({ isActive }) =>
                `list-group-item list-group-item-action ${
                  isActive ? "active" : ""
                } ${theme === "dark" ? "bg-dark text-white" : "bg-light text-dark"}`
              }
            >
              {link.name}
            </NavLink>
          )
        )}
      </div>
    </div>
  );
};

export default Sidebar;
