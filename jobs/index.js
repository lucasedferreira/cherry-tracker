const requireDir = require("require-dir");
const cron = require("node-cron");

function setJobs(app) {
  const jobFiles = requireDir(".");
  const allJobs = Array.prototype.concat(...Object.values(jobFiles));

  for (const job of allJobs) {
    cron.schedule(job.cronExpression, job.function);
  }
}

module.exports = setJobs;
