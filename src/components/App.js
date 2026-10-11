import { BrowserRouter,Routes, Route } from "react-router-dom";
import React from "react";
import './../styles/App.css';

const App = () => {
  return (
    <div>
        {/* Do not remove the main div */}
    </div>
    <BrowserRouter>
  <Routes>
    <Route path="/UserList" element={<Userlist/>} />
  <Route path="/UserDetails" element={<Userdetails/>} />
  <Routes>
    <BrowserRouter/>
  )
}

export default App
