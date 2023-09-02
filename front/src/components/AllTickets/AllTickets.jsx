import React, { useEffect } from "react";
import { useDispatch, useSelector, } from "react-redux";
import Ticket from "../Ticket/Ticket";
import styles from "./AllTickets.module.css";
import { getUserTickets } from "../../redux/actions/actions";
import Filters from "../Filters/Filters";

const AllTickets = () => {
	const userName = useSelector(state => state.userName)
	const userId = useSelector(state => state.userId)
	const userTickets = useSelector(state => state.userTickets);
	const ticketsAmount = userTickets.length
	const dispatch = useDispatch();

	useEffect(() => {
		if (userTickets.length === 0) {
			dispatch(getUserTickets(userId));
		}
	}, [userTickets, dispatch]);

	const handleRefresh = () => {
		dispatch(getUserTickets(userId))
	}


	return (
		<div>
			<div className={styles.title}>
				<h3>Hi {userName},</h3>
				<span>Your tickets: {ticketsAmount}</span>
			</div>

			<Filters />

			<button onClick={handleRefresh} className={styles.button}>Refresh status</button>

			<section className={styles.container}>
				{userTickets?.map((ticket) => (
					<Ticket key={ticket.id} ticket={ticket} />
				))}
			</section>
		</div>
	);
};

export default AllTickets;
