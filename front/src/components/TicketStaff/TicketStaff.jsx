import React, { useState } from "react";
import "../Dashboard/CombinedStyles.css"
import { useDispatch, useSelector } from "react-redux";
import { format } from "date-fns";
import { getAllTickets, updateTicket } from "../../redux/actions/actions";
import { Link } from "react-router-dom";

const TicketStaff = ({ ticket }) => {
    const {
        issueDescription,
        issueType,
        priority,
        issueTitle,
        status,
        createdAt,
        updatedAt,
        id,
        userName
    } = ticket;

    const dispatch = useDispatch();

    const [selectedStatus, setSelectedStatus] = useState("");

    const handleStatusChange = (event) => {
        const newStatus = event.target.value;
        setSelectedStatus(newStatus);
    };

    const handleUpdate = () => {
        if (selectedStatus) {
            dispatch(updateTicket(id, selectedStatus));
        } else {
            alert("Please select a status before updating.");
        }
    };

    const formatDate = (stringDate) => {
        const date = new Date(stringDate);
        return format(date, "MMMM dd, yyyy HH:mm:ss");
    };

    return (
        <div>

            <div className="ticket-container">
                <div className="ticket-item">{userName}</div>
                <div className="ticket-item">{id}</div>
                <div className="ticket-item">{issueType}</div>
                <div className="ticket-item">{priority}</div>
                <div className="ticket-item">{status}</div>
                <div className="ticket-item">
                    <select value={selectedStatus} onChange={handleStatusChange}>
                        <option value="Not Started">Not Started</option>
                        <option value="In Progress">In Progress</option>
                        <option value="Completed">Completed</option>
                        <option value="Closed">Closed</option>
                    </select>
                    <button onClick={handleUpdate}>UPDATE</button>
                </div>
                <div className="ticket-item">{formatDate(createdAt)}</div>
                <div className="ticket-item">{formatDate(updatedAt)}</div>

                <div className="ticket-item">
                    <Link to={`/detail/${id}`}>
                        Detail
                    </Link>
                </div>
            </div>


        </div>
    );
};

export default TicketStaff;






