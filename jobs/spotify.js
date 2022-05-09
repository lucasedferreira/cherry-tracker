module.exports = [
  {
    cronExpression: "* * * * *",
    function: () => {
      console.log("cron job");
    },
  },
];
