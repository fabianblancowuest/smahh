import React from "react";
import styles from "./Ticket.module.css";
import { Link } from "react-router-dom";

const Ticket = ({ ticket }) => {
	const {
		issueDescription,
		issueType,
		priority,
		issueTitle,
		status,
		createdAt,
		id,
	} = ticket;

	return (
		<div className={styles.card}>
			<Link to={`/detail/${id}`}>detail</Link>
			{/* <h3 className={styles.title}>Title: {issueTitle}</h3> */}
			<h3 className={styles.type}>Type: {issueType}</h3>
			<h3 className={styles.priority}>Priority: {priority}</h3>
			<h3 className={styles.status}>Status: {status}</h3>
			{/* <h3 className={styles.description}>Description: {issueDescription}</h3> */}
			{/* <h3 className={styles.date}> Date: {createdAt} </h3> */}
			
		</div>
	);
};

export default Ticket;