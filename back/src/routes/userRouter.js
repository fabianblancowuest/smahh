const express = require("express");
const { postTicket } = require("../controllers/postTicket");
const { postUser } = require ("../controllers/postUser")
const userRouter = express.Router();


userRouter.post("/register", postUser)
userRouter.post("/ticket", postTicket)


module.exports = {
    userRouter
}