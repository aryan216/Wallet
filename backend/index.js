const express = require("express");
// const { user } = require("./db");
const mainRouter=require("./Routes/routeindex")
const app=express();
app.use("/api/v1",mainRouter);

app.listen(3000)