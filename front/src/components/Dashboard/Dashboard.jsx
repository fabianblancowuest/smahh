import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TicketStaff from "../TicketStaff/TicketStaff";
import { getAllTickets } from "../../redux/actions/actions";
import "./CombinedStyles.css";
import Filters from "../Filters/Filters";
import SearchBar from "../SearchBar/SearchBar";
import Pagination from "./Pagination";

const Dashboard = () => {
  const userTickets = useSelector((state) => state.userTickets);
  const totalTickets = useSelector((state) => state.totalTickets); // number
  const totalPages = useSelector((state) => state.totalPages); // number
  const prevPage = useSelector((state) => state.prev); // 
  const nextPage = useSelector((state) => state.next);

  const [priority, setPriority] = useState("All");
  const [status, setStatus] = useState("All");
  const [order, setOrder] = useState("Asc");
  const [page, setPage] = useState(1); // Estado para la página actual

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllTickets({ priority, status, order, page }));
  }, [priority, status, page, order, dispatch]);


  // Funciones para restablecer los estados locales de los filtros

  const handleRefresh = () => {
    setPriority("All");
    setStatus("All");
    setOrder("asc"); // Restablecer a "asc"
    setPage(1);
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

      {/* <div className="span-container">
        <div>
          <span className="span-item">All tickets: {totalTickets}</span>
          <span className="span-item">||</span>
          <span className="span-item">Filtered tickets: {userTickets?.length}</span>
        </div>
      </div> */}
      {/* <button onClick={handleRefresh} className="buttonRefresh">
        Refresh
      </button> */}

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
            <TicketStaff key={ticket.id} ticket={ticket} currentPage={page} />
          ))
        ) : (
          <p className="span-item">No tickets where found</p>
        )}
      </div>

      <div className="pages-container">
        {prevPage && <button className="prev-next-button" onClick={handlePreviousPage}>Previous</button>}
        <Pagination
          totalPages={totalPages}
          currentPage={page}
          onPageChange={(newPage) => setPage(newPage)}
        />
        {nextPage && <button className="prev-next-button" onClick={handleNextPage}>Next</button>}
      </div>


    </div>
  );
};

export default Dashboard;
