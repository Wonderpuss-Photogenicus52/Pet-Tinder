const db = require('./petTinderModel');

const petTinderController = {};

// GET FOR LOGIN PAGE
petTinderController.getUser = (req, res, next) => {
  // EDIT QUERY SO ONLY FOR ONE USER, GET FROM DATA PASSED IN REQ
  const queryString = `
    SELECT * FROM users;
  `;
  db.query(queryString).then((data) => {
    res.locals.users = data.rows;
    return next();
  }).catch((err) => next({
    log: `Error in petTinderController.getUser: ${err}`,
    status: 400,
    message: 'Query for users unsuccessful, check server',
  }));
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