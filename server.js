require("dotenv").config();
const express = require("express");
const app = express();

require("./routes")(app);
require("./jobs")();

app.listen(process.env.PORT || 5000, () => {
  console.log("App is started");
});
