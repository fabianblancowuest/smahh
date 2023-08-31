import React, { useState } from "react";
import styles from "./Contact.module.css";

const Contact = () => {
	const [contactData, setContactData] = useState({
		name: "",
		email: "",
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
		console.log(contactData);
		setContactData({
			name: "",
			email: "",
			message: "",
		});
	};

	return (
		<div className={styles.container}>
			<h2 className={styles.title}>Contact Us</h2>
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

				<label className={styles.label}>Message:</label>
				<textarea
					className={styles.textarea}
					name="message"
					placeholder="Your Message"
					value={contactData.message}
					onChange={handleChange}
				></textarea>

				<button className={styles.button} type="submit">
					Send Message
				</button>
			</form>
		</div>
	);
};

export default Contact;
