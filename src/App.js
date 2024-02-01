import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import "./App.css";
// routes
import Router from "./routes";
import Login from "./Auth/Login";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track authentication state

  const handleLogin = () => {
    setIsLoggedIn(true);
    localStorage.setItem("isLoggedIn", "true"); // Store authentication status in local storage
  };

  useEffect(() => {
    const storedIsLoggedIn = localStorage.getItem("isLoggedIn");
    setIsLoggedIn(storedIsLoggedIn === "true");
  }, []);

  return (
    <div className="App">
      <HelmetProvider>
        <BrowserRouter>
          {isLoggedIn ? (
            <Router setIsLoggedIn={setIsLoggedIn} onLogin={handleLogin} />
          ) : (
            // <Login onLogin={handleLogin} />
            <Routes>
              <Route path="/*" element={<Login onLogin={handleLogin} />} />
            </Routes>
          )}
        </BrowserRouter>
      </HelmetProvider>
    </div>
  );
}

export default App;
