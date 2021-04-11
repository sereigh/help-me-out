const express = require("express");
const path = require("path");
const routes = require("./routes/router");

const PORT = 3000;
const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, "..", "client", "public")));
app.use("/", routes);

app.listen(PORT);
