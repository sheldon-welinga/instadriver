import React from "react";

const SingleUser = ({ chat, setActiveChat }) => {
  // console.log(chat);
  const { id, name, profile, follow, unread, subject, messages } = chat;

  const handleClick = () => {
    setActiveChat(chat);
    document
      .querySelector(".chat-main-section > div:first-child")
      .classList.add("show");
    document.querySelector(".inbox .inbox-top").classList.add("hide");
  };

  return (
    <div
      className={unread <= 0 ? "single-user read" : "single-user"}
      onClick={handleClick}
    >
      <div className="single-user-profile">
        <img src={profile} alt=" user profile" />
        <p className="users-name">{name}</p>
        <p className="follow">@{follow}</p>
      </div>
      <div className="single-user-message">
        <h4>{subject}</h4>
        <p>{messages[messages.length - 1].content}</p>
      </div>
      <div className="chat-id">
        ChatID: <strong>{id}</strong>
      </div>
      <div className="chat-time">11:00am</div>
      <div className="unread-chats-count">{unread}</div>
    </div>
  );
};

export default SingleUser;
