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


/* TRY 

const { Ticket } = require("../../DB_connection");

const updateTicket = async (req, res) => {
    try {
        const { ticketId, newStatus } = req.body;
        if (ticketId && newStatus) {
            const [rowsUpdated, [updatedTicket]] = await Ticket.update(
                { status: newStatus },
                { returning: true, where: { id: ticketId } }
            );
            
            if (rowsUpdated === 0) {
                return res.status(404).json({ message: "Ticket not found" });
            }
            
            return res.status(200).json({ message: 'Status updated correctly', updatedTicket });
        } else {
            return res.status(400).json({ message: "Ticket not found" });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Error updating Ticket' });
    }
};

module.exports = {
    updateTicket
};

*/