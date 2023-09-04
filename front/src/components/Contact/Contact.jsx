import { useState } from "react";
import styles from "./Contact.module.css";
import validateContact from "./validateContact"; // Importa tu función de validación

const Contact = () => {
	const [contactData, setContactData] = useState({
		name: "",
		email: "",
		subject: "",
		message: "",
	});

	const [errors, setErrors] = useState({}); // Estado para almacenar errores

	const handleChange = (event) => {
		const { name, value } = event.target;
		setContactData({
			...contactData,
			[name]: value,
		});

		// Validación al cambiar el valor
		setErrors(validateContact({
			...contactData,
			[name]: value,
		}));
	};


	const handleSubmit = (event) => {
		event.preventDefault();

		const existError = Object.keys(errors);

		if (existError.length === 0) {
			// Realiza acciones cuando no hay errores, como enviar el formulario
			// Por ahora, solo se reinicia el estado
			setContactData({
				name: "",
				email: "",
				subject: "",
				message: "",
			});
		} else {
			alert("You must correct the fields");
		}
	};

	const handleSimulate = () => {
		alert("The message was send correctly")
	}

	return (
		<div className={styles.container}>
			<h3 className={styles.title}>Contact Us</h3>
			<form className={styles.form} onSubmit={handleSubmit}>
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
				/>
				{errors.name && <p className={styles.errors}>{errors.name}</p>}

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
				/>
				{errors.email && <p className={styles.errors}>{errors.email}</p>}

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
				/>
				{errors.subject && <p className={styles.errors}>{errors.subject}</p>}

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
				></textarea>
				{errors.message && <p className={styles.errors}>{errors.message}</p>}

				<button onClick={handleSimulate} className={styles.button} type="submit">
					Send Message
				</button>
			</form>
		</div>
	);
};

export default Contact;


