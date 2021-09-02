const express = require("express");
const app = express();
const router = require("./routes/router");
const controller = require("./controllers/controller");

app.use(router);

app.use(controller.get404);

const server = app.listen(3000);
