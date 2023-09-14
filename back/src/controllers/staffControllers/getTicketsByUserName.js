const {Ticket} = require("../../DB_connection")

const { Op } = require("sequelize");

const getTicketsByUserName = async (req, res) => {
    const { search } = req.query;

    console.log(search);

    if (!search) {
        return res.status(400).json({ error: "Search parameter is required" });
    }

    try {
        const allTicketsFromUser = await Ticket.findAll({
            where: {
                [Op.or]: [
                    {
                        userName: {
                            [Op.iLike]: `%${search}%`, // Búsqueda insensible a mayúsculas
                        },
                    },
                    {
                        userLastName: {
                            [Op.iLike]: `%${search}%`, // Búsqueda insensible a mayúsculas
                        },
                    },
                ],
            },
        });

        return res.status(200).json({
            message: "List of tickets obtained successfully",
            tickets: allTicketsFromUser,
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: "Error while trying to find user" });
    }
};

module.exports = {
    getTicketsByUserName,
};