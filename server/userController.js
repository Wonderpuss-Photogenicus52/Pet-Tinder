const db = require('./petTinderModel');

const petTinderController = {};

// GET FOR LOGIN PAGE
petTinderController.getUser = (req, res, next) => {
  return next();
}

// POST FOR SIGNUP PAGE
petTinderController.postUser = (req, res, next) => {
  return next();
}

// GET FOR HOME PAGE
petTinderController.getUserData = (req, res, next) => {
  return next();
}

module.exports = petTinderController;