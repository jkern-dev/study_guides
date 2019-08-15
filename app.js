const express = require("express");
const app = express();
const mongoose = require("mongoose");
const db = require("./config/keys").mongoURI;
const users = require("./routes/api/users");
const guides = require("./routes/api/guides");


// mongoDB connection
mongoose
  .connect(db, {useNewUrlParser: true})
  .then(() => console.log("connected to mongoDB"))
  .catch(err => console.log(err));


app.get("/", (req, res) => {
  res.send("Hello World!")
});

app.use("/api/users", users);
app.use("/api/guides", guides);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));


