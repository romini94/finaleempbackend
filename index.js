const express = require("express");
const cors = require('cors');
const parser = require('body-parser');
const db = require("./Dbconnection"); // Import database connection
const router = require("./Router"); // Import router
const multer = require('multer');


const app = express();
const port = 6002;
app.use(express.static(`${__dirname}/upload`));

app.use(cors()); // Enable CORS for cross-origin requests
app.use(parser.json()); // Parse JSON request bodies

app.use("/", router); // Use imported router for route handling

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});