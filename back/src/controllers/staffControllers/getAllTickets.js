const {Ticket} = require("../../DB_connection")

// This function will be able to staff-user Only. 

const getAllTickets = async (req, res) => {
    try {
        const allTickets = await Ticket.findAll();
        return res.status(200).json({
            message: "Lista de todos los tickets obtenida correctamente",
            tickets: allTickets
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Error al obtener los tickets" });
    }
}

module.exports = {
    getAllTickets
}