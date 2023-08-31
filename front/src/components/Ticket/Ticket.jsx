import React from "react";
import styles from "./Ticket.module.css";

const Ticket = ({ ticket }) => {
	const { issueDescription, issueType, priority, issueTitle, status, createdAt } = ticket;

	return (
		<div className={styles.card}>
			<h2 className={styles.title}>Title: {issueTitle}</h2>
			<h3 className={styles.description}>Description: {issueDescription}</h3>
			<h3 className={styles.type}>Type: {issueType}</h3>
			<h3 className={styles.priority}>Priority: {priority}</h3>
			<h3 className={styles.status}>Status: {status}</h3>
			<h3> Date: {createdAt}</h3>
		</div>
	);
};

export default Ticket;
