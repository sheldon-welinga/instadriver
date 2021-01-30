import React, { useState } from "react";
import { BsFilter } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";

const InboxTop = () => {
  const [showFilterMenu, setShowFilterMenu] = useState(false);

  const toggleFilterMenu = () => {
    setShowFilterMenu(!showFilterMenu);
  };

  return (
    <>
      <div className="inbox-top">
        <div className="inbox-top-section">
          <div className="form-group">
            <input
              type="text"
              id="search"
              className="form-control"
              placeholder="Search users, messages or chat id's"
            />
            <label htmlFor="search">
              <FiSearch className="icon" />
            </label>
          </div>
          <div className="filter-icon" onClick={toggleFilterMenu}>
            <BsFilter className="icon" />
          </div>
          <div
            className={showFilterMenu ? "filter-menu show-menu" : "filter-menu"}
          >
            <h5>Filters</h5>
            <div className="form-group">
              <select
                name="message-status"
                id="message-status"
                className="form-control"
              >
                <option value="Read messages">Read messages</option>
                <option value="Unread messages">Unread mesages</option>
                <option value="Opened but not responded">
                  Opened but not responded
                </option>
                <option value="Ongoing discussion">Ongoing discussion</option>
                <option value="Ended discussion">Ended discussion</option>
              </select>
            </div>
            <div className="form-group">
              <select
                name="message-times"
                id="message-times"
                className="form-control"
              >
                <option value="Last hour">Last hour</option>
                <option value="12 hours ago">12 hours ago</option>
                <option value="Today">Today</option>
                <option value="This week">This week</option>
                <option value="This month">This month</option>
                <option value="This year">This year</option>
              </select>
            </div>
            <div className="form-group">
              <button className="btn btn-warning">Apply Filters</button>
            </div>
          </div>
        </div>
        <div className="inbox-top-section">
          <button className="btn btn-warning">Start a new chat</button>
        </div>
      </div>
    </>
  );
};

export default InboxTop;
