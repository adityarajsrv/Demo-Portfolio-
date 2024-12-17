import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './contact.css';
import facebookIcon from '../../assets/facebook-icon.png';
import youtube from '../../assets/youtube.png';
import instagram from '../../assets/instagram.png';
import twitter from '../../assets/twitter.png';

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault(); 
    setLoading(true); 

    emailjs
      .sendForm(
        'service_xpy5tus', 
        'template_kcvochf', 
        form.current,
        '08-GpAdVmCvpCVHjq' 
      )
      .then(
        (result) => {
          console.log(result.text);
          setLoading(false);
          alert('Message sent successfully!');
        },
        (error) => {
          console.log(error.text);
          setLoading(false);
          alert('An error occurred. Please try again.');
        }
      );

    e.target.reset();
  };

  return (
    <section id="contact">
      <div className="contact-form">
        <h1 className="contactPageTitle">Contact Me</h1>
        <span className="contactDesc">
          Please fill out the form below to discuss any work opportunities.
        </span>
        <form ref={form} onSubmit={sendEmail} className="contactForm">
          <input type="text" name="from_name" className="name" placeholder="Your name" required />
          <input type="email" name="from_email" className="email" placeholder="Your email" required />
          <textarea name="message" className="msg" rows="5" placeholder="Your message" required />
          <button type="submit" className="submitBtn" disabled={loading}>
            {loading ? 'Sending...' : 'Submit'}
          </button>
          {loading && <div className="loader"></div>}
          <div className="links">
            <img src={facebookIcon} alt="Facebook" />
            <img src={twitter} alt="Twitter" />
            <img src={youtube} alt="YouTube" />
            <img src={instagram} alt="Instagram" />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
