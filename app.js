const express = require("express");
const app = express();
const mongoose = require("mongoose");
const db = require("./config/keys").mongoURI;
const passport = require("passport");
const bodyParser = require("body-parser");

// api routes
const users = require("./routes/api/users");
const journals = require("./routes/api/journals");
const entries = require("./routes/api/entries");


// mongoDB connection
mongoose
  .connect(db, {useNewUrlParser: true})
  .then(() => console.log("connected to mongoDB"))
  .catch(err => console.log(err));


app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());

app.use(passport.initialize());
require('./config/passport')(passport);

app.use("/api/users", users);
app.use("/api/journals", journals);
app.use("/api/entries", entries);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));


