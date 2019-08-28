import React, { Component } from "react";
import { MDBInput, MDBBtn } from "mdbreact";
import { Row, Col } from "react-bootstrap"
import axios from 'axios';
import Button from "../../components/Button"


class ContactForm extends Component {

  constructor(props) {
    super(props);
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
      console.log(name, email, message)
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
          <form id="contact-form" onSubmit={this.handleSubmit} method="POST">
            <MDBInput
              label="Name"
              icon="user"
              group
              type="text"
              validate
              error="wrong"
              success="right"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
            />
            <MDBInput
              label="Email"
              icon="envelope"
              group
              type="email"
              validate
              error="wrong"
              success="right"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
            <MDBInput
              type="textarea"
              rows="2"
              label="Message"
              icon="pencil-alt"
              name="message"
              value={this.state.message}
              onChange={this.handleChange}
              />
              <div>
                <MDBBtn type="submit" outline={true} value="submit" className="send-button">Send</MDBBtn>
              </div>
          </form>
        );
    }
}


export default ContactForm;