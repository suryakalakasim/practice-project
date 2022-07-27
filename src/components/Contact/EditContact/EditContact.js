import React from "react";
import {Link} from 'react-router-dom';
let EditContact=()=>{
    return(
   <React.Fragment>
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
                      <form>
                          <div className="mb-2">
                              <input type="text" className="form-control" placeholder="Name"/>    
                          </div>
                          <div className="mb-2">
                              <input type="text" className="form-control" placeholder="Photo Url"/>
                              
                          </div>
                          <div className="mb-2">
                              <input type="number" className="form-control" placeholder="Mobile"/>
                              
                          </div>
                          <div className="mb-2">
                              <input type="email" className="form-control" placeholder="Email"/>                             
                          </div>
                          <div className="mb-2">
                              <input type="text" className="form-control" placeholder="Company"/>
                              
                          </div>
                          <div className="mb-2">
                              <input type="text" className="form-control" placeholder="Title"/>                             
                          </div>
                          <div className="mb-2">
                              <select className="form-cotrol">
                                  <option value="">Select  a Group </option>
                              </select>
                                               
                         </div>
                         <div className="mb-2">
                              <input type="submit" className="btn btn-primary" value="Update"/>
                              <Link to={'/contacts/list'} className="btn btn-dark ms-2">Cancel</Link>
                          </div>
                      </form>
                    </div>
                    <div className="col-md-6">
                        <img src="https://icon-library.com/images/users-icon-png/users-icon-png-15.jpg" alt="" className="contact-img"/>
                    </div>
              </div>
          </div>
      </section>
   </React.Fragment>
    )
};
export default EditContact;