const db = require('./petTinderModel');

const petTinderController = {};

// GET FOR LOGIN PAGE
petTinderController.getUser = (req, res, next) => {
  // EDIT QUERY SO ONLY FOR ONE USER, GET FROM DATA PASSED IN REQ
  console.log(req.query);
  const queryString = `
    SELECT * FROM users
    WHERE username = $1 AND password = $2;
  `;
  const values = [req.query.username, req.query.password];
  db.query(queryString, values).then((data) => {
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