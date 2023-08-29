const express = require("express");
const { postTicket } = require("../controllers/userControllers/postTicket");
const { postUser } = require ("../controllers/userControllers/postUser");
const { getTickets } = require("../controllers/userControllers/getTickets");
const { getTicketDetail } = require("../controllers/userControllers/getTicketDetail");


const userRouter = express.Router();

//  http://localhost:3001/user ===> before path

userRouter.post("/register", postUser); // registrate validating if email already exist
userRouter.post("/ticket", postTicket); // create a new Ticket
userRouter.get("/ticket/:id", getTickets); // get all the tickets acording to UserId foreing key
userRouter.get("/ticket-detail/:id", getTicketDetail); //get the detail for one Ticket

module.exports = {
    userRouter
}