import React, { useContext } from 'react'

import CancelDialog from '../CancelDialog';

import { useFormik, Form, Field, ErrorMessage } from 'formik';

import { IsModalOpenContext } from '../../context/isModalOpenContext';

function TicketForm() {
    // Pass the useFormik() hook initial form values and a submit function that will
    // be called when the form is submitted
    
    const [,setModalOpen] = useContext(IsModalOpenContext);

    const handleCancel = () => {
        // TODO: Show a dialog to see if user really wants to cancel
        console.log("Canceled");

        // if yes
        setModalOpen(false);
    }

    const formik = useFormik({
    initialValues: {
        name: '',
        email: '',
        info: '',
    },
    onSubmit: values => {
        console.log(JSON.stringify(values, null, 2));
        setModalOpen(false);
    },
    });
    return (
        <>
            <form onSubmit={formik.handleSubmit}>
                <label htmlFor="name">First Name</label>
                <input
                    id="name"
                    name="name"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.name}
                />

                <label htmlFor="email">Email Address</label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                /><br />

                <label htmlFor="info">Enter Ticket information</label>
                <textarea                   
                    id="email"
                    name="info"
                    type="info"
                    onChange={formik.handleChange}
                    value={formik.values.info} 
                    rows="4" /><br />

                <button type="submit">Submit</button>
            </form>
            <button type="cancel" onClick={handleCancel}>Cancel</button>
        </>
    );
}

export default TicketForm