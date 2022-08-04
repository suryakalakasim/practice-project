import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ContactService } from "../../../services/ContactService";
import Spinner from "../../Spinner/Spinner";
const ViewContact = () => {
    const { contactId } = useParams();
    const [state, setState] = useState({
        loading: false,
        contact: {},
        errorMessage: '',
        group: {}
    });
    useEffect(() => async () => {
        try {
            setState({ ...state, loading: true })
            const response = await ContactService.getContact(contactId)
            const groupResponse = await ContactService.getGroup(response.data)
            //console.log("viewResponse",response.data)
            setState({
                loading: false,
                contact: response.data,
                group: groupResponse.data
            })
        }
        catch (error) {
            setState({
                ...state,
                loading: false,
                errorMessage: error.message,

            });
        }
    }, [contactId]);
    const { loading, contact, errorMessage, group } = state;
    return (
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
            {loading ? <Spinner /> : <React.Fragment>
                {
                    Object.keys(contact).length > 0 && Object.keys(group).length > 0 &&
                    <section className="view-contact mt-3">
                        <div className="container">
                            <div className="row align-item-center">
                                <div className="col-md-4">
                                    <img src={contact.photo} alt="" className="contact-img" />
                                </div>
                                <div className="col-md-8">
                                    <ul className="list-group">
                                        <li className="list-group-item list-group-item-action">
                                            Name:<span className="fw-bold">{contact?.name}</span>
                                        </li>
                                        <li className="list-group-item list-group-item-action">
                                            Mobile:<span className="fw-bold">{contact?.mobile}</span>
                                        </li>
                                        <li className="list-group-item list-group-item-action">
                                            Email:<span className="fw-bold">{contact.email}</span>
                                        </li>
                                        <li className="list-group-item list-group-item-action">
                                            Company:<span className="fw-bold">{contact.company}</span>
                                        </li>
                                        <li className="list-group-item list-group-item-action">
                                            Title:<span className="fw-bold">{contact.title}</span>
                                        </li>
                                        <li className="list-group-item list-group-item-action">
                                            Group:<span className="fw-bold">{group.name}</span>
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
                }
            </React.Fragment>}
        </React.Fragment>
    )
};
export default ViewContact;