import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./../styles/App.css";
import UserList from "./UserList";
import UserDetails from "./UserDetails";

const App = () => {
return ( <div>
{/* Do not remove the main div */}
<BrowserRouter>
<Routes>
<Route path="/UserList" element={<UserList />} />
<Route path="/UserDetails/:id" element={<UserDetails />} /> 
</Routes> 
</BrowserRouter> 
</div>
);
};

export default App;
