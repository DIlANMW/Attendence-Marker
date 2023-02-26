const express = require("express");
const bcrypt = require("bcrypt");
const Attendance = require("../model/attendance");
const User = require("../model/userData");
const jwt = require("jsonwebtoken");
const router = express.Router();
const fastcsv = require("fast-csv");
const fileSystem = require("fs");

router.post("/scanner", function (req, res) {
  console.log(req.body);

  const newRecode = new Attendance({
    attendance: req.body.attendance,
    email: req.body.email,
  });

  newRecode.save((err) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    return res.status(200).json({
      success: "Attendance Marked",
    });
  });
});

router.post("/register", async function (req, res) {
  const { email, name, RegNo, password } = req.body;
  console.log(req.body);

  try {
    passwordHash = await bcrypt.hash(password, 10);

    const user = await User.findOne({ email });
    if (user) {
      console.log("user exits");
    } else {
      await User.create({
        name: name,
        RegNo: RegNo,
        email: email,
        password: passwordHash,
      });
    }

    return res.json({ status: "Ok", user: true });
  } catch (err) {
    return res.json({ status: err, user: false });
  }
});

router.post("/login", async function (req, res) {
  const { name, email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (user && (await bcrypt.compare(password, user.password))) {
      console.log("found");
      const token = jwt.sign(
        {
          email: req.body.email,
          name: req.body.name,
        },

        "1234dilanW",
        {
          expiresIn: "12s",
        }
      );
      return res.json({ status: "ok", user: token });
    } else {
      console.log("Not found");
    }
  } catch (error) {
    return res.json({ status: error, user: false });
  }
});

router.post("/datatochart", async function (req, res) {
  const { email } = req.body;

  try {
    await Attendance.find({ email }).then((data) => {
      res.send(data);
    });
  } catch (error) {
    return res.json({ status: "ok", user: false });
  }
});

router.get("/users", async function (req, res) {
  try {
    await User.find().then((data) => {
      res.send(data);
    });
  } catch (error) {
    return res.json({ status: "ok", user: false });
  }
});

router.get("/attendance", async function (req, res) {
  try {
    await Attendance.find().then((data) => {
      res.send(data);
    });
  } catch (error) {
    return res.json({ status: "ok", user: false });
  }
});

//
router.get("/users/:id", async function (req, res) {
  const userID = req.params.id;
  try {
    await User.findById(userID).then((data) => {
      res.send(data);
    });
  } catch (error) {
    return res.json({ status: "ok", user: false });
  }
});

router.put("/users/update/:id", async function (req, res) {
  const { name, RegNo, email } = req.body;

  console.log(req.body);
  try {
    await User.findByIdAndUpdate(
      req.params.id,

      {
        name,
        RegNo,
        email,
      }
    );

    res.status(200).json({ status: "Updated", user: true });
  } catch (error) {
    return res.json({ status: error, user: false });
  }
});

router.delete("/users/delete/:id", async function (req, res) {
  try {
    await User.findByIdAndDelete(req.params.id);

    res.status(200).json({ status: "Deleted", user: true });
  } catch (error) {
    return res.json({ status: error, user: false });
  }
});

// export Report as cs

router.post("/report", async function (req, res) {
  try {
    var data = [];
    Attendance.find({}, { __v: 0, _id: 0, userData: 0 }).then((newdata) => {
      data.push(newdata);

      var ws = fileSystem.createWriteStream("/Attendence_Report.csv");
      fastcsv
        .write(data, { headers: true })
        .on("finish", function () {
          res.status(200).json({ status: "Report Downlorded" });
        })
        .pipe(ws);
    });
  } catch (error) {
    res.status(200).json({ status: error });
  }
});

module.exports = router;
