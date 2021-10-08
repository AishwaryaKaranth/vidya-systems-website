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
      url:"",
      data:new FormData(form)
    })
    .then(r=>{handleResponse(true,"Thanks for submitting!",form)})
    .catch(r=>{handleResponse(false,"Error",form)})
  }
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" required />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" required />
      </div>
      <div>
        <label htmlFor="message">Message:</label>
        <textarea id="message" required />
      </div>
      <button type="submit" disabled={server.submission}></button>
      {server.status&&<p>{server.status.message}</p>}
    </form>
  );
};

export default ContactForm;
