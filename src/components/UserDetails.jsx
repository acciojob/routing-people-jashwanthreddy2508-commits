
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Userdetails() {
  const { id } = useParams();

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchUser() {
      setLoading(true);

      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users/${id}`
        );

        const data = await response.json();

        setUser(data);
      } catch (error) {
        console.error("Error fetching user:", error);
        setUser(null);
      } finally {
        setLoading(false);
      }
    }

    fetchUser();
  }, [id]);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (!user || !user.id) {
    return <h2>User not found</h2>;
  }

  return (
    <div className="user-details">
      <h1>User Details</h1>

      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Username:</strong> {user.username}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Phone:</strong> {user.phone}</p>
      <p><strong>Website:</strong> {user.website}</p>

      <h3>Address</h3>
      <p>{user.address.street}</p>
      <p>{user.address.city}</p>

      <h3>Company</h3>
      <p>{user.company.name}</p>
    </div>
  );
}

export default Userdetails;
