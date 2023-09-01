import React, { useEffect } from "react";
import { useDispatch, useSelector, } from "react-redux";
import Ticket from "../Ticket/Ticket";
import styles from "./AllTickets.module.css";
import { getUserTickets } from "../../redux/actions/actions";

const AllTickets = () => {
	const userName= useSelector(state => state.userName)
	const userId = useSelector(state => state.userId)
	const userTickets = useSelector(state => state.userTickets);
	const ticketsAmount = userTickets.length

	const dispatch = useDispatch();

	useEffect(() => {
		if (userTickets.length === 0) {
			dispatch(getUserTickets(userId));
		}
	}, [userTickets, dispatch]);

	const handleRefresh= ()=>{
		dispatch(getUserTickets(userId))
	}

	return (
		<div>
			<button onClick={handleRefresh}>Refresh status</button>
			
			<h2 className={styles.title}>
				Hi {userName}! See a list of your tickets: {ticketsAmount}
			</h2>
			
			<section className={styles.container}>
				{userTickets?.map((ticket) => (
					<Ticket key={ticket.id} ticket={ticket} />
				))}
			</section>
		</div>
	);
};

export default AllTickets;
