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
  const totalTickets = useSelector((state) => state.totalTickets);
  const totalPages = useSelector((state) => state.totalPages);
  const prevPage = useSelector((state) => state.prev);
  const nextPage = useSelector((state) => state.next);
  
  const [filtersKey, setFiltersKey] = useState(0);
  const [priority, setPriority] = useState("All");
  const [status, setStatus] = useState("All");
  const [order, setOrder] = useState("Asc");
  const [page, setPage] = useState(1);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllTickets({ priority, status, order, page }))
  }, [priority, status, order, page, dispatch]);

  const handleRefresh = () => {
    setPriority("All");
    setStatus("All");
    setOrder("asc");
    setPage(1);
    setFiltersKey(filtersKey + 1);
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

  const handlePriorityChange = (e) => {
    if (page !== 1) {
      setPage(1)
    }
    setPriority(e.target.value);
  };

  const handleStatusChange = (e) => {
    if (page !== 1) {
      setPage(1)
    }
    setStatus(e.target.value);
  };

  const handleOrderChange = (e) => {
    if (page !== 1) {
      setPage(1)
    }
    setOrder(e.target.value);
  };



  return (
    <div className="dashboard-container">
      <div className="tile-searchBar-container">
        <h1 className="dashboard-title">Ticket Dashboard</h1>
        <SearchBar />
      </div>

      <Filters
        handlePriority={handlePriorityChange}
        handleStatus={handleStatusChange}
        handleOrder={handleOrderChange}
        key={filtersKey}
      />

      <div className="span-container">
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
            <TicketStaff
              key={ticket.id}
              ticket={ticket}
              currentPage={page}
              currentPriority={priority}
              currentStatus={status}
              currentOrder={order} />
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
