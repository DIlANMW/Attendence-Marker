import React from "react";

function Logout() {
  const logOut = () => {
    localStorage.removeItem("role");
    window.location.href = "/login";
  };
  return (
    <div>
      {" "}
      <button
        type="button"
        className="btn bg-c-pink m-4 custom-btn btn-sm"
        onClick={logOut}
      >
        Log out <i className="fa-solid fa-right-from-bracket"></i>
      </button>
    </div>
  );
}
export default Logout;
