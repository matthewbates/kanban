const mongoose = require("mongoose");

const User = require("../models/users.model");

const postNewUser = (req, res, next) => {
  const user = new User({
    _id: new mongoose.Types.ObjectId(),
    username: req.body.username,
    password: req.body.password,
    confirmPassword: req.body.confirmPassword,
  });

  User.find({ username: req.body.username })
    .exec()
    .then((existingUser) => {
      // checks to see if the username is taken
      if (existingUser.length >= 1) {
        return res.status(409).json({
          message: "Username already exists",
        });
        // verifies the user has entered matching passwords
      } else {
        if (req.body.password !== req.body.confirmPassword) {
          return res.status(400).json({
            message: "Passwords don't match",
          });
        }
      }
      user
        .save()
        .then((result) => {
          console.log(result);
          res.status(201).json({
            message: "User created successfully",
            user: [
              {
                userId: user._id,
                username: user.username,
              },
            ],
          });
        })
        .catch((err) => {
          console.log(err);
          res.status(500).json({
            error: err,
          });
        });
    });
};

module.exports = { postNewUser };
