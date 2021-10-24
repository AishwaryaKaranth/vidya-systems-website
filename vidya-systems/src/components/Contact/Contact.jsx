import React, { useState } from "react";
import axios from "axios";

const ContactForm = () => {
  const [server, setServer]=useState({
    submission:false,
    status:null
  })

  const handleResponse=(serverResponse,message,form)=>{
    setServer({submitting:true,status:{serverResponse, message}});
    if(serverResponse){
      form.reset();
    }
  }

  const handleSubmit=(e)=>{
    e.preventDefault();
    const form=e.target;
    setServer({submission:true});
    axios({
      method:"post",
      url:"https://formspree.io/f/mgerbpao",
      data:new FormData(form),
    })
    .then(r=>{handleResponse(true,"Thanks for submitting!",form)})
    .catch(r=>{handleResponse(false,"Could not submit form",form)})
    console.log(form)
  }
  return (
    <form onSubmit={handleSubmit} method="POST">
      <div>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />
      </div>
      <div>
        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" required />
      </div>
      <button type="submit" disabled={server.submission}>Submit</button>
      {server.status&&<p>{server.status.message}</p>}
    </form>
  );
};

export default ContactForm;
