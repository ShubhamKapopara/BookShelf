const jwt = require("jsonwebtoken"); // to generate signed token
const expressJwt = require("express-jwt"); // for authorization check
const bcrypt = require("bcrypt");
// Config Variables
require("dotenv").config();

// User Schema
const User = require("../models/user");

// Handle database error
const { errorHandler } = require("../helpers/dbErrorHandler");

// nodemailer to send emails
const nodemailer = require("nodemailer");

// Signup a new user
exports.signup = async (req, res) => {
  const salt = bcrypt.genSaltSync(10);
  const { name, email, password } = req.body;
  const pwdhash = bcrypt.hashSync(password, salt);

  try {
    const user = new User({
      name: name,
      password: pwdhash,
      email: email,
    });
    await user.save((err, user) => {
      if (err) {
        return res.status(400).json({ message: err });
      }
      res.status(200).json({ success: "user created", user: user });
    });

    var smtpTrans = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: `${process.env.EMAILID}`,
        pass: `${process.env.EMAILPASSWORD}`,
      },
    });
    var mailOptions = {
      to: user.email,
      from: process.env.EMAILID,

      subject: "successfully registered as admin please login",
      text:
        "Hello " +
        user.name +
        ", \n\nWelcome to BookShelf. This is a fully functional e-commerce app built on MERN stack along with payment gateway. \nAny suggestions are always welcome. \n\nRegards, \nAnant Mathur",
      // };,
    };
    await smtpTrans.sendMail(mailOptions);
    // };
  } catch (error) {
    console.log(error.message);
  }
};

// Signin existing user
exports.signin = async (req, res) => {
  // find user based on email
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  // If user is found
  if (user) {
    // make sure email and password match
    // create authenticate method in user model
    if (!user) {
      return res.status(401).json({ err: "Invalid Credentials" });
    }

    // generate a signed token with user id and secret
    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);

    // persist the token as 't' in cookie with expiry date
    res.cookie("t", token, { expire: new Date() + 9999 });

    // return response with user and send to client
    const { _id, name, email, role } = user;
    return res.json({ token, user: { _id, name, email, role } });
  } else return res.status(400).json({ err: "Email not fuond" });
};

// Signout User
exports.signout = async (req, res) => {
  res.clearCookie("t");
  res.json({ msg: "You have successfully logged out" });
};

// Use as middleware to protect routes
exports.requireSignin = expressJwt({
  secret: process.env.JWT_SECRET,
  userProperty: "auth",
  algorithms: ["sha1", "RS256", "HS256"],
});

// Middleware for currently logged in user
exports.isAuth = async (req, res, next) => {
  let user = req.profile && req.auth && req.profile._id == req.auth._id;

  if (!user) {
    return res.status(403).json({ err: "Access denied" });
  } 

  next();
};

// Middleware for Admin
exports.isAdmin = (req, res, next) => {
  if (req.profile.role === 0) {
    return res.status(403).json({ err: "Admin access required" });
  }

  next();
};


/// update password
exports.updatepassword = async (req, res) => {
  const salt = bcrypt.genSaltSync(10);

  const email = req.body.data.email;
  const password = req.body.data.password;
  console.log(password);

  const pwdhash = bcrypt.hashSync(password, salt);
  try {
    const users = await User.updateOne(
      { email: email },
      { $set: { password: pwdhash } }
    );

    if (!users) {
      res.status(400).json({ message: "Invalid" });
    }

    res.status(200).json({ message: "update succesfully", email: email });

    var smtpTrans = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: `${process.env.EMAILID}`,
        pass: `${process.env.EMAILPASSWORD}`,
      },
    });
    var mailOptions = {
      to: req.body.data.email,
      from: process.env.EMAILID,

      subject: "successfully registered as admin please login",
      text: "Hello your password is update to " , 
    };
    await smtpTrans.sendMail(mailOptions);
    // };
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: err.message });
  }

};
