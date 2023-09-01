import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Ticket from "../Ticket/Ticket";
import { getAllTickets } from "../../redux/actions/actions";
import styles from "./Dashboard.module.css";

const Dashboard = () => {
  const userTickets = useSelector((state) => state.userTickets);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllTickets())
  }, []);

  const handleRefresh = () => {
    dispatch(getAllTickets());
  }

  return (
    <div>
      <h1 className={styles.title}>
        Dashboard of tickets
      </h1>
      <button onClick={handleRefresh}>Refresh</button>

      <section className={styles.container}>
        {userTickets?.map((ticket) => (
          <Ticket key={ticket.id} ticket={ticket} />
        ))}
      </section>
    </div>
  );
};

export default Dashboard;