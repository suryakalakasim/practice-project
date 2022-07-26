import React from "react";
import { Link } from "react-router-dom";
let ContactList = () => {
    return (
        <React.Fragment>
            <section className="contact-search p-3">
                <div className="container">
                    <div className="grid">
                        <div className="row">
                            <div className="col">
                                <p className="h3">Contact Manager
                                    <Link to={'/contacts/add'} className="btn btn-primary">
                                        <i className="fa fa-plus-circle me-2" /> New</Link>
                                </p>
                                <p className="fst-italic">Customer Support Software That Brings Happier Clients  Better Customer Service. Improve Response Times.</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <form className="row">
                                    <div className="col">
                                        <div className="mb-2">
                                            <input type="text" className="form-control" placeholder="Search Names" />
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="mb-2">
                                            <input type="submit" className="btn btn-outline-dark" value="search" />
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="contact-list">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="card">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <img src="https://icon-library.com/images/users-icon-png/users-icon-png-15.jpg" alt="" className="contact-img" />
                                        </div>
                                        </div>
                                        <div className="col-md-7">
                                            <ul className="list-group">
                                                <li className="list-group-item list-group-item-action">
                                                    Name:<span className="fw-bold">Kala</span>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-md-1">

                                        </div>
                                   
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
};
export default ContactList;