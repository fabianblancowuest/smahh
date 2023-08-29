const {Router} = require("express");
const { staffRouter } = require("./staffRouter");
const { userRouter } = require("./userRouter");
const mainRouter = Router ()

mainRouter.use("/user" , userRouter)
mainRouter.use("/staff", staffRouter)


module.exports = mainRouter