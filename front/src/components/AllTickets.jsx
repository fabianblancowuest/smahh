import React from "react";
import { useSelector } from "react-redux";
import Ticket from "./Ticket";

const AllTickets = () => {
    const userTickets = useSelector(state => state.userTickets);

    return (
        <div>
            <h2>All Tickets</h2>
            {userTickets?.map(ticket => (
                <Ticket key={ticket.id} ticket={ticket} />
            ))}
        </div>
    );
};

export default AllTickets;