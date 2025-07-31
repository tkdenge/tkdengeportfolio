import React from 'react'
import './Contact.css'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'
import toast from 'react-hot-toast'


const Contact = () => {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");

    const formData = new FormData(event.target);

    formData.append("access_key", "7c3ca76b-8faf-4781-9fa6-14e6d68700f3");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult(data.message);
      toast.success(result)
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
      toast.error(result);
    }
  };

  return (
    <>
      <div id='contact' className="contact">
        <div className="contact-title">
          <h1>Get in touch</h1>
        </div>

        <div className="contact-section">
          <div className="contact-left">
            <h1>Let's talk</h1>
            <p>I'm ready to take on projects. You can contact me anytime.</p>
            <div className="contact-details">
              <div className="contact-detail">
                <img src={mail_icon} alt="" /><p>tkdenge3@gmail.com</p>
              </div>
              <div className="contact-detail">
                <img src={call_icon} alt="" /><p>+27 69 451 9516</p>
              </div>
              <div className="contact-detail">
                <img src={location_icon} alt="" /><p>Gauteng, South Africa</p>
              </div>
            </div>
          </div>

          <form onSubmit={onSubmit} className="contact-right">
            <label htmlFor="">Your name <span>*</span></label>
            <input type="text" placeholder='Enter your name' name='name' required/>
            <label htmlFor="">Your email <span>*</span></label>
            <input type="email" placeholder='Enter your email' name='email' required/>
            <label htmlFor="">Write your message here <span>*</span></label>
            <textarea name="message" rows='8' maxlength="500" placeholder='Enter your message'required></textarea>
            <button className="contact-submit">Submit now</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Contact