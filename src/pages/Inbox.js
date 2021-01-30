import React from "react";

import InboxTop from "../components/InboxTop";
import SingleUser from "../components/SingleUser";
import { BiSend } from "react-icons/bi";
import { MdAttachment } from "react-icons/md";
import { GrEmoji } from "react-icons/gr";
import { BsFillMicFill } from "react-icons/bs";

const Inbox = () => {
  return (
    <div className="inbox">
      <InboxTop />
      <div className="chat-main-section">
        <div className="inbox-users">
          <SingleUser />
          <SingleUser read={true} />
          <SingleUser />
          <SingleUser read={true} />
          <SingleUser />
          <SingleUser />
          <SingleUser read={true} />
        </div>

        <div className="chats">
          <div className="chat-user-profile">
            <img src="/images/profile-image.jpg" alt=" user profile" />
            <p className="users-name">Sheldon Welinga</p>
            <p className="follow">@sheldon_welinga</p>
          </div>
          <div className="chat-heading">
            <div className="chat-title">
              Inquiry about relocation from nairobi
            </div>
            <div className="chat-info">
              <button className="btn btn-default">
                <span className="fa fa-info"></span>Chat info
              </button>
              <span className="fa fa-ellipsis-v"></span>
            </div>
          </div>
          {/* -------chat messages------- */}
          <div className="chat-messages">
            <div className="chat-id">
              Chat ID: <strong>1234567</strong>
            </div>
            <div className="chat-message chat-send">
              Lorem send to another <span className="chat-time">11:00am</span>
            </div>
            <div className="chat-message chat-received">
              Lorem received from a user
              <span className="chat-time">11:20am</span>
            </div>
            <div className="chat-message chat-received">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore
              unde, repudiandae repellendus corrupti neque necessitatibus nam
              laudantium atque incidunt maxime.
            </div>
          </div>
          {/* -----------end of chat messages-------- */}
          {/* ------------------type message---------- */}
          <div className="message-box">
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Type your message"
              />
            </div>
            <div className="message-buttons">
              <div>
                <MdAttachment className="icon" />
                <GrEmoji className="icon" />
                <BsFillMicFill className="icon" />
              </div>
              <button className="btn btn-warning">
                <BiSend className="icon" />
              </button>
            </div>
          </div>

          {/* -----------------end of type message---------- */}
        </div>
      </div>
    </div>
  );
};

export default Inbox;
