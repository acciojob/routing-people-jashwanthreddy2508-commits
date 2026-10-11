import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Userlist() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      const response = await fetch("https://dummyjson.com/users");
      const data = await response.json();

      setUsers(data.users);
    }

    fetchUsers();
  }, []);

  return (
    <>
      {users.map((user) => (
      <li key={user.id}>
        <Link to={`/UserDetails/${user.id}`} key={user.id}>
          <h1>{user.firstName} {user.lastName}</h1>
        </Link>
        </li>
      ))}
    </>
  );
}

export default Userlist;
