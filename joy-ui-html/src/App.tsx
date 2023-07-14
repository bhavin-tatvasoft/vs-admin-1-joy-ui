import React from "react";
import { ThemeProvider } from "@mui/joy";
import theme from "./app.theme";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Innerpage from "./pages/Innerpage";
function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <BrowserRouter basename="design/bhavin/vs-theme-1-joy-ui">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/innerpage" element={<Innerpage />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
