import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Userdetails() {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function fetchUser() {
      const response = await fetch(`https://dummyjson.com/users/${id}`);
      const data = await response.json();

      setUser(data);
    }

    fetchUser();
  }, [id]);

  if (!user) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="user-details">
      <h1>User Details</h1>

      <img src={user.image} alt={user.firstName} />

      <h2>{user.firstName} {user.lastName}</h2>
      <p>Email: {user.email}</p>
      <p>Age: {user.age}</p>
      <p>Gender: {user.gender}</p>
      <p>Phone: {user.phone}</p>
      <p>Address: {user.address.address}, {user.address.city}</p>
    </div>
  );
}

export default Userdetails;


