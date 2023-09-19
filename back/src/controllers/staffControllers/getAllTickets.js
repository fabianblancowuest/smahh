const { Ticket } = require("../../DB_connection");

const getAllTickets = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const perPage = parseInt(req.query.perPage) || 10;
        const priority = req.query.priority || "All";
        const status = req.query.status || "All";
        let order = req.query.order || "asc"; // Valor por defecto es "asc"

        let whereClause = {};

        if (priority !== "All") {
            whereClause.priority = priority;
        }

        if (status !== "All") {
            whereClause.status = status;
        }

        const allTickets = await Ticket.findAndCountAll({
            where: whereClause,
            limit: perPage,
            offset: (page - 1) * perPage,
            order: [['createdAt', order.toUpperCase()]],
        });

        return res.status(200).json({
            message: "Lista de tickets obtenida correctamente",
            tickets: allTickets.rows,
            totalTickets: allTickets.count,
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Error al obtener los tickets" });
    }
};

module.exports = {
    getAllTickets
};

// const {Ticket} = require("../../DB_connection")

// // This function will be able to staff-user Only.

// const getAllTickets = async (req, res) => {
//     try {
//         const allTickets = await Ticket.findAll();
//         return res.status(200).json({
//             message: "Lista de todos los tickets obtenida correctamente",
//             tickets: allTickets
//         });
//     } catch (error) {
//         console.error(error);
//         return res.status(500).json({ error: "Error al obtener los tickets" });
//     }
// }

// module.exports = {
//     getAllTickets
// }