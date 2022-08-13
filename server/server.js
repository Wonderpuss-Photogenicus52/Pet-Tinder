const express = require("express");
const cors = require("cors");

const apiRouter = require("./router");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.use('./router', apiRouter);

// Local error handler
app.use((req,res) => res.status(404).send('This Page Does not exist.'));

// Global error handler
app.use((err, req, res, next) => {
    const defaultErr = {
        log: 'Express error handler caughtunknown middleware error',
        status: 500,
        message: { err: 'An error occurred'},
        
    };
});

app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}...`)
});

module.exports = app;