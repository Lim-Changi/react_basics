import React from 'react';
import {
    BrowserRouter, Routes, Route, Navigate,
} from "react-router-dom";
import SignupPage from "./pages/signup/Signup.page";

function App() {
  return (
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Navigate to="/signup" />} />
            <Route path="/signup" element={<SignupPage />} />
        </Routes>
      </BrowserRouter>

  );
}

export default App;
