import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import "./../styles/App.css";
import Userlist from "./UserList";
import Userdetails from "./UserDetails";

const App = () => {
  return (
    <div>
      {/* Do not remove the main div */}

      <BrowserRouter>
        <Routes>
          <Route path="/UserList" element={<Userlist />} />
          <Route path="/UserDetails/:id" element={<Userdetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
