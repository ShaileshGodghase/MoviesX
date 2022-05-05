import React, { Component } from 'react'
import '../Css/Contact.css'
import '../Css/App.css'

class Contact extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         Fname: "",
         Lname: "",
         email: "",
         message: ""
      }
      this.fnameHandler = this.fnameHandler.bind(this);
      this.lnameHandler = this.lnameHandler.bind(this);
      this.emailHandler = this.emailHandler.bind(this);
      this.messageHandler = this.messageHandler.bind(this);
    }
    fnameHandler(e){
        this.setState({Fname: e.target.value});
    }
    lnameHandler(e){
        this.setState({Lname: e.target.value});
    }
    emailHandler(e){
        this.setState({email : e.target.value});
    }
    messageHandler(e){
        this.setState({message : e.target.value});
    }
    render() {
        const {Fname, Lname, email, message} = this.state;
        return (
            <>
                <div className="behind-nav"></div>
                <section className="contact">
                    <div className="content">
                        <div className="container border">
                            <form id="contact-form"  action="https://getform.io/f/b0f1e2aa-8cee-4bd0-a084-11b46a57c8cf" method="POST" target="_blank">
                                <label htmlFor="fname">First Name</label>
                                <input className="c-form-input" value={Fname} onChange={this.fnameHandler} type="text" id="fname" name="firstname" placeholder="Ex. John" required/>
                                <label htmlFor="lname">Last Name</label>
                                <input className="c-form-input" value={Lname} onChange={this.lnameHandler} type="text" id="lname" name="lastname" placeholder="Ex. Doe" required/>
                                <label htmlFor="email">Email </label>
                                <input className="c-form-input" value={email} onChange={this.emailHandler} type="email" id="email" name="email" style={{backgroundColor:"#1d1d1d"}} placeholder="example@gmail.com" required/>
                                <label htmlFor="subject">Message</label>
                                <textarea id="subject" name="subject" value={message} onChange={this.messageHandler} placeholder="Write something.." style={{height:"200px"}} required></textarea>
                                <button type="submit">Send Message</button>
                            </form>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}

export default Contact
