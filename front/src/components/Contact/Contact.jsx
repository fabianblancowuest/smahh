import { useState } from "react";
import styles from "./Contact.module.css";
import validateContact from "./validateContact"; // Import your validation function
import {useNavigate} from "react-router-dom"

const Contact = () => {
  const [contactData, setContactData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  
  const navigate = useNavigate()
  const [errors, setErrors] = useState({});
  
  const handleChange = (event) => {
    const { name, value } = event.target;
    setContactData({
      ...contactData,
      [name]: value,
    });

    // Validation on value change
    setErrors(validateContact({
      ...contactData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const existError = Object.keys(errors);

    if (existError.length === 0) {

      alert("Message send succesfully")

      setContactData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      navigate("/")
    } else {
      alert("Please correct the errors in the form");
    }
  };

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Contact Us</h3>
      <form className={styles.form} onSubmit={handleSubmit}>
        {/* Name */}
        <label className={styles.label} htmlFor="name">
          Name:
        </label>
        <input
          className={styles.input}
          type="text"
          name="name"
          id="name"
          placeholder="Your Name"
          value={contactData.name}
          onChange={handleChange}
          required
        />
        {errors.name && <p className={styles.errors}>{errors.name}</p>}

        {/* Email */}
        <label className={styles.label} htmlFor="email">
          Email:
        </label>
        <input
          className={styles.input}
          type="email"
          name="email"
          id="email"
          placeholder="Your Email"
          value={contactData.email}
          onChange={handleChange}
          required
        />
        {errors.email && <p className={styles.errors}>{errors.email}</p>}

        {/* Subject */}
        <label className={styles.label} htmlFor="subject">
          Subject:
        </label>
        <input
          className={styles.input}
          type="text"
          name="subject"
          id="subject"
          placeholder="Subject"
          value={contactData.subject}
          onChange={handleChange}
          required
        />
        {errors.subject && <p className={styles.errors}>{errors.subject}</p>}

        {/* Message */}
        <label className={styles.label} htmlFor="message">
          Message:
        </label>
        <textarea
          className={styles.textarea}
          name="message"
          id="message"
          placeholder="Your Message"
          value={contactData.message}
          onChange={handleChange}
          required
        ></textarea>
        {errors.message && <p className={styles.errors}>{errors.message}</p>}

        {/* Submit Button */}
        <button className={styles.button} type="submit">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
