import React from "react";
import { Link } from "react-router-dom";
let ViewContact=()=>{
    return(
   <React.Fragment>
     <section className="view-contact-intro">
         <div className="container">
             <div className="row">
                 <div className="col">
                    <p className="h3 text-warning fw-bold p-3">View Contact</p> 
                   <p className="fst-italic">On your Android phone or tablet, open the Contacts app . At the bottom, tap Contacts. Contacts by label: At the top left, tap Menu and then Under "Labels,"</p>
                 </div>
             </div>
         </div>
         </section>
         <section className="view-contact mt-3">
             <div className="container">
                 <div className="row align-item-center">
                     <div className="col-md-4">
                      <img src="https://icon-library.com/images/users-icon-png/users-icon-png-15.jpg" alt="" className="contact-img"/>
                     </div>
                     <div className="col-md-8">
                     <ul className="list-group">
                                                <li className="list-group-item list-group-item-action">
                                                    Name:<span className="fw-bold">Kala</span>
                                                </li>
                                                <li className="list-group-item list-group-item-action">
                                                    Mobile:<span className="fw-bold">9988964568</span>
                                                </li>
                                                <li className="list-group-item list-group-item-action">
                                                    Email:<span className="fw-bold">kala@gmail.com</span>
                                                </li>
                                                <li className="list-group-item list-group-item-action">
                                                    Company:<span className="fw-bold">HCL</span>
                                                </li>
                                                <li className="list-group-item list-group-item-action">
                                                    Title:<span className="fw-bold">kala@gmail.com</span>
                                                </li>
                                                <li className="list-group-item list-group-item-action">
                                                    Group:<span className="fw-bold">kala@gmail.com</span>
                                                </li>
                                            </ul>
                     </div>
                 </div>
                 <div className="row">
                     <div className="col">
                         <Link to={'/contacts/list'} className="btn btn-warning">Back</Link>
                     </div>
                 </div>
             </div>
             </section>      
   </React.Fragment>
    )
};
export default ViewContact;