const express = require("express");
const databaseConnection = require("./database");
const app = express();
const cors = require("cors");
const router = require("./Route/bookRoute");

databaseConnection();

app.use(cors());

app.use(express.json());

app.use("/book", router);

app.listen(3000, () => {
    console.log("Server running on port 3000");
});