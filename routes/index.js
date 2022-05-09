const fs = require("fs");

function setRoutes(app) {
  const files = fs.readdirSync("./routes");
  const routes = files
    .filter((r) => r !== "index.js")
    .map((r) => {
      return r.slice(0, -3);
    });

  for (const route of routes) {
    app.use(`/${route}`, require(`./${route}`));
  }
}

module.exports = setRoutes;
