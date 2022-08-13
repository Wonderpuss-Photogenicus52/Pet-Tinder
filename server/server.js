const express = require('express');
const app = express();


const path = require('path');
var cors = require('cors')

const PORT = 4000;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());









app.get('/login', (req, res) => {
   
   res.send('!!!')
});











app.use((req, res) => res.sendStatus(404));

app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
 
  return res.status(errorObj.status).json(errorObj.message);
});



app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));


