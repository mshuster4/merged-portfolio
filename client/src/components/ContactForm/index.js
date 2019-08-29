import React, { Component } from "react";
import { MDBInput, MDBBtn, MDBIcon } from "mdbreact";
import axios from 'axios';
import * as EmailValidator from 'email-validator';

class ContactForm extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
        name: "",
        email: "",
        message: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }


  handleSubmit = e => {
    e.preventDefault();
      const name = this.state.name;
      const email = this.state.email;
      const message = this.state.message;
      const isValid = EmailValidator.validate(this.state.email);

      if (isValid === true) {
        console.log(name, email, message);
        console.log(isValid)
          axios({
              method: "POST", 
              url:"http://localhost:3001/send", 
              data: {
                  name: name,   
                  email: email,  
                  message: message
              }
          }).then((response)=>{
              if (response.data.msg === 'success'){
                  alert("Message Sent."); 
                  this.resetForm()
              }else if(response.data.msg === 'fail'){
                  alert("Message failed to send.")
              }
        })
      }

     else { 
          alert("Please enter a valid e-mail address.")

      }

};

 resetForm() {
   this.setState({
        name: "",
        email: "",
        message: ""
   })
 };


  render() {
        return(
          <form className="form-group" id="contact-form" onSubmit={this.handleSubmit} method="POST">
            <MDBInput
              label="Name"
              icon="user"
              iconClassName="input-icon"
              group
              type="text"
              validate
              error="wrong"
              success="right"
              name="name"
              autocomplete="off"
              value={this.state.name}
              onChange={this.handleChange}
              required
            />
            <MDBInput
              label="Email"
              icon="envelope"
              iconClassName="input-icon"
              group
              type="text"
              validate
              error="wrong"
              success="right"
              autocomplete="off"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
              required
            />
            <MDBInput
              type="textarea"
              rows="3"
              label="Message"
              icon="pencil-alt"
              iconClassName="input-icon"
              name="message"
              autocomplete="off"
              value={this.state.message}
              onChange={this.handleChange}
              required
              />
      
            <div className="d-flex justify-content-center">
              <MDBBtn type="submit" outline={true} value="submit" className="send-button">Send <MDBIcon icon="paper-plane" /></MDBBtn>
            </div>
          </form>
        );
    }
}


export default ContactForm;