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
		userName,
	} = ticket;

	const statusClass =
		status === "Not Started"
			? styles.notStarted
			: status === "In Progress"
				? styles.inProgress
				: styles.completed;

	return (
		<div className={`${styles.card}  ${statusClass}`}>

			<div className={styles.cardContent}>
				
			<div className={styles.column}>
					<h3 className={styles.status}>Status:</h3>
					<span>{status}</span>
				</div>

				<div className={styles.column}>
					<h3 className={styles.priority}>Priority: </h3>
					<span>{priority}</span>
					
				</div>

				<div className={styles.column}>
					<Link to={`/detail/${id}`}>
						<button className={styles.detailButton}>Detail</button>
					</Link>
					<h3 className={styles.type}>Type: </h3>
					<span>{issueType}</span>
					<br />
					<h4 className={styles.type}>Date:</h4>
					<span>{createdAt}</span>
			
				</div>
			</div>
		</div>
	);
};

export default Ticket;