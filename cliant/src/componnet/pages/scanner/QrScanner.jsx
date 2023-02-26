import React from "react";
import axios from "axios";
import jwt from "jsonwebtoken";
import QrReader from "react-qr-reader";
import Navbar from "../../Headerbar/Navbar";

function QrScanner() {
  // const [scanResultWebCam, setScanResultWebCam] = useState("");
  // const [visible, setVisble] = React.useState(false);
  const saveQrdata = async (attendance) => {
    const { email } = jwt.decode(localStorage.getItem("token"));
    const URL = "http://localhost:5000/scanner";

    // console.log(attendance);
    try {
      const { data } = await axios.post(
        URL,
        { attendance, email },

        { headers: { "Content-type": "application/json" } }
      );

      if (data) {
        window.alert("Attendace Marked Successfuly..! ")
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleErrorWebCam = (error) => {
    console.log(error);
  };
  const handleScanWebCam = (attendance, email) => {
    if (attendance) {
      saveQrdata(attendance, email);
      // setScanResultWebCam(result);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="container ">
        <div className="col-md-5 mx-auto mt-5 ">
          <div className="p-3 shadow boder-rd">
            <QrReader
              delay={300}
              style={{ width: "100%" }}
              onError={handleErrorWebCam}
              onScan={handleScanWebCam}
            />

            <small className="form-text text-muted text-center">
              Please place scanner corretly to QR code.
            </small>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QrScanner;
