const express = require("express");
const { Workout } = require("../models");

module.exports = function (app) {
  app.get("/api/workout", (req, res) => {
    Workout.find()
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        console.log(err);
        res.json(404);
      });
  });
  app.get("/api/workout/range", (req, res) => {
    Workout.find()
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        console.log(err);
        res.json(404);
      });
  });
  app.post("/api/workout", (req, res) => {
    Workout.create({})
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        console.log(err);
        res.json(404);
      });
  });
  app.put("/api/workout/:id", (req, res) => {
    const id = req.params.id;
    const workout = req.body;
    Workout.findByIdAndUpdate(
      id,
      { $push: { exercises: workout } },
      { new: true }
    )
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        console.log(err);
        res.json(404);
      });
  });
};