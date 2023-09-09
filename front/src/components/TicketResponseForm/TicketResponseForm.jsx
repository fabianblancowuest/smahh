import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import styles from "./TicketResponseForm.module.css"; 

const TicketResponseForm = ({userEmail}) => {
  const [response, setResponse] = useState({
    subject: "",
    messageBody: "",
    adressy: userEmail,
    adresser: "",
  });

  const form = useRef();

  const handleChange = (event) => {
    const { name, value } = event.target;

    setResponse({
      ...response,
      [name]: value,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_hre43nq",
        "template_it5kkwt",
        form.current,
        "Qj-2BHcvaJJZlfg9O",
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        },
      );
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    sendEmail(event);

    setResponse({
      subject: "",
      messageBody: "",
    });
  };

  return (
    <div className={styles.formBackground}>
      <h3 className={styles.title}>Response to User</h3>
      <form className={styles.formContainer} onSubmit={handleSubmit}>
        <label htmlFor="subject" className={styles.formLabels}>
          Subject:
        </label>
        <textarea
          id="subject"
          name="subject"
          value={response.subject}
          onChange={handleChange}
          required
          className={styles.formInputs}
        ></textarea>

        <div>
          <label htmlFor="messageBody" className={styles.formLabels}>
            Response:
          </label>
          <textarea
            id="messageBody"
            name="messageBody"
            value={response.messageBody}
            onChange={handleChange}
            required
            className={styles.textarea}
          ></textarea>
        </div>

        <div>
          <button type="submit" className={styles.formButton}>
            Send Response
          </button>
        </div>
      </form>
    </div>
  );
};

export default TicketResponseForm;
