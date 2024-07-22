const express = require("express");
const { user } = require("./db");
const mainRouter=require("./Routes/index")
const app=express();
app.use("/api/v1",mainRouter);

app.listen(3000)