import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TicketStaff from "../TicketStaff/TicketStaff";
import { getAllTickets, applyCombinedFilters } from "../../redux/actions/actions";
import "./CombinedStyles.css";
import Filters from "../Filters/Filters";
import SearchBar from "../SearchBar/SearchBar";

const Dashboard = () => {
  const userTickets = useSelector((state) => state.userTickets);
  const totalTickets = useSelector((state) => state.totalTickets);

  const [priority, setPriority] = useState("All");
  const [status, setStatus] = useState("All");
  const [order, setOrder] = useState("Asc");
  const [page, setPage] = useState(1); // Estado para la página actual

  const dispatch = useDispatch();

  useEffect(() => {
    // Llama a getAllTickets con los filtros y la página actual
    dispatch(getAllTickets({ priority, status, order, page }));
  }, [priority, status, page, order, dispatch]);


  // Funciones para restablecer los estados locales de los filtros
  const resetFilters = () => {
    setPriority("All");
    setStatus("All");
    setOrder("asc"); // Restablecer a "asc"
    setPage(1);
  };

  const handleRefresh = () => {
    resetFilters(); // Llama a la función para restablecer los filtros
    dispatch(getAllTickets({ priority, status, order, page }));
  };

  const handlePreviousPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleNextPage = () => {
    setPage(page + 1);
  };


  return (
    <div className="dashboard-container">

      <div className="tile-searchBar-container">
        <h1 className="dashboard-title">Ticket Dashboard</h1>
        <SearchBar />
      </div>

      <Filters handlePriority={(e) => setPriority(e.target.value)} handleStatus={(e) => setStatus(e.target.value)} handleOrder={(e) => setOrder(e.target.value)} />

      <div className="pages-container">
        <button className="prev-next-button" onClick={handlePreviousPage}>Previous</button>
        <button className="prev-next-button" onClick={handleNextPage}>Next</button>
      </div>

      <div className="span-container">
        <div>
          <span className="span-item">All tickets: {totalTickets}</span>
          <span className="span-item">||</span>
          <span className="span-item">Filtered tickets: {userTickets?.length}</span>
        </div>
        <button onClick={handleRefresh} className="buttonRefresh">
          Refresh
        </button>
      </div>

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
        {userTickets?.length > 0 ? (
          userTickets.map((ticket) => (
            <TicketStaff key={ticket.id} ticket={ticket} />
          ))
        ) : (
          <p className="span-item">No tickets where found</p>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
