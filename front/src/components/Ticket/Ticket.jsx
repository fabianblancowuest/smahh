import React, { useState } from "react";
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
	const updateMessage = useSelector ((state)=> state.updateMessage)

	const dispatch = useDispatch();

	const newStatusOptions = ["In Progress", "Completed", "Closed"];
	const [selectedStatus, setSelectedStatus] = useState(status);

	const handleStatusChange = (event) => {
		const newStatus = event.target.value;
		setSelectedStatus(newStatus);
	};

	const handleUpdate = () => {
		dispatch(updateTicket(id, selectedStatus));
		alert(updateMessage)
	};

	return (
		<div className={styles.card}>
			<Link to={`/detail/${id}`}>detail</Link>
			<h3 className={styles.title}>Title: {issueTitle}</h3>
			<h3 className={styles.type}>Type: {issueType}</h3>
			<h3 className={styles.priority}>Priority: {priority}</h3>
			<h3 className={styles.status}>Status: {status}</h3>
			{/* <h3 className={styles.description}>Description: {issueDescription}</h3> */}
			{/* <h3 className={styles.date}> Date: {createdAt} </h3> */}
			
			{userType === "staff" ? (
				<div>
					<select value={selectedStatus} onChange={handleStatusChange}>
						{newStatusOptions.map((option) => (
							<option key={option} value={option}>
								{option}
							</option>
						))}
					</select>
					<button onClick={handleUpdate}>UPDATE</button>
				</div>
			) : null}
		</div>
	);
};

export default Ticket;