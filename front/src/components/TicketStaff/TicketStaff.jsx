import React, { useState } from "react";
import "../Dashboard/CombinedStyles.css"
import { useDispatch, useSelector } from "react-redux";
import { updateTicket } from "../../redux/actions/actions";
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

    const newStatusOptions = ["Not Started", "In Progress", "Completed", "Closed"];
    const [selectedStatus, setSelectedStatus] = useState("");

    const handleStatusChange = (event) => {
        const newStatus = event.target.value;
        setSelectedStatus(newStatus);
    };

    const handleUpdate = () => {
        if (selectedStatus) { // Verifica si se ha seleccionado un estado
            dispatch(updateTicket(id, selectedStatus));
            alert("Update successful");
        } else {
            alert("Please select a status before updating.");
        }
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
                        {newStatusOptions.map((option) => (
                            <option key={option} value={option}>
                                {option}
                            </option>
                        ))}
                    </select>
                    <button onClick={handleUpdate}>UPDATE</button>
                </div>
                <div className="ticket-item">{createdAt}</div>
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






