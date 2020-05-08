const express = require("express");
const app =express();
var cors = require('cors')
const DB = require("./config/database");
const projectRouter = require ("./api/project/project.router");
const projectTaskRouter = require("./api/projectTask/projectTask.router");
require("dotenv").config();
DB();
app.use(cors());
app.use(express.json());
app.use("/api/project",projectRouter);
app.use("/api/projectTask",projectTaskRouter);
app.listen(process.env.PORT,()=>{
 console.log('server is listen on port 8000'); 
})