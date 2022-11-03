import React from "react";
import Footer from "./Footer.jsx";
function Contact() {
  return (
    <div className="contact_wrapper">
    <div className="contact">
      <div className="contact__heading">
        <div className="heading">Contact Me</div>
        <div className="subheading">
          Hi there, contact me about anything you have in mind.
        </div>
      </div>
      <form className="form">
        <div className="name">
          <label htmlFor="first_name">
            First name
            <input
              type="text"
              id="first_name"
              className="name_input"
              placeholder="Enter your first name"
            />
          </label>
          <label htmlFor="last_name">
            Last name
            <input
              type="text"
              id="last_name"
              className="name_input"
              placeholder="Enter your last name"
            />
          </label>
        </div>
        <label htmlFor="email">
            Email
            <input type="email" id="email" placeholder="chinedumbaodoh@gmail.com"/>
        </label>
        <label className="chackbox_align" htmlFor="message">
            Message
            <textarea name="message" id="message" cols={30} rows={30}>
                Send me a message and I will reply you as soon as possible
            </textarea>
        </label>
        <label className="checkbox_align" htmlFor="terms">
            <input type="checkbox" id="terms" />
            <div className="check_text">
                You agree to providing your data to Chinedu Mbaodoh who may contact you
            </div>
        </label>
        <div className="button">
            <button id="btn_submit">
                Send message
            </button>
        </div>
      </form>
    </div>
    <Footer/>
    </div>
  );
}

export default Contact;
