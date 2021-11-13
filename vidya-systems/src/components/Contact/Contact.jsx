import React, { useState } from "react";
import { Form, Button, FormGroup, FormControl, ControlLabel, Row, Col } from "react-bootstrap";
import styles from "./Contact.module.scss"
import axios from "axios";

const ContactForm = () => {
  const [server, setServer] = useState({
    submission: false,
    status: null
  })

  const handleResponse = (serverResponse, message, form) => {
    setServer({ submitting: true, status: { serverResponse, message } });
    if (serverResponse) {
      form.reset();
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    setServer({ submission: true });
    axios({
      method: "post",
      url: "https://formspree.io/f/xknkdjre",
      data: new FormData(form),
    })
      .then(r => { handleResponse(true, "Thanks for submitting!", form) })
      .catch(r => { handleResponse(false, "Could not submit form", form) })
    console.log(form)
  }
  return (
    <>
      <div className={styles["contact-container"]}>
        <div className={styles["form-container"]}>
          <Form onSubmit={handleSubmit} method="POST">
            <h5>Fill the form to know more details</h5>
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Name" name="name" />
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="name@example.com" name="email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={3} name="message" />
            </Form.Group>
            <button type="submit" disabled={server.submission}>Submit</button>
            {server.status && <p>{server.status.message}</p>}
          </Form>
        </div>
        
      </div >
    </>
  );
};

export default ContactForm;
