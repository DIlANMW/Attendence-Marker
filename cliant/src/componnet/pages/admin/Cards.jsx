import React from "react";
import "../../pages/Adminside.css";
import "../../pages/All.css";
import GenRrport from "./GenRrport";
import QRGenerator from "./QRGenerator";
export default function Cards(props) {
  return (
    <div>
      <div className="container">
        <div className="row mt-2">
          <div className="col-md-3">
            <div className="card-counter bg-c-green order-card">
              <div className="card-block">
                <h6 className="m-b-20">Total Users</h6>
                <h2 className="text-right">
                  <i className="fa-solid fa-users f-right"></i>
                  <span>{props.totleUsers}</span>
                </h2>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card-counter bg-c-pink order-card">
              <div className="card-block">
                <h6 className="m-b-20">Today Total Attendance</h6>
                <h2 className="text-right">
                  <i className="fa-solid fa-user-check f-right"></i>
                  <span>{props.todayAttendence}</span>
                </h2>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            {/* <div className=" m-4 order-card">
              <div className="card-block">
                <button
                  type="button"
                  className="btn btn-primary m-4  custom-btn "
                >
                  Generate Report{" "}
                  <i className="fa-solid fa-file-chart-column"></i>
                </button>
              </div>
            </div> */}

            <GenRrport />
          </div>

          <div className="col-md-3">
            <div className="justify-content-md-center mt-2  mx-3 shadow boder-rd ">
              <QRGenerator />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
