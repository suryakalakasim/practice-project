import React,{useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllContacts } from "../../redux/action";
import AddEditContact from "../AddContact/Add&EditContact";
  const Contacts=()=>{
     // const [state,setState]=useState([])
      const contactData=useSelector(state=>state.contacts)
      console.log("contactData>>",contactData)
      const dispatch= useDispatch()
      //const contacts=[{name:"kala",phoneNumber:"123456789", email:"kala@gmail.com"}]
      useEffect(()=>{
       dispatch( getAllContacts())
      },[])
  return <div>
      <div className="container d-flex flex-row justify-content-between mt-4">
       <h1>All Contacts</h1>
       <button className="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">+Add Contact</button>
      </div>
      <div className="container">
      <table className="table">
  <thead>
    <tr>
      <th>S.No</th>
      <th>Name</th>
      <th >phoneNumber</th>
      <th >Email</th>
      <th >Action</th>
    </tr>
  </thead>
  <tbody>
      {contactData.length>0&&contactData.map((x,i)=><tr key={i}>
      <th>{i+1}</th>
      <td>{x.name}</td>
      <td>{x.phoneNumber}</td>
      <td>{x.email}</td>
      <td>
          <button className="btn btn-primary">Edit</button>
          <button className="btn btn-danger">Delete</button>
      </td>
    </tr>)}
  </tbody>
</table>
<AddEditContact/>
      </div>
  </div>
  }
  export default Contacts;