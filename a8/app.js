"use strict";
const express = require("express");
const app = express();

// define endpoint for exercise 1 here
// since r is a path parameter, it is a required value. It CANNOT be null
app.get("/math/circle/:r", function (req, res) {
  // Convert to Number (ints, floats, etc)
  const radius = Number(req.params.r);
  // if the conversion failed, then we will see NaN
  if (isNaN(radius)) {
    res.status(400).send("Radius parameter MUST be a number.");
  } else {
    const area = Math.PI * radius * radius;
    const circumference = 2 * Math.PI * radius;
    res.type("json");
    res.json({ area: area, circumference: circumference });
  }
});

// define endpoint for exercise 2 here
//
// Tests
// Tests that should fail: localhost:8000/hello/name, localhost:8000/hello/name?first=test, localhost:8000/hello/name?last=tset
// Tests that should pass: localhost:8000/hello/name?first=Adam&last=smith, localhost:8000/hello/name?first=test&last=test2
app.get("/hello/name", function (req, res) {
  // use query parameters
  const first = req.query.first;
  const last = req.query.last;

  if (!first && !last) {
    // no first or last name
    res.status(400).send("Missing Required GET parameters: first, last");
  } else if (!first) {
    // no first name
    res.status(400).send("Missing Required GET parameters: first");
  } else if (!last) {
    // no last name
    res.status(400).send("Missing Required GET parameters: last");
  } else {
    // otherwise, this is ok.
    res.type("text");
    // I love Javascript string interpolation
    res.send(`Hello ${first} ${last}`);
  }
});

const PORT = process.env.PORT || 8000;
app.listen(PORT);
