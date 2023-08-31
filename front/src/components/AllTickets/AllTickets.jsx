import React, { useEffect } from "react";
import { useDispatch, useSelector, } from "react-redux";
import Ticket from "../Ticket/Ticket";
import styles from "./AllTickets.module.css";
import { getAllTickets } from "../../redux/actions/actions";

const AllTickets = () => {
	const userType = useSelector(state => state.userType);
	const dispatch = useDispatch();
	const userTickets = useSelector(state => state.userTickets);

	useEffect(() => {
		if (userType === "user" && userTickets.length === 0) {
			// Aquí podrías despachar la acción para obtener los tickets del usuario.
			// Ejemplo:
			// dispatch(getUserTickets());
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
