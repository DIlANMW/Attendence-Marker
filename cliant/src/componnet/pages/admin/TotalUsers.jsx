import React, { useState, useEffect } from "react";
import axios from "axios";
import Cards from "./Cards";

export default function TotalUsers() {
  const [totleUsers, setUsers] = useState([]);

  const getUserData = () => {
    axios
      .get("http://localhost:5000/users")
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const length = totleUsers.length;
  console.log(length);

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <div>
      <Cards totleUsers={length} />
    </div>
  );
}
