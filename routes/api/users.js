const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const User = require("../../models/User");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
const passport = require('passport');

// input validations
const validateRegisterInput = require("../../validation/register");
const validateLogin = require("../../validation/login");

// test route can be removed
router.get("/test", (req,res) => {
  res.json({msg: "this is the user route"});
});

// private auth route
router.get('/current', passport.authenticate('jwt', { session: false }), (req, res) => {
  res.json({
    id: req.user.id,
    username: req.user.username
  })
})

// register a new user
router.post("/register", (req,res) => {
  // check if input was valid, if not return errors
  const { errors, isValid } = validateRegisterInput(req.body);
  if (!isValid) {
    return res.status(400).json(errors);
  }

  User.findOne({username: req.body.username})
    .then(user => {
      if (user) {
        // throw error as username already exists
        return res.status(400).json({username: "This username already exists"});
      } else {
        const newUser = new User({
          username: req.body.username,
          password: req.body.password
        });

        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if(err) throw err;
            newUser.password = hash;
            newUser.save()
              .then(user => res.json(user))
              .catch(err => console.log(err));
          })
        })
      }
    })
})

// log in existing user
router.post("/login", (req,res) => {
  // check if input was valid, if not return errors
  const { errors, isValid } = validateLogin(req.body);
  if (!isValid) {
    return res.status(400).json(errors);
  }

  const username = req.body.username;
  const password = req.body.password;

  User.findOne({username})
    .then(user => {
      if (!user) {
        return res.status(404).json({username: "This username doesn't exist"});
      }

      bcrypt.compare(password, user.password)
        .then(isMatch => {
          if (isMatch) {
            const payload = {id: user.id, username: user.username};
            jwt.sign(payload, keys.secretOrKey, {expiresIn: 3600}, (err, token) => {
                res.json({
                  success: true,
                  token: 'Bearer ' + token
                });
              });
          } else {
            return res.status(400).json({password: "Incorrect Password"});
          }
        })
    })
});

module.exports = router;