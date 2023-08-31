import React, { useEffect } from "react";
import { useDispatch, useSelector, } from "react-redux";
import Ticket from "../Ticket/Ticket";
import styles from "./AllTickets.module.css";
import { getAllTickets, getUserTickets } from "../../redux/actions/actions";

const AllTickets = () => {
	const userType = useSelector(state => state.userType);
	const userId = useSelector(state=> state.userId)
	const userTickets = useSelector(state => state.userTickets);
	const dispatch = useDispatch();
	
	useEffect(() => {
		if (userType === "user" && userTickets.length === 0) {
			// Despachar la acción para obtener los tickets del usuario.
			dispatch(getUserTickets(userId));
		}
	}, [userType, userTickets, dispatch]);

	useEffect(() => {
		if (userType === "staff") {
			dispatch(getAllTickets());
		}
	}, []);

	return (
		<div>
			<h1 className={styles.title}>
				{userType === "staff" ? "All Tickets" : "My Tickets"}
			</h1>
			<section className={styles.container}>
				{userTickets?.map((ticket) => (
					<Ticket key={ticket.id} ticket={ticket} />
				))}
			</section>
		</div>
	);
};

export default AllTickets;
