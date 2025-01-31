import { useState } from "react";
import emailjs from "emailjs-com";
import React from "react";
import { LoadingSpinner } from "./LoadingSpinner";
import { toast, ToastContainer } from 'react-toastify';

const initialState = {
  name: "",
  email: "",
  message: "",
};

export const Contact = (props) => {
  const [{ name, email, message }, setState] = useState(initialState);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };



  const notify = (message) => {
    toast.error(message, {
      theme: "colored"
    });
  };
  const clearState = () => setState({ ...initialState });
  const [loading, setLoading] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false); // Reset success indicator

    emailjs
      .sendForm(
        "service_byuzia6", // Replace with your Service ID
        "template_539yoce", // Replace with your Template ID
        e.target,
        "TcKo367KDyipRFa1_" // Replace with your Public Key
      )
      .then(
        (result) => {
          setLoading(false);
          setSuccess(true); // Set success indicator
          clearState();
        },
        (error) => {
          setLoading(false);
          notify('Failed to send message:', error.message || 'Unknown error');
        }
      );
  };

  return (
    <div>
    <ToastContainer />
      <div id="contact">
        <div className="container">
          <div className="col-md-8">
            <div className="row">
              <div className="section-title">
                <h2>Get In Touch</h2>
                <p>
                  Please fill out the form below to send us an email, and we will
                  get back to you as soon as possible. Additionally, we'd love to
                  hear your feedback about our service. Your thoughts and suggestions
                  are important to us!
                </p>
              </div>
              <form name="sentMessage" validate onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                        placeholder="Name"
                        required
                        onChange={handleChange}
                        value={name}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                        placeholder="Email"
                        required
                        onChange={handleChange}
                        value={email}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    id="message"
                    className="form-control"
                    rows="4"
                    placeholder="Message"
                    required
                    onChange={handleChange}
                    value={message}
                  ></textarea>
                  <p className="help-block text-danger"></p>
                </div>
                <div id="success"></div>
                <button type="submit" className="btn btn-custom btn-lg">
                  Send Message
                </button>
              </form>
              {loading && <LoadingSpinner />}

              {success && (
                <div className="alert alert-success mt-3">
                  Your message has been sent successfully!
                </div>
              )}
            </div>
          </div>
          <div className="col-md-3 col-md-offset-1 contact-info">
            <div className="contact-item">
              <h3>Contact Info</h3>
              <p>
                <span>
                  <i className="fa fa-map-marker"></i> Address
                </span>
                {props.data ? props.data.address : "loading"}
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-phone"></i> Phone
                </span>{" "}
                {props.data ? props.data.phone : "loading"}
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-envelope-o"></i> Email
                </span>{" "}
                {props.data ? props.data.email : "loading"}
              </p>
            </div>
          </div>
          <div className="col-md-12">
            <div className="row">
              <div className="social">
                <ul>
                  <li>
                    <a href={props.data ? props.data.instagram : "/"}>
                      <i className="fa fa-instagram"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="footer">
        <div className="container text-center">
          <p>
            &copy; 2024 Design by{" "}
            <a href="https://www.linkedin.com/in/marwane-oukacha/" rel="nofollow">
              Marwane OUKACHA
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
