const express = require("express");
// placeholder for controller
const controller = require("./userController");
const router = express.Router();

router.get('/login', controller.getUser, (req, res) => {
  res.status(200).json();
});

router.post('/signup', controller.postUser, (req, res) => {
    res.status(200).json();
});

router.get('/home',controller.getUserData, (req, res) => {
    res.status(200).json();
});


module.exports = router;