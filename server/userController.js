const db = require('./petTinderModel');

const petTinderController = {};

// GET FOR LOGIN PAGE
petTinderController.getUser = (req, res, next) => {
  // EDIT QUERY SO ONLY FOR ONE USER, GET FROM DATA PASSED IN REQ
  // console.log(req.query);
  const queryString = `
    SELECT * FROM users
    WHERE username = $1 AND password = $2;
  `;
  const values = [req.query.username, req.query.password];
  db.query(queryString, values).then((data) => {
    const { username, bio } = data.rows[0];
    res.locals.userInfo = { username, bio };
    return next();
  }).catch((err) => next({
    log: `Error in petTinderController.getUser: ${err}`,
    status: 400,
    message: 'Query for users unsuccessful, check server',
  }));
}

// POST FOR SIGNUP PAGE
petTinderController.postUser = (req, res, next) => {
  const { username, password, bio} = req.body;
  console.log(username, password, bio);
  const queryString = `
    INSERT INTO users (username, password, bio)
    VALUES ($1, $2, $3) RETURNING *;
  `;
  const value = [username, password];
  db.query(queryString, values).then((data) => {
    res.locals.users = data.rows;
    return next();
  })
  .catch((err) => next({
    log: `Error in petTinderController.getUser: ${err}`,
    status: 400,
    message: 'Query for users unsuccessful, check server',
  }));
  }


// GET FOR HOME PAGE
petTinderController.getUsers = (req, res, next) => {
  return next();
}

module.exports = petTinderController;