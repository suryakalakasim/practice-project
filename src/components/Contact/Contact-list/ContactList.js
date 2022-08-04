import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ContactService } from "../../../services/ContactService";
import Spinner from "../../Spinner/Spinner";

const ContactList = () => {
    const [query, setQuery] = useState({
        text: ""
    })
    const [state, setState] = useState({
        loading: false,
        contacts: [],
        filteredContacts: [],
        errorMessage: ""
    });
    useEffect(() => async () => {
        try {
            setState({ ...state, loading: true });
            const response = await ContactService.getALLContacts();
            console.log("response>>.", response)
            setState({
                ...state,
                loading: false,
                contacts: response.data || [],
                filteredContacts: response.data
            })
        }
        catch (error) {
            setState({
                ...state,
                loading: false,
                errorMessage: error.message
            })
        }
    }, []);
    const clickDelete = async (contactId) => {
        try {
            const response = await ContactService.deleteContact(contactId);
            if (response) {
                setState({ ...state, loading: true });
                const response = await ContactService.getALLContacts();
                // console.log("response>>.",response.data)
                setState({
                    ...state,
                    loading: false,
                    contacts: response.data,
                    filteredContacts: response.data
                })
            }
        }
        catch (error) {
            setState({
                ...state,
                loading: false,
                errorMessage: error.message
            })
        }
    }
    const searchContacts = (event) => {
        //if(event.target.value!==" "){
        setQuery({
            ...query,
            text: event.target.value.trim()
        })
        const searchContacts = state.contacts.filter(contact => {
            return contact.name.toLowerCase().includes(event.target.value.toLowerCase().trim())
        });
        setState({
            ...state,
            filteredContacts: searchContacts
        })
        //}
    }
    const { loading, contacts, filteredContacts, errorMessage } = state;
    return (
        <React.Fragment>
            <section className="contact-search p-3">
                <div className="container">
                    <div className="grid">
                        <div className="row">
                            <div className="col">
                                <p className="h3">Contact Manager
                                    <Link to={'/contacts/add'} className="btn btn-primary ms-2">
                                        <i className="fa fa-plus-circle me-2" /> New</Link>
                                </p>
                                <p className="fst-italic">Customer Support Software That Brings Happier Clients  Better Customer Service. Improve Response Times.</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="row">
                                    <div className="col">
                                        <div className="mb-2">
                                            <input type="text" name="taxt" value={query.text} onChange={searchContacts} className="form-control" placeholder="Search Names" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {
                loading ? <Spinner /> : <React.Fragment>
                    <section className="contact-list">
                        <div className="container">
                            <div className="row">
                                {
                                    filteredContacts?.length > 0 ?
                                        filteredContacts.map(contact => {
                                            return (
                                                <div className="col-md-6" key={contact.id}>
                                                    <div className="card my-2">
                                                        <div className="card-body">
                                                            <div className="row align-items-center d-flex justify-content-around">
                                                                <div className="col-md-4">
                                                                    <img src={contact.photo} alt="" className="contact-img" />
                                                                </div>
                                                                <div className="col-md-7">
                                                                    <ul className="list-group">
                                                                        <li className="list-group-item list-group-item-action">
                                                                            Name:<span className="fw-bold">{contact?.name}</span>
                                                                        </li>
                                                                        <li className="list-group-item list-group-item-action">
                                                                            Mobile:<span className="fw-bold">{contact.mobile}</span>
                                                                        </li>
                                                                        <li className="list-group-item list-group-item-action">
                                                                            Email:<span className="fw-bold">{contact.email}</span>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                                <div className="col-md-1 d-flex flex-column align-items-center">
                                                                    <Link to={`/contacts/view/${contact.id}`} className="btn btn-warning my-1">
                                                                        <i className="fa fa-eye" />
                                                                    </Link>
                                                                    <Link to={`/contacts/edit/${contact.id}`} className="btn btn-primary my-1">
                                                                        <i className="fa fa-pen" />
                                                                    </Link>
                                                                    <button className="btn btn-danger my-1" onClick={() => clickDelete(contact.id)}>
                                                                        <i className="fa fa-trash" />
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                            )
                                        }) : <h3>no filter records found</h3>                               }
                            </div>
                        </div>
                    </section>
                </React.Fragment>
            }
        </React.Fragment>
    )
};
export default ContactList;