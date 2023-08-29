const express = require("express");
const { updateTicket } = require("../controllers/updateTicket");

const staffRouter = express.Router();

staffRouter.put("/update-ticket", updateTicket )

module.exports = {
    staffRouter
}