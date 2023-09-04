const {Ticket} = require("../../DB_connection")

// This function will be able to staff-user Only. 

const getTicketsByUserName = async (req, res) => {

    const {userName} = req.query
    
    if (!userName) {
        return res.status(400).json({ error: "userName is required" });
    }

    try {
        const allTicketsFromUser = await Ticket.findAll({where:{userName}});

        return res.status(200).json({
            message: "List of tickets obtained succesfully",
            tickets: allTicketsFromUser
        });

    } catch (error) {
        return res.status(500).json({ error: "Error while trying to find user" });
    }
}

module.exports = {
    getTicketsByUserName
}