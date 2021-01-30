import React from "react";

const SingleUser = (props) => {
  return (
    <div className={props.read ? "single-user read" : "single-user"}>
      <div className="single-user-profile">
        <img src="/images/profile-image.jpg" alt=" user profile" />
        <p className="users-name">Sheldon Welinga</p>
        <p className="follow">@sheldon_welinga</p>
      </div>
      <div className="single-user-message">
        <h4>Inquiry about relocation</h4>
        <p>Vacancy adds helps you attract potential hires who are</p>
      </div>
      <div className="chat-id">
        ChatID: <strong>3362Gd2</strong>
      </div>
      <div className="chat-time">11:00am</div>
      <div className="unread-chats-count">4</div>
    </div>
  );
};

export default SingleUser;
