import React from 'react';
import './App.css';
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import ContactCard from './ContactCard';

function App() {
  const contacts = [
    {
      id:1,
      name:"Ram",
      email:"Ram@gmail.com",
    },
    {
      id:2,
      name:"Sita",
      email:"Sita@gmail.com",
    }


    
  ];
  return (
    <div className="ul container">
      <Header/>
      <AddContact/>
      <ContactList contacts={contacts}/>
      <ContactCard/>
      
    </div>
  );
}

export default App;
