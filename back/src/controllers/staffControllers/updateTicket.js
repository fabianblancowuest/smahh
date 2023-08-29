const {Ticket} = require("../../DB_connection")

// This function will be able to staff-user Only. 

// update [status] from : 'Not Started' wich is default value to ==> 'In Progress', 'Completed' or 'Closed'

const updateTicket = async (req, res) => {
    try {
      const { ticketId, newStatus } = req.body;
      if (ticketId, newStatus) {
        await Ticket.update({ status: newStatus }, { where: { id: ticketId } });
        return res.status(200).json({ 
          message: 'Status updated correctly', 
      });
      } else {
        return res.status(400).json({message: "Ticket not Found"})
      }
    } catch (error) {
      console.error(error);
      return res.status(500).json({message: 'Error updating Ticket' });
    }
  };

module.exports = {
    updateTicket
}
