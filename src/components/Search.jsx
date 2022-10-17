import React from "react";

function Search() {
  return (
    <div className="search">
      <div className="searchForm">
        <input type="text" placeholder="Find a user" />
      </div>
      <div className="userChat">
        <img
          src="https://variety.com/wp-content/uploads/2022/09/Evan-Peters-Monster-Dahmer.png?w=681&h=383&crop=1"
          alt=""
        />
        <div className="userChatInfo">
          <span>Jane</span>
        </div>
      </div>
    </div>
  );
}

export default Search;
