const { Ticket } = require("../../DB_connection")
const {User}= require("../../DB_connection")

const postTicket = async (req, res) => {
  try {
    const {
      issueTitle,
      issueDescription,
      issueType,
      priority,
      userId,
      userName
    } = req.body;

    // Verifica si el ID de usuario existe en la base de datos
    const existingUser = await User.findByPk(userId);
    if (!existingUser) {
      return res.status(400).json({
        error: 'El ID de usuario no existe en la base de datos'
      });
    }

    // Crea un nuevo ticket en la base de datos
    const newTicket = await Ticket.create({
      issueTitle,
      issueDescription,
      issueType,
      priority,
      UserId: userId,
      userName
    });

    return res.status(201).json({
      message: 'Ticket creado exitosamente',
      ticket: newTicket
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      error: 'Error al crear el ticket'
    });
  }
};

module.exports = {
  postTicket
};
