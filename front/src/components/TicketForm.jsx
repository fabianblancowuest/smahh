import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { riseTicket } from "../redux/actions/actions";

const TicketForm = () => {
    const userId = useSelector(state => state.userId);
    const dispatch = useDispatch();
    
    const [newTicket, setNewTicket] = useState({
        issueTitle: "",
        issueDescription: "",
        issueType: "",
        priority: "",
    });

    const handleChange = (event) => {
        const { name, value } = event.target;

        setNewTicket({
            ...newTicket,
            [name]: value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(userId);
        dispatch(riseTicket(newTicket, userId));
    };

    return (
        <form onSubmit={handleSubmit}>
            <fieldset>
                <legend>Issue Details</legend>

                <label>Issue title:</label>
                <input
                    type="text"
                    name="issueTitle"
                    placeholder="Issue Title..."
                    value={newTicket.issueTitle}
                    onChange={handleChange}
                    autoComplete="off"
                />

                <label htmlFor="description">Issue description:</label>
                <textarea
                    id="description"
                    name="issueDescription"
                    placeholder="Description..."
                    value={newTicket.issueDescription}
                    onChange={handleChange}
                />

                <label>Issue type:</label>
                <input
                    type="text"
                    name="issueType"
                    placeholder="Issue type..."
                    value={newTicket.issueType}
                    onChange={handleChange}
                    autoComplete="off"
                />

                <label>Priority:</label>
                <select name="priority" value={newTicket.priority} onChange={handleChange}>
                    <option value="High">High</option>
                    <option value="Medium">Medium</option>
                    <option value="Low">Low</option>
                </select>
            </fieldset>

            <button type="submit">Submit Ticket</button>
        </form>
    );
};

export default TicketForm;