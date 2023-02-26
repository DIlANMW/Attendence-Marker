import QRCode from "qrcode";
import React, { useState } from "react";

export default function QRGenerator() {
  const [text, setText] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const generateQrCode = async () => {
    try {
      const response = await QRCode.toDataURL(text);
      setImageUrl(response);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <div className="container">
        <p className="text-center pt-2 text-secondary">Generate QR Code</p>
        <div className="">
          <input
            className="  input-group input-group-lg input-rd"
            label="Enter Text Here"
            onChange={(e) => setText(e.target.value)}
            required="true"
          />
          <div className="mx-5">
            <button
              className="btn  bg-c-blue custom-btn mt-2 "
              variant="contained"
              onClick={() => generateQrCode()}
            >
              Generate
            </button>
            <br />
            <br />
            <br />
            {imageUrl ? (
              <a href={imageUrl} download>
                <img src={imageUrl} alt="img" />
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
