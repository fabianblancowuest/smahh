const {Ticket} = require("../../DB_connection")

const getTicketDetail = async (req, res) => {
    try {
        const ticketId = req.params.id;
        const userId = req.user.id; // Suponiendo que tienes información del usuario en req.user después de la autenticación

        const ticket = await Ticket.findOne({
            where: {
                id: ticketId,
                UserId: userId
            }
        });
        
        if (!ticket) {
            return res.status(404).json({ error: "Ticket no encontrado" });
        }

        return res.status(200).json({ ticket });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Error al obtener los detalles del ticket" });
    }
};

module.exports= {
    getTicketDetail
}