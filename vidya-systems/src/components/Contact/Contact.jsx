import React, { useState } from "react";
import {
  Form
} from "react-bootstrap";
import styles from "./Contact.module.scss";
import axios from "axios";
import Footer from "../Footer/Footer";
import location from "../../assets/location.svg";

const ContactForm = () => {
  const [server, setServer] = useState({
    submission: false,
    status: null,
  });

  const handleResponse = (serverResponse, message, form) => {
    setServer({ submitting: true, status: { serverResponse, message } });
    if (serverResponse) {
      form.reset();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    setServer({ submission: true });
    axios({
      method: "post",
      url: "https://formspree.io/f/xknkdjre",
      data: new FormData(form),
    })
      .then((r) => {
        handleResponse(true, "Thanks for submitting!", form);
      })
      .catch((r) => {
        handleResponse(false, "Could not submit form", form);
      });
    console.log(form);
  };

  const address='http://maps.google.com/?q=1066/34, 4th Main Road, Triveni Main Rd, next to Punjab National Bank, 2nd Phase, Gokula 1st Stage, Mathikere, Bengaluru, Karnataka 560054'
  return (
    <>
      <div className={styles["contact-container"]}>
        <div className={styles["location-container"]}>
          <img src={location} alt="location symbol"/>
          <div className={styles["address-container"]}>
          <h3>Address</h3>
          <a href={address} target="_blank" rel="noreferrer">
            #1066/34, 4th Main Road, Gokula, 1st Stage, 2nd Phase, near CSB Bank, Mathikere Bengaluru -
            560054.
            <br/>
            <span>Click here for directions.</span>
          </a>
          <h3>Contact Number</h3>
          <a href="tel:9341231457" target="_blank" rel="noreferrer">93412 31457</a>
        </div>
        </div>
        <div className={styles["form-container"]}>
          <Form onSubmit={handleSubmit} method="POST">
            <h5>Fill the form to know more details</h5>
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Name" name="name" />
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                name="email"
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={3} name="message" />
            </Form.Group>
            <button type="submit" disabled={server.submission}>
              Submit
            </button>
            {server.status && <p>{server.status.message}</p>}
          </Form>
        </div>
        
      </div>
      <Footer/>
    </>
  );
};

export default ContactForm;
