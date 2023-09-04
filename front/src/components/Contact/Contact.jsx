import { useState } from "react";
import styles from "./Contact.module.css";

const Contact = () => {
	const [contactData, setContactData] = useState({
		name: "",
		email: "",
		subject: "",
		message: "",
	});

	const handleChange = (event) => {
		const { name, value } = event.target;
		setContactData({
			...contactData,
			[name]: value,
		});
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		// Aquí puedes agregar la lógica para enviar el formulario o realizar otras acciones necesarias
		setContactData({
			name: "",
			email: "",
			subject: "",
			message: "",
		});
	};

	const handleSend = (event)=>{
		event.preventDefault()
		alert("Message Send Correctly ---> In progress")
	}

	return (
		<div className={styles.container}>

			<h3 className={styles.title}>Contact Us</h3>

			<form className={styles.form} onSubmit={handleSubmit}>
				
				<label className={styles.label}>Name:</label>
				<input
					className={styles.input}
					type="text"
					name="name"
					placeholder="Your Name"
					value={contactData.name}
					onChange={handleChange}
				/>

				<label className={styles.label}>Email:</label>
				<input
					className={styles.input}
					type="email"
					name="email"
					placeholder="Your Email"
					value={contactData.email}
					onChange={handleChange}
				/>

				<label className={styles.label}>Subject:</label>
				<input
				className={styles.input} 
				type="text"
				name= "subject"
				placeholder= "Subject"
				value={contactData.subject} />

				<label className={styles.label}>Message:</label>
				<textarea
					className={styles.textarea}
					name="message"
					placeholder="Your Message"
					value={contactData.message}
					onChange={handleChange}
				></textarea>

				<button onClick={handleSend} className={styles.button} type="submit">
					Send Message
				</button>
			</form>
		</div>
	);
};

export default Contact;
