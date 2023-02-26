import React from "react";
import axios from "axios";

function GenRrport() {
  const triggerReport = () => {
    axios
      .post(`http://localhost:5000/report`)

      .then((res) => {
        console.log(res);
        window.alert("Attendance data sheet downloaded..!");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <>
        <div className=" m-4 order-card">
          <div className="card-block">
            <button
              type="button"
              onClick={() => triggerReport()}
              className="btn btn-primary m-4  custom-btn "
            >
              Download <i className="fa-solid fa-file-chart-column"></i>
            </button>
          </div>
        </div>
      </>
    </div>
  );
}

export default GenRrport;
