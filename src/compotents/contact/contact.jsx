import React ,{useState} from "react";
import "./contact.css";
import { socialMediaLinks } from "../../data";


function Contact() {

  const [intialValue,changedValue]=useState('');
  const onClickEmailHandler = () => {
    window.open("mailto:shubhammane218@gmail.com");
}

const onHandleChange=(event)=>{
  const newval = event.target.value;
  changedValue(newval);
}
const submitHandler =() =>{
  
  document.querySelector('.contact-form').style.display="none";
  document.querySelector('#on-submit').innerHTML=`Thankyou ${intialValue} for connecting with me!`;
}
  return (
    <>
      <section className="contact-page" id="scroll-to-contact" >
        <div className="social-media-section">
          <div className="upper">
            <h2 className="social-media-section-heading">Reach me at</h2>
            <h3 onClick={onClickEmailHandler}>shubhammane218@gmail.com</h3>
          </div>
          <div className="lower">
            <h2 className="social-media-section-heading">Find me on</h2>
            <div className="icons">
              {socialMediaLinks.map((media) => {
                return (
                  <a
                    key={media.id}
                    href={media.url}
                    target="_blank"
                    rel="noreferrer"
                    className={media.cName}
                  >
                    {media.logo}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
        <div className="contact-form">
          <h1 className="contact-form-title">Contact Me</h1>
          <input
            type="text"
            name="name"
            id=""
            onChange={onHandleChange}
            className="input"
            placeholder="Your Name"
          />
          <input
            type="email"
            name="email"
            id=""
            className="input"
            placeholder="Your Email Address"
          />
          <input
            type="message"
            name="message"
            id=""
            className="input input-message"
            placeholder="Your Message"
          />
          <button className="btn" onClick={submitHandler}>Submit</button>
        </div>
        <div id="on-submit" className="social-media-section-heading">
        </div>
      </section>
    </>
  );
}

export default Contact;
