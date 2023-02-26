// import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import "../../pages/All.css";

function Registration() {
  const [name, setName] = useState("");
  const [RegNo, setRegNo] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const Navigate = useNavigate();

  async function registerUser(event) {
    event.preventDefault();

    const response = await fetch("http://localhost:5000/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        name,
        RegNo,
        email,
        password,
      }),
    });

    console.log(response);
    Navigate("/account");
    alert("Successfuly Registerd..");
  }

  return (
    <div className="container">
      <div className="col-md-5 mx-auto mt-5">
        <div className="p-3 shadow boder-rd">
          <div>
            <h2 className="col text-center m-2 text-primary">Register</h2>
          </div>
          <form onSubmit={registerUser}>
            <div className="mb-3">
              <label>Name</label>
              <input
                className="form-control"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
                required="true"
              />
            </div>
            <div className="mb-3">
              <label>Registration No</label>
              <input
                className="form-control"
                type="test"
                value={RegNo}
                onChange={(e) => setRegNo(e.target.value)}
                placeholder="Registration No"
                required="true"
              />
            </div>
            <div className="mb-3">
              <label>Email</label>
              <input
                className="form-control"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                required="true"
              />
            </div>
            <div className="mb-3">
              <label>Password</label>
              <input
                className="form-control"
                id="pw"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                required="true"
              />
              {/* <small className="form-text text-muted">
                We'll never share your any infomation with anyone else.
              </small> */}
            </div>
            <div className="row">
              <div className="col text-center">
                <button
                  type="submit"
                  className="btn btn-primary custom-btn"
                  value="Register"
                >
                  Sign up
                </button>

                <Link to={"/login"}>
                  {" "}
                  <br />
                  <button type="button" className="btn btn-link" value="Login">
                    Log in
                  </button>
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Registration;
