import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Ticket from "../Ticket/Ticket";
import styles from "./AllTickets.module.css";
import {getUserTickets} from "../../redux/actions/actions";
import Filters from "../Filters/Filters";

const AllTickets = () => {
	const userName = useSelector((state) => state.userName);
	const userId = useSelector((state) => state.userId);

	const userTicketsCopy = useSelector((state) => state.userTicketsCopy);
	const filteredTickets = useSelector((state) => state.filteredTickets);

	const totalAmount = userTicketsCopy.length;
	const totalFilteredTickets = filteredTickets.length;

	const dispatch = useDispatch();

	useEffect(() => {
		if (userTicketsCopy.length === 0) {
			dispatch(getUserTickets(userId));
		} else {
			dispatch(applyCombinedFilters("All", "All", "A"));
		}
	}, [userTicketsCopy, dispatch]);

	const handleRefresh = () => {
		dispatch(getUserTickets(userId));
	};

	return (
		<div className={styles.container}>
			<h2 className={styles.title}>Hi {userName}</h2>
			<div className={styles.filterContainer}>
				<Filters />
			</div>
			<div className={styles.spanContainer}>
				<span className={styles.spanInfo}>
					All your tickets: {totalAmount}{" "}
				</span>
				<span className={styles.spanInfo}>||</span>
				<span className={styles.spanInfo}>
					Filtered tickets: {totalFilteredTickets}
				</span>
				<button onClick={handleRefresh} className={styles.buttonRefresh}>
					Refresh status
				</button>
			</div>
			<section className={styles.ticketContainer}>
				{filteredTickets?.length > 0 ? (
					filteredTickets.map((ticket) => (
						<Ticket key={ticket.id} ticket={ticket} />
					))
				) : (
					<h2 className={styles.title}>No se encontraron tickets</h2>
				)}
			</section>
		</div>
	);
};

export default AllTickets;
