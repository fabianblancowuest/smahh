import React from "react";
import styles from "./Ticket.module.css";

const Ticket = ({ ticket }) => {
	const { issueDescription, issueType, priority, issueTitle, status } = ticket;

	return (
		<div className={styles.card}>
			<h3 className={styles.title}>Title: {issueTitle}</h3>
			<p>Description: {issueDescription}</p>
			<p>Type: {issueType}</p>
			<p>Priority: {priority}</p>
			<p>Status: {status}</p>
		</div>
	);
};

export default Ticket;
