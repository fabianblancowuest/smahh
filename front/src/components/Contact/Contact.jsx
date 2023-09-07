import { useState, useRef } from "react";
import styles from "./Contact.module.css";
import validateContact from "./validateContact"; // Import your validation function
import { useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";

const Contact = () => {
	const initialState = {
		name: "",
		email: "",
		service: "",
		message: "",
		phoneNumber: "",
	};
	const [contactData, setContactData] = useState(initialState);

	const form = useRef();
	const [errors, setErrors] = useState({});
	const [successMessage, setSuccesMessage] = useState("")

	const message = (
		<>
			We recibed your message ✔️<br />
			We wil be answering as soon as posible to your consulting.
		</>
	);

	const navigate = useNavigate();

	const handleChange = (event) => {
		const { name, value } = event.target;

		if (successMessage) {
			setSuccesMessage("")
		}

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
			setContactData(initialState);
			setSuccesMessage(message)

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
					placeholder="Name"
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
					placeholder="Email"
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
					type="text"
					name="phoneNumber"
					id="phoneNumber"
					placeholder="Phone number"
					value={contactData.phoneNumber}
					onChange={handleChange}
				/>
				{errors.phoneNumber && (
					<p className={styles.errors}>{errors.phoneNumber}</p>
				)}

				{/* Subject */}
				<label className={styles.label} htmlFor="service">
					Choose a Service:
				</label>
				<select
					className={styles.select}
					type="text"
					name="service"
					placeholder="Service needed..."
					value={contactData.service}
					onChange={handleChange}
					required
				>
					<option value="">Subject</option>
					<option value="Cyber Security Consulting">
						Cyber Security Consulting
					</option>
					<option value="Compliance Security Program">
						Compliance Security Program
					</option>
					<option value="Cyber Awareness Education">
						Cyber Awareness Education
					</option>
					<option value="Cloud Access Security Broker (CASB)">
						Cloud Access Security Broker (CASB)
					</option>
					<option value="Digital Forensics & Dark Web">
						Digital Forensics & Dark Web
					</option>
					<option value="Data Loss Prevention (DLP)">
						Data Loss Prevention (DLP)
					</option>
					<option value="Incident Response & Ransom Payment">
						Incident Response & Ransom Payment
					</option>
					<option value="Managed Security Services">
						Managed Security Services
					</option>
					<option value="Managed Detection & Response (MDR)">
						Managed Detection & Response (MDR)
					</option>
					<option value="Penetration Testing">Penetration Testing</option>
					<option value="Security Assessment & Audit">
						Security Assessment & Audit
					</option>
					<option value="Security Operation Center (SOC)">
						Security Operation Center (SOC)
					</option>
					<option value="Vulnerability Testing">
						Vulnerability Testing
					</option>

					<option value="Others">
						Others
					</option>
				</select>

				{/* Message */}
				<label className={styles.label} htmlFor="message">
					Message:
				</label>
				<textarea
					className={styles.textarea}
					name="message"
					id="message"
					placeholder="Please enter your message here. We're happy to assist you and will respond as soon as possible."
					value={contactData.message}
					onChange={handleChange}
					required
				></textarea>
				{errors.message && <p className={styles.errors}>{errors.message}</p>}

				{/* Submit Button */}


				{successMessage !== "" && <button className={styles.button} type="submit">
					Send Message
				</button>}

				{successMessage && <p>{successMessage}</p>}

				{successMessage && <button className={styles.button}>Do another consulting</button>}
				

				{successMessage && <button className={styles.button} >Explore other services</button>}
				

			</form>
		</div>
	);
};

export default Contact;
