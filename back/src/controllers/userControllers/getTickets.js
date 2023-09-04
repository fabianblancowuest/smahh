const {Ticket} = require("../../DB_connection")

const getTickets = async (req, res) => {
    try {
        const userId = req.params.id // Obtén el ID del usuario de los parámetros de la solicitud
        
        // Busca los tickets relacionados con el ID de usuario
        const tickets = await Ticket.findAll({
            where: { UserId: userId }
        });

        return res.status(200).json({
            message: "Lista de tickets obtenida correctamente",
            tickets: tickets
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Error while trying to obtain tickets" });
    }
};

module.exports= {
    getTickets
}