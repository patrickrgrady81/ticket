import React from 'react'

// import CancelDialog from '../CancelDialog';


import Button from '@mui/material/Button';

import './TicketForm.css';

import { Formik, Field, Form, useField } from "formik";

const TicketForm = () => {
    // Pass the useFormik() hook initial form values and a submit function that will
    // be called when the form is submitted

    const initialValues = {
        name: '',
        email: '',
        info: '',
    }

    const onSubmit = (values, {setSubmitting, resetForm}) => {
        console.log(JSON.stringify(values, null, 2));

        // Send the info to the backend
    }

        
    const doReset = () => {
        // TODO: Show a dialog to see if user really wants to reset
        console.log("Resetting");

        // if yes
    }

    // TODO: Validate form info

    return (
        <>
            <Formik {...{ initialValues, onSubmit }}>
            {() => (
                <Form noValidate className="new-ticket">
                    <label htmlFor="name">Name</label>
                    <Field
                        type="text"
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
                    <TextArea
                        label="Ticket Information"
                        name="info"
                        rows="6"
                        placeholder="Enter Ticket Information here..."
                        className="formField"
                    />
                    <Button type="submit">Submit</Button>
                    <Button type="reset">Reset</Button>
                </Form>
            )}
            </Formik>

        </>
    );
}

export default TicketForm


const TextArea = ({label, ...props}) => {
    // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
    // which we can spread on <input> and alse replace ErrorMessage entirely.
    const [field, meta] = useField(props);
    return (
        <>
            <label htmlFor={props.id || props.name}>{label}</label>
            <textarea className="text-area" {...field} {...props} />
            {meta.touched && meta.error ? (
                <div className="error">{meta.error}</div>
            ) : null}
        </>
    );
  };