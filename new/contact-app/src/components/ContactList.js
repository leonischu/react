import React from "react";
import ContactCard from "./ContactCard";

const ContactList = (props) => {
    console.log(props);
    //create list and render the list in react
    const renderContactList = props.contacts.map((contact) =>{
        return(
        <ContactCard contact={contact}></ContactCard>

        );
    })
  return (<div className="ul celled list">{renderContactList}</div>);
}
export default ContactList;
