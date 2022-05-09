require("dotenv").config();
const express = require("express");
const app = express();

require("./routes")(app);

app.listen(process.env.PORT || 5000, () => {
  console.log("App is started");
});
