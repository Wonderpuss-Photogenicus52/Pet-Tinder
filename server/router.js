const express = require("express");
const controller = require("./userController");
const router = express.Router();

router.get('/login',
  controller.getUser,
 
  (req, res) => {res.status(200).send(res.locals);
 
  }


  // (req, res) => redirect('http://localhost:3000/home')

);

router.post('/signup', controller.postUser, (req, res) => {
    res.status(200).json();
});

router.get('/home', controller.getUsers, (req, res) => {
    res.status(200).json();
});


module.exports = router;