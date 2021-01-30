import React from "react";
import { BsFilter } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";

const InboxTop = () => {
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
          <div className="filter-icon">
            <BsFilter className="icon" />
          </div>
          {/* <div className="filter-menu">
            <h5>Filters</h5>
            <select name="message-status" id="message-status">
              <option value="message statuses">message statuses</option>
            </select>
            <select name="message-times" id="message-times">
              <option value="time of messages">time of messages</option>
            </select>
          </div> */}
        </div>
        <div className="inbox-top-section">
          <button className="btn btn-warning">Start a new chat</button>
        </div>
      </div>
    </>
  );
};

export default InboxTop;
