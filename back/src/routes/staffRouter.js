const express = require("express");
const { updateTicket } = require("../controllers/staffControllers/updateTicket");

const staffRouter = express.Router();

staffRouter.put("/update-ticket", updateTicket )

module.exports = {
    staffRouter
}