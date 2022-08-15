const express = require("express");
const controller = require("./userController");
const router = express.Router();

router.get('/login',
  controller.getUser,
 
  (req, res) => {
    res.status(200).send(res.locals.userInfo);
  }
);

router.post('/signup', controller.postUser, (req, res) => {
  console.log('ending', res.locals);
  if(res.locals.exist ===true) { res.status(200).redirect("http://localhost:3000/login?exist="+res.locals.exist)}
   else{ res.status(200).redirect("http://localhost:3000/login")}
});

router.get('/home', controller.getUsers, (req, res) => {
    res.status(200).json(res.locals.usersInfo);
});


module.exports = router;