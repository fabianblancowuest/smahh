import React from "react";
import styles from "./Ticket.module.css";
import { useDispatch, useSelector } from "react-redux";
import { updateTicket } from "../../redux/actions/actions";
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
	const userType = useSelector((state) => state.userType);

	const dispatch = useDispatch();

	const newStatus1 = "In Progress";
	const newStatus2 = "Completed";
	const newStatus3 = "Closed";

	const handleUpdate = () => {
		dispatch(updateTicket(id, newStatus1));
	};

	return (
		<div className={styles.card}>
			<Link to = "/detail">detail</Link>
			<h3 className={styles.type}>Type: {issueType}</h3>
			<h3 className={styles.title}>Title: {issueTitle}</h3>
			<h3 className={styles.description}>Description: {issueDescription}</h3>
			<h3 className={styles.priority}>Priority: {priority}</h3>
			<h3 className={styles.status}>Status: {status}</h3>
			<h3 className={styles.date}> Date: {createdAt} </h3>

			{userType === "staff" ? <button onClick={handleUpdate}>UPDATE</button> : null}
		</div>
	);
};

export default Ticket;
