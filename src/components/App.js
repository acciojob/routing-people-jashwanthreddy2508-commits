import { Routes, Route } from "react-router-dom";
import React from "react";
import './../styles/App.css';

const App = () => {
  return (
    <div>
        {/* Do not remove the main div */}
    </div>
  <Routes>
    <Route path="/UserList" element={<Userlist/>} />
  <Route path="/UserDetails" element={<Userdetails/>} />
  <Routes>
  )
}

export default App
