import React from "react";

const ContactList = (props) => {
    console.log(props);
    //create list and render the list in react
    const renderContactList = props.contacts.map((contacts) =>{
        return(
            <div className="icon">
                <div className="content">
                    <div className="header">{contacts.name}</div>
                    <div>{contacts.email}</div>
                </div>
                <i className="trash alternate outline icon "></i>
            </div>

        );
    })
  return (<div className="ul celled list">{renderContactList}</div>);
}
export default ContactList;
