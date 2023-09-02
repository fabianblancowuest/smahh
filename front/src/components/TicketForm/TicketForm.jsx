import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { riseTicket } from "../../redux/actions/actions";
import styles from "./TicketForm.module.css";

const TicketForm = () => {
	const userId = useSelector((state) => state.userId);
	const userName = useSelector(state=> state.userName)
	const dispatch = useDispatch();

	const [newTicket, setNewTicket] = useState({
		issueTitle: "",
		issueDescription: "",
		issueType: "",
		priority: "",
	});

	const handleChange = (event) => {
		const { name, value } = event.target;

		setNewTicket({
			...newTicket,
			[name]: value,
		});
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		dispatch(riseTicket(newTicket, userId, userName));
		setNewTicket({
			issueTitle: "",
			issueDescription: "",
			issueType: "",
			priority: "",
		})
	};

	return (
		<div className={styles.formBackground}>

			<h3 className={styles.title}>Rise your Ticket</h3>

			<form className={styles.formContainer} onSubmit={handleSubmit}>

				<label className={styles.formLabels}>Select a Type:</label>
				<select
					className={styles.select}
					type="text"
					name="issueType"
					placeholder="Issue type..."
					value={newTicket.issueType}
					onChange={handleChange}
				>
					<option value="virus-malwares">
						Detection of malware or viruses on systems
					</option>
					<option value="unauthorized-access">
						Unauthorized access or compromised accounts
					</option>
					<option value="sensitive-data">Leakage of sensitive data</option>
					<option value="phishing">
						Phishing and social engineering attacks
					</option>
					<option value="slow-performance">
						Slow network or system performance
					</option>
					<option value="non-compliance">
						Non-compliance with security regulations
					</option>
					<option value="authentication">
						Issues with multi-factor authentication (MFA)
					</option>
					<option value="ddos">
						Distributed Denial of Service (DDoS) attacks
					</option>
					<option value="vulnerabilities-web">
						Vulnerabilities in web applications
					</option>
					<option value="security-patching">
						Security patching and updates problems
					</option>
					<option value="mobile-device">
						Mobile device security vulnerabilities
					</option>
					<option value="lack-of-security">
						Lack of security awareness and training
					</option>
					<option value="network-insfrastructure">
						Network infrastructure vulnerabilities
					</option>
					<option value="cloud-incidents">Cloud security incidents</option>
					<option value="encryption-data">
						Encryption and data protection issues
					</option>
				</select>

				<label className={styles.formLabels}>Select a Priority:</label>
				<select
					className={styles.select}
					name="priority"
					value={newTicket.priority}
					onChange={handleChange}
				>
					<option value="High">High</option>
					<option value="Medium">Medium</option>
					<option value="Low">Low</option>
				</select>


				<label className={styles.formLabels}> Issue title: </label>
				<input
					className={styles.textarea}
					type="text"
					name="issueTitle"
					placeholder="Issue Title..."
					value={newTicket.issueTitle}
					onChange={handleChange}
				/>

				<label className={styles.formLabels}>Send us a message:</label>
				<textarea
					className={styles.textarea}
					id="description"
					name="issueDescription"
					placeholder="Describe your problem here..."
					value={newTicket.issueDescription}
					onChange={handleChange}
				/>


				<button className={styles.formButton} type="submit">
					Submit Ticket
				</button>
			</form>
		</div>
	);
};

export default TicketForm;
