import React from "react";

const Ticket = ({ ticket }) => {
    const {issueDescription, issueType, priority, issueTitle, status} = ticket
    
    return (
        <div >
            <h3>Title: {issueTitle}</h3>
            <p>Description: {issueDescription}</p>
            <p>Type: {issueType}</p>
            <p>Priority: {priority}</p>
            <p>Status: {status}</p>
        </div>
    );
};

export default Ticket;