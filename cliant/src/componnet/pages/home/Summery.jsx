import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import jwt from "jsonwebtoken";
import Navbar from "../../Headerbar/Navbar";
import "../../pages/All.css";

function Summery() {
  const [avgTime, setAvg] = useState();
  const [totalAttendance, setTotalAttendence] = useState();

  const summeryProcess = () => {
    const token = localStorage.getItem("token");
    if (token) {
      const { email } = jwt.decode(token);

      axios
        .post("http://localhost:5000/datatochart", {
          email,
        })
        .then((res) => {
          // console.log(res);
          let dateArr = [];
          let timeArr = [];
          for (const endPointData of res.data) {
            const isoDate = endPointData["createdAt"];

            let date = new Date(isoDate);
            let year = date.getFullYear();
            let month = date.getMonth() + 1;
            let dt = date.getDate();

            if (dt < 10) {
              dt = "0" + dt;
            }
            if (month < 10) {
              month = "0" + month;
            }

            const time = new Date(date).toLocaleTimeString("en", {
              timeStyle: "short",
              hour12: false,
              timeZone: "UTC",
            });

            const finaldate = year + "-" + month + "-" + dt;
            const finalTime = time.replace(/:/g, ".");

            dateArr.push(finaldate);
            timeArr.push(parseFloat(finalTime));
          }

          // console.log(dateArr, timeArr);
          const avg = (array) => array.reduce((a, b) => a + b) / array.length;

          function convertNumToTime(number) {
            let sign = number >= 0 ? 1 : -1;

            number = number * sign;

            let hour = Math.floor(number);
            let decpart = number - hour;

            let min = 1 / 60;

            decpart = min * Math.round(decpart / min);

            let minute = Math.floor(decpart * 60) + "";

            if (minute.length < 2) {
              minute = "0" + minute;
            }

            let outputTime = hour + ":" + minute;
            setAvg(outputTime);
          }
          convertNumToTime(avg(timeArr));

          setTotalAttendence(dateArr.length);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      // localStorage.removeItem("token");
      window.location.href = "/login";
    }

    console.log(avgTime);
  };

  useEffect(() => {
    summeryProcess();
  });
  return (
    <div>
      <Navbar />
      <div className="container  ">
        <div className="row mt-2  justify-content-md-center mt-2  mx-3 p-4 shadow boder-rd">
          <div className="col-md-3">
            <div className="card-counter bg-c-green order-card">
              <div className="card-block">
                <h6 className="m-b-20">Total Attendance</h6>
                <h2 className="text-right">
                  <i className="fa-solid fa-user-check f-right"></i>
                  <span>{totalAttendance}</span>
                </h2>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card-counter bg-c-pink order-card">
              <div className="card-block">
                <h6 className="m-b-20">Avarage time of Attendances</h6>
                <h2 className="text-right">
                  <i className="fa-solid fa-user-clock f-right"></i>
                  <span>{avgTime}</span>
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="row ">
          <div className="col mt-5 w-50 ml-0 mr-0 mx-auto text-center ">
            <Link to="/scanner">
              <i className="fa-solid fa-qrcode fa-8x "></i>
            </Link>
            <div className="mt-3">
              <small className="form-text text-muted">
                Please touch QR code to open scanner{" "}
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Summery;
