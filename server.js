require("dotenv").config();
const express = require("express");
const app = express();

require("./routes")(app);
require("./jobs")();

// (async () => {
//   const SpotifyRequest = require("./domains/spotify/request");
//   try {
//     const response = await new SpotifyRequest().getTopFromLastMonth("BQAhIBbdFDpweB7BZPopEeoU7IU5q9pMhMKuWuCKDElP_8X0k1yg4mEMMAYDqsyKeP97t8ZtfSi6Ll13nMxYB8ft4snDZjzglVoV2f4n29fYti3p7ivY-ezeAvOgNbXRgalFoI6cv8gEtZF8dSeBpu1VgAcbzCks9nfplqGigWWaBJQpBMHFEvBy6wg");
//     console.log('response', response.data);
//   } catch (error) {
//     console.log('error', error);
//   }
// })()

app.listen(process.env.PORT || 5000, () => {
  console.log("App is started");
});
