import axios from "axios";
import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import ToggleSidebar from "./Sidemenu";
import UserList from "./UserList";

function Dashboard() {
  const [totleUsers, setUsers] = useState([]);
  const [attendance, setAttendance] = useState([]);
  const [noattendance, setNoattendance] = useState("");

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

  const getAttendece = () => {
    axios
      .get("http://localhost:5000/attendance")
      .then((res) => {
        for (const endPointData of res.data) {
          const isoDate = endPointData["createdAt"];

          let date = new Date(isoDate);

          let month = date.getMonth() + 1;
          let dt = date.getDate();

          // if (dt < 10) {
          //   dt = "0" + dt;
          // }
          if (month < 10) {
            month = "0" + month;
          }
          let today = new Date();

          if (today.getDate() === dt) {
            setAttendance((attendance) => [...attendance, dt]);
          }
           setNoattendance(attendance.length);
        }
        console.log(attendance.length);
       
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // const noOfAttendence = attendance.length;
  console.log(noattendance);

  useEffect(() => {
    getUserData();
    getAttendece();
  }, []);
  return (
    <div>
      <ToggleSidebar />
      <Cards totleUsers={length} todayAttendence={noattendance} />
      <UserList />
    </div>
  );
}
export default Dashboard;
