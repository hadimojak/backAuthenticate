const express = require("express");
const authRoutes = require("./routes/auth");
const app = express();

app.use("/",authRoutes);

const server = app.listen(3000);
