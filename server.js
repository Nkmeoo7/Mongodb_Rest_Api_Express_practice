
const express = require ("express");
const dotenv = require('dotenv').config();


const bodyparser = require("body-parser");
const errorHandler = require("./middleware/errorhandler");
const connectDb = require("./config/dbconnection");
const app = express();


app.use(bodyparser.json());
app.use(errorHandler);
connectDb();
const port = 5000;
app.use("/api/contacts",require("./routes/contactRoutes"))

app.use("/api/user",require("./routes/userRoutes"))



app.listen (port,() =>{
console.log(`server running on port ${port}`);

});
