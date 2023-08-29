const {Ticket} = require("../DB_connection")

const postTicket = async (req, res) => {
    try {
      const {
        issueTitle,
        issueDescription,
        issueType,
        priority,
        userId,
      } = req.body;
  
      // Crea un nuevo ticket en la base de datos
      const newTicket = await Ticket.create({
        issueTitle,
        issueDescription,
        issueType,
        priority,
        UserId: userId
      });
     
  
      return res.status(201).json({
        message: 'Ticket creado exitosamente',
        ticket: newTicket
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        message: 'Error al crear el ticket'
      });
    }
  };
  
  module.exports = {
    postTicket
  };
