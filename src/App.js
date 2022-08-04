import React from "react";
import './App.css';
import { Routes, Route,Navigate } from 'react-router-dom';
import NavBar from "./components/Navbar/Navbar";
import ContactList from "./components/Contact/Contact-list/ContactList";
import AddContact from "./components/Contact/AddContact/AddContact";
import ViewContact from "./components/Contact/ViewContact/ViewContact";
import EditContact from "./components/Contact/EditContact/EditContact";
import Contacts from "./Redux/Contact/Contact-list/ContactList";


let App = () => {

  return (
    <React.Fragment>
      
      <NavBar />
      <Contacts/>
      {/* <Routes>
        <Route path={'/'} element={<Navigate to={'/contacts/list'}/>}/>
        <Route path={'/contacts/list'} element={<ContactList/>}/>
        <Route path={'/contacts/add'} element={<AddContact/>}/>
        <Route path={'/contacts/view/:contactId'} element={<ViewContact/>}/>
        <Route path={'/contacts/edit/:contactId'} element={<EditContact/>}/>
      </Routes> */}
    </React.Fragment>
  );
}

export default App;
