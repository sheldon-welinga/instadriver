import React, { useState, useEffect } from "react";

import InboxTop from "../components/InboxTop";
import SingleUser from "../components/SingleUser";
import { BiSend } from "react-icons/bi";
import { MdAttachment } from "react-icons/md";
import { GrEmoji } from "react-icons/gr";
import { BsFillMicFill } from "react-icons/bs";

const Inbox = () => {
  const [show, setShow] = useState(false);
  const [contactInfoShow, setContactInfoShow] = useState(false);
  const [chats, setChats] = useState([]);
  const [activeChat, setActiveChat] = useState({});

  const toggleShow = () => {
    setShow(!show);
    setContactInfoShow(false);
  };

  const toggleContactInfoShow = () => {
    setContactInfoShow(!contactInfoShow);
    setShow(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/data.json");

      const data = await response.json();

      setChats(data.chats);

      setActiveChat(data.chats[0]);

      //   console.log(data);
    };

    fetchData();
  }, []);

  //   const handleClick = (e) => {
  //     console.log(e);
  //   };

  return (
    <div className="inbox">
      <InboxTop />
      <div className="chat-main-section">
        <div className="inbox-users">
          {chats.length &&
            chats.map((chat) => (
              <SingleUser
                key={chat.id}
                chat={chat}
                setActiveChat={setActiveChat}
              />
            ))}
        </div>

        {activeChat && (
          <>
            <div className="chats">
              <div className="chat-user-profile">
                <img src={activeChat.profile} alt=" user profile" />
                <p className="users-name">{activeChat.name}</p>
                <p className="follow">@{activeChat.follow}</p>
              </div>

              <div
                className={
                  show ? "close-delete-chat show" : "close-delete-chat"
                }
              >
                <button className="btn btn-default">Close Chat</button>
                <button className="btn btn-default">Delete Chat</button>
              </div>

              <div
                className={
                  contactInfoShow
                    ? "chat-contact-info show-info"
                    : "chat-contact-info"
                }
              >
                <div className="contact-title">
                  <span className="fa fa-info"></span>&nbsp;Contact Info
                </div>
                <div className="content">
                  <span>Mobile Number</span>
                  <strong className="content-info">0733221133</strong>
                </div>
                <div className="content">
                  <span>Email Address</span>
                  <strong className="content-info">johndoe@gmail.com</strong>
                </div>
              </div>

              <div className="chat-heading">
                <div className="chat-title">{activeChat.subject}</div>

                <div className="chat-info">
                  <button
                    className="btn btn-default"
                    onClick={toggleContactInfoShow}
                  >
                    <span className="fa fa-info"></span>Contact info
                  </button>
                  <span
                    className="fa fa-ellipsis-v"
                    onClick={toggleShow}
                  ></span>
                </div>
              </div>
              {/* -------chat messages------- */}
              <div className="chat-messages">
                <div className="chat-id">
                  Chat ID: <strong>{activeChat.id}</strong>
                </div>
                {activeChat.messages &&
                  activeChat.messages.map((message, index) => {
                    return message.sent ? (
                      <div className="chat-message chat-send" key={index}>
                        {message.content}
                        <span className="chat-time">{message.time}</span>
                      </div>
                    ) : (
                      <div className="chat-message chat-received" key={index}>
                        {message.content}
                        <span className="chat-time">{message.time}</span>
                      </div>
                    );
                  })}
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
          </>
        )}
      </div>
    </div>
  );
};

export default Inbox;
