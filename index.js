const express = require("express");
const mongoose = require("mongoose");
const workRouter = require("./routes/work.route");
const messageRouter = require("./routes/message.route");

const app = express();
app.use(express.json());

mongoose
  .connect(
    "mongodb+srv://admin:4L9igXJF58yACSH@matin-portfolio.gm26e.mongodb.net/matin?retryWrites=true&w=majority&appName=Matin-Portfolio"
  )
  .then(() => {
    console.log("Connected to the database");
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch((err) => {
    console.log("Error connecting to the database", err);
  });

app.get("/", (_req, res) => {
  res.send("matin nigga");
});
app.use("/api/works", workRouter);
app.use("/api/messages", messageRouter);
