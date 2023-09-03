import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TicketStaff from "../TicketStaff/TicketStaff";
import { getAllTickets } from "../../redux/actions/actions";
import "./CombinedStyles.css"
import Filters from "../Filters/Filters";
import SearchBar from "../SearchBar/SearchBar";

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
    <h1 className="title">
      Dashboard of tickets in total: {totalTickets}
    </h1>

    <SearchBar/>

    <button onClick={handleRefresh} className="buttonRefresh">Refresh</button>
    
    <Filters />

    <div className="dashboard-header">
      <div>User Name</div>
      <div>Ticket Id</div>
      <div>Issue Type</div>
      <div>Priority</div>
      <div>Status</div>
      <div>Update Status</div>
      <div>Created At</div>
      <div>Detail </div>
    </div>

    <section >
      {userTickets?.map((ticket) => (
        <TicketStaff key={ticket.id} ticket={ticket} />
      ))}
    </section>
  </div>
  );
};

export default Dashboard;