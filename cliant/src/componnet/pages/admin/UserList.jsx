import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../pages/Adminside.css";
import { Link } from "react-router-dom";

export default function UserList() {
  const [user, setUser] = useState([]);
 

  const getUserData = () => {
    axios
      .get("http://localhost:5000/users")
      .then((res) => {
        setUser(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteUserhandler = (id) => {
    console.log(id);

    // e.preventDefault();

     axios
      .delete(`http://localhost:5000/users/delete/${id}`)

      .then((res) => {
        console.log(res);
        getUserData()
      })
      .catch((err) => {
        console.log(err);
      });

    
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <div className="container custom-table">
      {user && user.length !== 0 ? (
        <table className="table ">
          <thead>
            <tr className="table-row table-rwo">
              <th scope="col">index</th>
              <th scope="col">Name</th>
              <th scope="col">Reg. Number</th>
              <th scope="col">Email</th>
            </tr>
          </thead>
          <tbody>
            {user.map((item, index) => {
              return (
                <React.Fragment>
                  <tr className="table-row table-rwo" key={index + 1}>
                    <td>{index + 1}</td>
                    <td>{item.name}</td>
                    <td>{item.RegNo}</td>
                    <td>{item.email}</td>
                    <td>
                      <Link to="/edit" state={{ id: item._id }}>
                        <button className="btn btn-primary custom-btn">
                          <i className="fa fa-edit">&nbsp; Edit</i>
                        </button>
                      </Link>
                      &nbsp;
                      <button
                        className="btn btn-danger custom-btn"
                        onClick={() => deleteUserhandler(item._id )}
                      >
                        <i className="fa fa-trash">&nbsp;</i>
                      </button>
                    </td>
                  </tr>
                </React.Fragment>
              );
            })}
          </tbody>
        </table>
      ) : (
        <div>Thire is no Data </div>
      )}
    </div>
  );
}
