const express = require("express");
const { updateTicket } = require("../controllers/staffControllers/updateTicket");
const { getAllTickets } = require("../controllers/staffControllers/getAllTickets");

const staffRouter = express.Router();

//  http://localhost:3001/staff ==> before path

staffRouter.put("/update-ticket", updateTicket ) // This update the "status" atribute of one specific ticket 
staffRouter.get("/allTickets", getAllTickets) // This will bring all the tickets from all users 

module.exports = {
    staffRouter
}