const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

const Entry = require("../../models/Entry");
const validateEntryInput = require("../../validation/entry");

// entries to specific journal
router.get("/journal/:journal_id", (req,res) => {
  Entry.find({journal: req.params.journal_id})
    .then(entries => res.json(entries))
    .catch(err => 
      res.status(404).json({noEntriesFound: "No entries found for journal"}
      )
    );
});

// specific entry
router.get("/:id", (req,res) => {
  Entry.findById(req.params.id)
    .then(entry => res.json(entry))
    .catch(err => 
      res.status(404).json({noEntryFound: "No entry found"}
      )
    );
});

// create new journal entry
router.post("/",
  passport.authenticate("jwt", { session: false }),
  (req,res) => {
    const { errors, isValid } = validateEntryInput(req.body);
    if (!isValid) {
      return res.status(400).json(errors);
    }

    const newEntry = new Entry({
      title: req.body.title,
      user: req.user.id,
      journal: req.journal.id
    });

    newEntry.save().then(entry => res.json(entry));
  }
);

module.exports = router;