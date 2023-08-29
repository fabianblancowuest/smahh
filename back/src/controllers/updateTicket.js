const {Ticket} = require("../DB_connection")

const updateTicket = async (req, res) => {
    try {
      const { ticketId, newStatus } = req.body;
  
      if (newStatus) {
        await Ticket.update({ status: newStatus }, { where: { id: ticketId } });
        return res.status(200).json({ message: 'Status updated correctly' });
      } else {
        return res.status(400).json({message: "Ticket not Found"})
      }
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Error updating Ticket' });
    }
  };

module.exports = {
    updateTicket
}
