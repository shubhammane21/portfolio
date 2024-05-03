import React  from "react";
import "./contact.css";
import { socialMediaLinks } from "../../data";
import {Formik,Form,Field,ErrorMessage } from "formik";
import * as yup from "yup";


function Contact() {
  const onClickEmailHandler = () => {
    window.open("mailto:shubhammane218@gmail.com");
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
        <Formik
         initialValues={{
          name:null,
          email:"",
          message:""
         }}
         validationSchema={
          yup.object({
            name:yup.string().required("Name required").min(4,"Name is too short"),
            email:yup.string().required("Email required"),
            message:yup.string().required("Write something")
          })
         }
         onSubmit={(values)=>{
          document.querySelector('.contact-form').style.display="none";
          document.querySelector('#on-submit').innerHTML=`Thankyou ${values.name} for connecting with me!`;
         }

        }
        ><Form>
        <div className="contact-form">
         
          <h1 className="contact-form-title">Contact Me</h1>
         <dl>
          <dt><Field 
            type="text"
            name="name"
            id=""
            className="input"
            placeholder="Your Name"
          /> 
          <dd className="errormsg">
          <ErrorMessage name="name"/>
          </dd>
          </dt>
         
          <dt>
          <Field
            type="email"
            name="email"
            id=""
            className="input"
            placeholder="Your Email Address"
          />
           <dd className="errormsg">
             <ErrorMessage name="email"/>
             </dd>
          </dt>
          
          
          <dt>
          <Field
            type="message"
            name="message"
            id=""
            className="input input-message"
            placeholder="Your Message"
          />
          <dd className="errormsg">
             <ErrorMessage name="message"/>
             </dd>
          </dt>
          </dl>
          <button className="btn">Submit</button>
        </div>
        <div id="on-submit" className="social-media-section-heading">
        </div>
        
        </Form>
        </Formik>
        
      </section>
    </>
    
  );
}

export default Contact;
