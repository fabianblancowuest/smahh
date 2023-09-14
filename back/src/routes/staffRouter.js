const express = require("express");
const { updateTicket } = require("../controllers/staffControllers/updateTicket");
const { getAllTickets } = require("../controllers/staffControllers/getAllTickets");
const { getTicketsByUserName } = require("../controllers/staffControllers/getTicketsByUserName");

const staffRouter = express.Router();

//  http://localhost:3001/staff ==> before path

staffRouter.put("/update-ticket", updateTicket ) // This update the "status" atribute of one specific ticket 
staffRouter.get("/allTickets", getAllTickets) // This will bring all the tickets from all users 

staffRouter.get("/search",getTicketsByUserName) //Bring all the tickets from an especific User

module.exports = {
    staffRouter
}

// "http://localhost:3001/staff/update-ticket"