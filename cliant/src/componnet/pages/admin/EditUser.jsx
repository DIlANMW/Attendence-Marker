import React, { useState, useEffect } from "react";
import Sidemenu from "./Sidemenu";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

export default function EditUser() {
  const [username, setName] = useState("");
  const [regno, setRegno] = useState("");
  const [useremail, setEmail] = useState("");
  const location = useLocation();
  const Navigate = useNavigate();
  const { id } = location.state;

  const getData = () => {
    axios
      .get(`http://localhost:5000/users/${id}`)
      .then((res) => {
        // setUser(res.data);
        setName(res.data.name);
        setRegno(res.data.RegNo);
        setEmail(res.data.email);
        // console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const hadleEdit = (e) => {
    e.preventDefault();
    console.log(username);

    axios
      .put(`http://localhost:5000/users/update/${id}`, {
        name: username,
        RegNo: regno,
        email: useremail,
      })
      .then((res) => {
        window.alert("Successfuly Updated..");
        Navigate("/dashboard");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <Sidemenu />
      <div className="container">
        <div className="col-md-5 mx-auto mt-5 ">
          <div className="p-3 shadow boder-rd">
            <p className="text-center text-secondary">Edit User</p>
            <form>
              <div className="form-group">
                <label>Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Name"
                  value={username}
                  onChange={(e) => setName(e.target.value)}
                  required="true"
                />
              </div>
              <div className="form-group">
                <label>Registration No</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Reg. No"
                  value={regno}
                  onChange={(e) => setRegno(e.target.value)}
                  required="true"
                />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  value={useremail}
                  onChange={(e) => setEmail(e.target.value)}
                  required="true"
                />
                <small className="form-text text-muted">
                  We'll never share your email with anyone else.
                </small>
              </div>

              <button
                className="btn btn-primary custom-btn"
                onClick={(e) => hadleEdit(e)}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
