import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TicketStaff from "../TicketStaff/TicketStaff";
import { getAllTickets, applyCombinedFilters} from "../../redux/actions/actions";
import "./CombinedStyles.css"
import Filters from "../Filters/Filters";
import SearchBar from "../SearchBar/SearchBar";

const Dashboard = () => {
  const userTicketsCopy = useSelector((state) => state.userTicketsCopy);
  const filteredTickets = useSelector((state) => state.filteredTickets);

  const totalAmount = userTicketsCopy.length;
  const totalFilteredTickets = filteredTickets.length;
  
  const dispatch = useDispatch();
  
  useEffect(() => {
    if (userTicketsCopy.length === 0) {
      dispatch(getAllTickets());
    } else {
      // Cuando userTicketsCopy se actualiza, también actualizamos filteredTickets
      dispatch(applyCombinedFilters("All", "All", "A")); // Aplica los filtros iniciales
    }
  }, [userTicketsCopy, dispatch]);

  const handleRefresh = () => {
    dispatch(getAllTickets());
  };

  return (
    <div className="dashboard-container">
      <h1 className="title">Ticket Dashboard</h1>

      <div className="span-container">
        <span className="span-item">All tickets: {totalAmount}</span>
        <span className="span-item">||</span>
        <span className="span-item">Filtered tickets: {totalFilteredTickets}</span>
      <button onClick={handleRefresh} className="buttonRefresh">
        Refresh
      </button>
      </div>
  
      <SearchBar />


      <Filters />

      <div className="dashboard-header">
        <div>User Name</div>
        <div>Ticket Id</div>
        <div>Issue Type</div>
        <div>Priority</div>
        <div>Status</div>
        <div>Update Status</div>
        <div>Created At</div>
        <div>Updated At</div>
        <div>Detail </div>
      </div>

      <div>
        {filteredTickets?.length > 0 ? (
          filteredTickets.map((ticket) => (
            <TicketStaff key={ticket.id} ticket={ticket} />
          ))
        ) : (
          <p className="title">No tickets where found</p>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
