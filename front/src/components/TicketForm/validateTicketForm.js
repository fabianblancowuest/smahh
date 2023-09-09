const validateTicketForm = (newTicket) => {
    let errors = {};

    if (newTicket.issueTitle.length > 200) {
        errors.issueTitle = "Subject cannot exceed 200 characters";
    }

    if (newTicket.issueDescription.length > 255) {
        errors.issueDescription = "Description cannot exceed 255 characters";
    }

    return errors;
};

export default validateTicketForm