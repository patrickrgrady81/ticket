import React from 'react'

// import CancelDialog from '../CancelDialog';


import Button from '@mui/material/Button';

import './TicketForm.css';

import { Formik, Field, Form } from "formik";

const TicketForm = () => {
    // Pass the useFormik() hook initial form values and a submit function that will
    // be called when the form is submitted

    const initialValues = {
        name: '',
        email: '',
        info: '',
    }

    const onSubmit = (values) => {
        console.log(JSON.stringify(values, null, 2));

        // Send the info to the backend
    }

        
    const handleCancel = () => {
        // TODO: Show a dialog to see if user really wants to cancel
        console.log("Canceled");

        // if yes
    }

    return (
        <>
            <Formik {...{ initialValues, onSubmit }}>
            {() => (
                <Form noValidate className="new-ticket">
                    <label htmlFor="name">Name</label>
                    <Field
                        type="name"
                        id="name"
                        className="name formField"
                        name="name"
                    /><br/>
                    <label htmlFor="email">Email</label>
                    <Field
                        type="email"
                        id="email"
                        className="email formField"
                        name="email"
                    /><br/>
                    <label htmlFor="info">Ticket Information</label>
                    <Field
                        type="info"
                        id="info"
                        className="info formField"
                        name="info"
                    /><br/>
                    <Button type="submit">Submit</Button>
                    <Button onClick={handleCancel}>Cancel</Button>
                </Form>
            )}
            </Formik>

        </>
    );
}

export default TicketForm