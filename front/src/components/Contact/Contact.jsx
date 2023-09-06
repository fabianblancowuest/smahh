import { useState, useRef } from "react";
import styles from "./Contact.module.css";
import validateContact from "./validateContact"; // Import your validation function
import { useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";

const Contact = () => {
	const initialState = {
		name: "",
		email: "",
		subject: "",
		message: "",
		phoneNumber: "",
	};
	const [contactData, setContactData] = useState(initialState);

	const navigate = useNavigate();
	const form = useRef();
	const [errors, setErrors] = useState({});

	const handleChange = (event) => {
		const { name, value } = event.target;
		setContactData({
			...contactData,
			[name]: value,
		});

		// Validation on value change
		setErrors(
			validateContact({
				...contactData,
				[name]: value,
			}),
		);
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

		const existError = Object.keys(errors);

		if (existError.length === 0) {
			alert("Message send succesfully");

			setContactData(initialState);

			navigate("/");
		} else {
			alert("Please correct the errors in the form");
		}

		sendEmail(event);
	};

	return (
		<div className={styles.container}>
			<h3 className={styles.title}>Contact Us</h3>
			<form ref={form} className={styles.form} onSubmit={handleSubmit}>
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

				{/* Phone Number */}
				<label className={styles.label} htmlFor="phoneNumber">
					Phone Number:
				</label>
				<input
					className={styles.input}
					type="tel"
					name="phoneNumber"
					id="phoneNumber"
					placeholder="Your Phone Number"
					value={contactData.phoneNumber}
					onChange={handleChange}
				/>
				{errors.phoneNumber && (
					<p className={styles.errors}>{errors.phoneNumber}</p>
				)}

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
