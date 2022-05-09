const requireDir = require("require-dir");

function setRoutes(app) {
  const routes = requireDir(".");

  for (const route of Object.entries(routes)) {
    app.use(`/${route[0]}`, route[1]);
  }
}

module.exports = setRoutes;
