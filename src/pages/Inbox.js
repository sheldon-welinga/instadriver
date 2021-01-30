import React from "react";

import InboxTop from "../components/InboxTop";
import SingleUser from "../components/SingleUser";

const Inbox = () => {
  return (
    <div className="inbox">
      <InboxTop />
      <div className="chart-main-section">
        <div className="inbox-users">
          <SingleUser />
          <SingleUser read={true} />
          <SingleUser />
          <SingleUser read={true} />
          <SingleUser />
          <SingleUser />
          <SingleUser read={true} />
        </div>

        <div className="charts">
          <div className="chat-heading"></div>
        </div>
      </div>
    </div>
  );
};

export default Inbox;
