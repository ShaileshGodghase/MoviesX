import React, { Component } from 'react'
import '../Css/Contact.css'
import '../Css/App.css'

class Contact extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             formSubmit: "none"
        }
        this.submitHandler = this.submitHandler.bind(this)
    }
    submitHandler(e){
        e.preventDefault();
        this.clearForm();
        this.setState({
            formSubmit: "inline-block"
        },()=>{
            setTimeout(()=>{
                this.setState({
                    formSubmit: "none"
                })
            }, 3000)
        })
    }
    clearForm = () =>{
        document.getElementById("contact-form").reset();
    }
    render() {
        const{formSubmit} = this.state;
        return (
            <>
                <div className="behind-nav"></div>
                <section className="contact">
                    <div className="content">
                        <div className="container border">
                            <form id="contact-form" onSubmit={this.submitHandler} action="https://formsubmit.co/shaileshgodghase3105@gmail.com" method="POST">
                                <label htmlFor="fname">First Name</label>
                                <input className="c-form-input" type="text" id="fname" name="firstname" placeholder="Ex. John" required/>
                                <label htmlFor="lname">Last Name</label>
                                <input className="c-form-input" type="text" id="lname" name="lastname" placeholder="Ex. Doe" required/>
                                <label htmlFor="email">Email </label>
                                <input className="c-form-input" type="email" id="email" name="email" style={{backgroundColor:"#1d1d1d"}} placeholder="example@gmail.com" required/>
                                <label htmlFor="subject">Message</label>
                                <textarea id="subject" name="subject" placeholder="Write something.." style={{height:"200px"}} required></textarea>
                                <button type="submit">Send Message</button>
                                <h3 style={{display: `${formSubmit}`}}>Thank You..!</h3>
                            </form>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}

export default Contact
