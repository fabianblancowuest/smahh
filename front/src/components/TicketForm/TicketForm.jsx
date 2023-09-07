import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { riseTicket } from "../../redux/actions/actions";
import { useNavigate } from "react-router-dom";
import styles from "./TicketForm.module.css";
import PopUp from "../PopUp/PopUp";

const TicketForm = () => {
	const userId = useSelector((state) => state.userId);
	const userName = useSelector((state) => state.userName);

	const [successMessage, setSuccessMessage] = useState("");
	const [errorMessage, setErrorMessage] = useState("")

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const initialState ={
		issueTitle: "",
		issueDescription: "",
		issueType: "",
		priority: "",
	}
	const [newTicket, setNewTicket] = useState(initialState);


	const handleChange = (event) => {
		const { name, value } = event.target;

		if (errorMessage || successMessage) {
			setErrorMessage("");
			setSuccessMessage("");
		}

		setNewTicket({
			...newTicket,
			[name]: value,
		});
	};

	const message = (
		<>
			You've raised a ticket ✔️<br />
			A confirmation email will be sent to you.
		</>
	);

	const handleSubmit = async (event) => {
		event.preventDefault();

		try {
			await dispatch(riseTicket(newTicket, userId, userName));
			setSuccessMessage(message)

		} catch (error) {
			setNewTicket(initialState)
			setErrorMessage(error.response.data.error)
		}
	
		setNewTicket({
			issueTitle: "",
			issueDescription: "",
			issueType: "",
			priority: "",
		});
		// navigate("/tickets");
	};

	return (
		<div className={styles.formBackground}>
			<h3 className={styles.title}>Rise your Ticket</h3>

			{/* <PopUp message={successMessage}/> */}

			<form className={styles.formContainer} onSubmit={handleSubmit}>
				<label className={styles.formLabels}>Select a Service:</label>
				<select
					className={styles.select}
					type="text"
					name="issueType"
					placeholder="Service needed..."
					value={newTicket.issueType}
					onChange={handleChange}
					required
				>
					<option value="">Please select a Service</option>
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
					<option value="Vulnerability Testing">Vulnerability Testing</option>
					<option value="Others">Others</option>
				</select>

				<label className={styles.formLabels}>Select a Priority</label>
				<select
					className={styles.select}
					name="priority"
					value={newTicket.priority}
					onChange={handleChange}
					required
				>
					<option value="">Please select a Priority</option>
					<option value="High">High</option>
					<option value="Medium">Medium</option>
					<option value="Low">Low</option>
				</select>

				<label className={styles.formLabels}> Subject: </label>
				<textarea
					className={styles.textareaSubject}
					type="text"
					name="issueTitle"
					placeholder="Briefly describe your problem..."
					value={newTicket.issueTitle}
					onChange={handleChange}
					required
				/>

				<label className={styles.formLabels}>Send us a message:</label>
				<textarea
					className={styles.textarea}
					id="description"
					name="issueDescription"
					placeholder="Describe your problem in detail..."
					value={newTicket.issueDescription}
					onChange={handleChange}
					required
				/>

				<button className={styles.formButton} type="submit">
					Raise Ticket
				</button>

				{successMessage && (
					<p className={styles.successMessage}>{successMessage}</p>
				)}

				{errorMessage && (
					<p className={styles.error}>{errorMessage}</p>
				)}

			</form>
		</div>
	);
};

export default TicketForm;
