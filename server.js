require("dotenv").config();
const express = require("express");
const app = express();


(async () => {
  require("./routes")(app);
  require("./jobs")();

  const db = require("./database/config");
  await db.init();

  app.listen(process.env.PORT || 5000, () => {
    console.log("App is started");
  });
})();
