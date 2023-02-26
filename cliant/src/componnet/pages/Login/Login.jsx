import React, { useState } from "react";
import { Link } from "react-router-dom";
import jwt from "jsonwebtoken";
import "../../pages/All.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function loginUser(event) {
    event.preventDefault();

    const response = await fetch("http://localhost:5000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await response.json();

    const varify = jwt.verify(data.user, "1234dilanW");

    if (varify.email === "admin@gmail.com") {
      localStorage.setItem("role", "Admin");
      window.location.href = "/dashboard";
    } else {
      localStorage.setItem("role", "User");
      localStorage.setItem("token", data.user);
      window.location.href = "/";
    }
  }

  return (
    <div className="container">
      <div className="col-md-5 mx-auto mt-5 ">
        <div className="p-3 shadow boder-rd">
          <div>
            <h2 className="col text-center m-2 text-primary">Log in</h2>
          </div>

          <form onSubmit={loginUser}>
            <div className="mb-3">
              {" "}
              <label>Email</label>
              <input
                className="form-control"
                type="text"
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
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                required="true"
              />
            </div>

            <div className="row">
              <div className="col text-center mt-2 mb-3">
                {" "}
                <button
                  className="btn btn-primary  custom-btn"
                  type="submit"
                  value="Login"
                >
                  Log in
                </button>
                <br />
                <Link to="/account">
                  <button className="btn btn-link" type="submit" value="Login">
                    Registration
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

export default Login;
