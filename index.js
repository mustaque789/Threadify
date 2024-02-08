// get api route
const express = require("express");
// calling
const app = express();

app.get("/", (req, resp) => {
  resp.send("Threadify app is working...");
});
app.listen(5003);
// listening on port number 5003, 
