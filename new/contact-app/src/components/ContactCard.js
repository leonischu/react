import React from "react";
import user from "../images/user.jpeg"

const ContactCard= (props) => {
  const { name, email } = props.contacts; //yo gare paxi contacts.name contact.email garna pardaina
  return (
    <div className="item">
        <img className="ui avatar image" alt="user"  src={user} />
      <div className="content">
        <div className="header">{name}</div>
        <div>{email}</div>
      </div>
      <i className="trash alternate outline icon "></i>
      style={{ color: "red", marginTop: "7px" }}
    </div>
  );
};

export default ContactCard; 
