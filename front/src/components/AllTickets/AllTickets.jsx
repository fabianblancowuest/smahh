import React from "react";
import { useSelector } from "react-redux";
import Ticket from "../Ticket/Ticket";
import styles from "./AllTickets.module.css";

const AllTickets = () => {
	const userTickets = useSelector((state) => state.userTickets);

	return (
		<div>
			<h1 className={styles.title}>All Tickets</h1>
			<section className={styles.container}>
				{userTickets?.map((ticket) => (
					<Ticket key={ticket.id} ticket={ticket} />
				))}
			</section>
		</div>
	);
};

export default AllTickets;
