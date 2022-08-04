import React, { useState,useEffect } from "react";
import {Link,useParams,useNavigate} from 'react-router-dom';
import { ContactService } from "../../../services/ContactService";
import Spinner from '../../Spinner/Spinner';
const EditContact=()=>{
    const navigate=useNavigate();
    const {contactId} = useParams();
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
        errorMessage:''
    });
    useEffect(()=> async()=>{
     try{
         setState({...state,loading:true});
         const response = await ContactService.getContact(contactId);
         const groupResponse= await ContactService.getGroups();
         //console.log("edit>>>>",groupResponse.data);
        setState({...state,
         loading:false,
        contact:response.data,
         groups:groupResponse.data
    })
        }
     catch(error){
      setState({
          ...state,
          loading:false,
         errorMessage:error.message

      })
    }
    },[contactId]);
    const updateInput= (event)=>{
      setState({
          ...state,
          contact:{
              ...state.contact,
              [event.target.name]:event.target.value
          }
      })
    };
   const submitForm= async(e)=>{
      e.preventDefault();
      try{
        const response= await ContactService.updateContact(state.contact,contactId)
        if(response){
        navigate('/contacts/list',{replace:true})
        }
        }
        catch(error){
         setState({...state,errorMessage:error.message});
         navigate(`/contacts/edit/${contactId}`,{replace:false})
        }
    }
    const {loading,contact,groups,errorMessage}=state
    return(
   <React.Fragment>
       {
           loading?<Spinner/>:<React.Fragment>
              <section className="add-contact p-3">
          <div className="container">
              <div className="row">
                  <div className="col">
                      <p className="h4 text-primary fw-bold">Edit Contact</p>
                      <p className="fst-italic">Tap Contacts, then tap the + button in the top-right corner.
Tap Recents, then tap the Info button next to the desired number. From here, you can create a new contact or add the number to an existing contact.</p>
                  </div>
              </div>
              <div className="row align-item-center" >
                  <div className="col-md-4">
                      <form onSubmit={submitForm}>
                          <div className="mb-2">
                              <input type="text" required={true} name="name" value={contact.name} onChange={updateInput} className="form-control" placeholder="Name"/>    
                          </div>
                          <div className="mb-2">
                              <input type="text" required={true} name="photo" value={contact.photo} onChange={updateInput}  className="form-control" placeholder="Photo Url"/>
                              
                          </div>
                          <div className="mb-2">
                              <input type="number" className="form-control" placeholder="Mobile" required={true} name="mobile" value={contact.mobile} onChange={updateInput} />
                              
                          </div>
                          <div className="mb-2">
                              <input type="email" required={true} name="email" value={contact.email} onChange={updateInput}  className="form-control" placeholder="Email"/>                             
                          </div>
                          <div className="mb-2">
                              <input type="text" className="form-control" placeholder="Company" required={true} name="company" value={contact.company} onChange={updateInput} />
                              
                          </div>
                          <div className="mb-2">
                              <input type="text" className="form-control" placeholder="Title" required={true} name="title" value={contact.title} onChange={updateInput} />                             
                          </div>
                          <div className="mb-2">
                              <select required={true} name="groupId" value={contact.groupId} onChange={updateInput}  className="form-cotrol">
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
                              <input type="submit" className="btn btn-primary" value="Update"/>
                              <Link to={'/contacts/list'} className="btn btn-dark ms-2">Cancel</Link>
                          </div>
                      </form>
                    </div>
                    <div className="col-md-6">
                        <img src={contact.photo} alt="" className="contact-img"/>
                    </div>
              </div>
          </div>
      </section>
           </React.Fragment>
       }      
   </React.Fragment>
    )
};
export default EditContact;