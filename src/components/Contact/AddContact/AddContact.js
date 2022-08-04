import React, { useEffect, useState } from "react";
import {Link,useNavigate} from 'react-router-dom';
import { ContactService } from "../../../services/ContactService";
const AddContact=()=>{
    const navigate=useNavigate();
    const [state,setState]=useState({
        loading:false,
        contact:{
          name:'',
          photo:'',
          mobile:'',
          email:'',
          company:'',
          title:'',
          groupId:''
        },
        groups:[],
        errorMessage:""
    });
    const updateInput=(event)=>{
        setState({
            ...state,
        contact:{
            ...state.contact,
         [event.target.name]:event.target.value   
        }    
        })
    }
    useEffect(()=> async()=>{
   try{
       setState({...state,loading:true});
    const response= await ContactService.getGroups()
   // console.log("addcontactResponce",response.data)
   setState({...state,
       loading:false,
       groups:response.data

   })
   }
   catch(error){

   }
    },[])
    const submitForm= async(e)=>{
        e.preventDefault();
   try{
   const response= await ContactService.createContact(state.contact)
   if(response){
   navigate('/contacts/list',{replace:true})
   }
   }
   catch(error){
    setState({...state,errorMessage:error.message});
    navigate('/contacts/add',{replace:false})
   }
    }
    const {loading,contact,groups,errorMessage}=state;
    return(
   <React.Fragment>
      <section className="add-contact p-3">
          <div className="container">
              <div className="row">
                  <div className="col">
                      <p className="h4 text-success fw-bold">Create Contact</p>
                      <p className="fst-italic">Tap Contacts, then tap the + button in the top-right corner.
Tap Recents, then tap the Info button next to the desired number. From here, you can create a new contact or add the number to an existing contact.</p>
                  </div>
              </div>
              <div className="row">
                  <div className="col-md-4">
                      <form onSubmit={submitForm}> 
                          <div className="mb-2">
                              <input type="text" required={true} name="name" value={contact.name} onChange={updateInput} className="form-control" placeholder="Name"/>    
                          </div>
                          <div className="mb-2">
                              <input type="text" required={true} name="photo" value={contact.photo} onChange={updateInput} className="form-control" placeholder="Photo Url"/>
                              
                          </div>
                          <div className="mb-2">
                              <input type="number" required={true} name="mobile" value={contact.mobile} onChange={updateInput} className="form-control" placeholder="Mobile"/>
                              
                          </div>
                          <div className="mb-2">
                              <input type="email" required={true} name="email" value={contact.email} onChange={updateInput} className="form-control" placeholder="Email"/>                             
                          </div>
                          <div className="mb-2">
                              <input type="text" required={true} className="form-control" name="company" value={contact.company} onChange={updateInput} placeholder="Company"/>
                              
                          </div>
                          <div className="mb-2">
                              <input type="text" required={true} className="form-control" name="title" value={contact.title} onChange={updateInput} placeholder="Title"/>                             
                          </div>
                          <div className="mb-2">
                              <select required={true} name="groupId" value={contact.groupId} onChange={updateInput} className="form-cotrol">
                                  <option value="">Select  a Group </option>
                                  {
                                      groups.length>0&&
                                      groups.map(group=>{
                                          return(
                                              <option key={group.id} value={group.id}>{group.name}</option>
                                          )
                                      })
                                  }
                              </select>
                                               
                         </div>
                         <div className="mb-2">
                              <input type="submit" className="btn btn-success" value="Create"/>
                              <Link to={'/contacts/list'} className="btn btn-dark ms-2">Cancel</Link>
                          </div>
                      </form>
                  </div>
              </div>
          </div>
      </section>
   </React.Fragment>
    )
};
export default AddContact;