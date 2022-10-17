import React from "react";

function Navbar() {
  return (
    <div className="navbar">
      <span className="logo">Lema Chat</span>
      <div className="user">
        <img
          src="https://variety.com/wp-content/uploads/2022/09/Evan-Peters-Monster-Dahmer.png?w=681&h=383&crop=1"
          alt=""
        />
        <span>John</span>
        <button>Logout</button>
      </div>
    </div>
  );
}

export default Navbar;
