const express = require("express");
const controller = require("./userController");
const router = express.Router();

router.post('/login',
  controller.getUser,
  (req, res) => res.status(200).json(res.locals.users)
);

router.post('/signup', controller.postUser, (req, res) => {
    res.status(200).json();
});

router.get('/home',controller.getUserData, (req, res) => {
    res.status(200).json();
});


module.exports = router;