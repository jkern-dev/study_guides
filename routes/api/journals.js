const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

const Journal = require("../../models/Journal");
const validateJournalInput = require("../../validation/journal");


// find all user journals
router.get("/user/:user_id", (req,res) => {
  Journal.find({user: req.params.user_id})
    .then(journals => res.json(journals))
    .catch(err => 
        res.status(404).json({noJournalsFound: "No journals found for user"}
        )
      );
});

// find specific journal
router.get("/:id", (req,res) => {
  Journal.findById(req.params.id)
    .then(journal => res.json(journal))
    .catch(err => 
      res.status(404).json({noJournalFound: "No journal found"}
      )
    );
});

// create new journal
router.post("/",
  passport.authenticate("jwt", { session: false}),
  (req,res) => {
    const { errors, isValid } = validateJournalInput(req.body);

    if (!isValid) {
      return res.status(400).json(errors);
    }

    const newJournal = new Journal({
      title: req.body.title,
      user: req.user.id
    });

    newJournal.save().then(journal => res.json(journal));
  }
);

module.exports = router;