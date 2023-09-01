import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Ticket from "../Ticket/Ticket";
import { getAllTickets } from "../../redux/actions/actions";

const Dashboard = () => {
  const userType = useSelector((state) => state.userType);
  const userTickets = useSelector((state) => state.userTickets);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllTickets())
  }, []);

  const handleRefresh = ()=> {
    dispatch(getAllTickets());
  }

  return (
    <div>
      <h1 >
        Dashboard of tickets
      </h1>
      <button onClick={handleRefresh}>Refresh</button>
      <section >
        <div >
          {userTickets?.map((ticket) => (
            <Ticket key={ticket.id} ticket={ticket} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Dashboard;