require("dotenv").config();
const express = require("express");
const cors = require('cors')
const bodyParser = require("body-parser");
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const moment = require('moment-timezone');
moment.tz.setDefault("America/Sao_Paulo");

(async () => {
  require("./routes")(app);
  require("./jobs")();

  const db = require("./database/config");
  await db.init();

  app.listen(process.env.PORT || 5000, () => {
    console.log("App is started");
  });
})();
