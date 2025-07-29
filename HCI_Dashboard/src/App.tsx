import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar"; // ensure correct import
import Dashboard from "./components/Dashboard";
import Companies from "./components/Comparing_Companies";
import LoginUser from "./components/login";
import ViewSaveResults from "./components/ViewSaveResults";
import Register from "./components/RegisterUser";
import HeaderMain from "./components/HeaderMain";
import SignOut from "./components/SignOut";
import AI_Helper from "./components/AI_Helper";
import Footer from "./components/footer";
import { useEffect, useState } from "react";
import { ThemeProvider } from "./context/themeColorContext"; 
import "./App.css"; 

function App() {
  const [userType, setUserType] = useState<"guest" | "loginUser">("guest");

  useEffect(() => {
    const token = localStorage.getItem("token");
    setUserType(token ? "loginUser" : "guest");
  }, []);

  return (
    
    <main className="App">
    <ThemeProvider>
    <Router>
      <HeaderMain userType={userType} />
      <div className="d-flex" style={{ minHeight: "100vh" }}>
        <Sidebar userType={userType} />
        <div className="flex-grow-1 p-3">
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/comparingcompanies" element={<Companies />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<LoginUser setUserType={setUserType} />} />
            <Route path="/viewsavedresults" element={<ViewSaveResults />} />
            <Route path="/ai_helper" element={<AI_Helper />} />
            <Route path="/signout" element={<SignOut setUserType={setUserType} />} />
          </Routes>
        </div>
      </div>
    </Router>
    <Footer />
    </ThemeProvider>
    </main>
  );
}

export default App;
