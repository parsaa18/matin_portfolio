const express = require("express");
const mongoose = require("mongoose");
const workRouter = require("./routes/work.route");
const roleRouter = require("./routes/role.route");
const categoryRouter = require("./routes/category.route");
const messageRouter = require("./routes/message.route");
const commentRouter = require("./routes/comment.route");

const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

mongoose
  .connect(
    "mongodb+srv://admin:4L9igXJF58yACSH@matin-portfolio.gm26e.mongodb.net/matin?retryWrites=true&w=majority&appName=Matin-Portfolio"
  )
  .then(() => {
    console.log("Connected to the database");
    app.listen(4000, () => {
      console.log("Server is running on port 4000");
    });
  })
  .catch((err) => {
    console.log("Error connecting to the database", err);
  });

app.get("/", (_req, res) => {
  res.send("matin ");
});
app.use("/api/works", workRouter);
app.use("/api/role", roleRouter);
app.use("/api/category", categoryRouter);
app.use("/api/comment", commentRouter);
app.use("/api/messages", messageRouter);
