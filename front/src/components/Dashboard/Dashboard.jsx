import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TicketStaff from "../TicketStaff/TicketStaff";
import { getAllTickets } from "../../redux/actions/actions";
import styles from "./Dashboard.module.css"
import "./CombinedStyles.css"

const Dashboard = () => {
  const userTickets = useSelector((state) => state.userTickets);
  const dispatch = useDispatch();
  const totalTickets = userTickets.length 

  useEffect(() => {
    dispatch(getAllTickets())
  }, []);

  const handleRefresh = () => {
    dispatch(getAllTickets());
  }

  return (
    <div>
    <h1 className={styles.title}>
      Dashboard of tickets in total: {totalTickets}
    </h1>
    <button onClick={handleRefresh}>Refresh</button>

    <div className="dashboard-header">
      <div>Ticket ID</div>
      <div>Issue Type</div>
      <div>Priority</div>
      <div>Status</div>
      <div>Created At</div>
      <div>Updated At</div>
      <div>Detail </div>
    </div>

    <section className={styles.container}>
      {userTickets?.map((ticket) => (
        <TicketStaff key={ticket.id} ticket={ticket} />
      ))}
    </section>
  </div>
  );
};

export default Dashboard;