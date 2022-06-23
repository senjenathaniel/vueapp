const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');
const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};
app.use(cors(corsOptions));


const db = require('./app/models');
db.sequelize.sync({
  forcr: true
}).then(() => {
  console.log("Dop and re-sync database");
});


// to parse requests of content type application/json
app.use(bodyParser.json());
// to parse requests of content-type application/x-www-form/urlencoded
app.use(bodyParser.urlencoded());
// get simple route
app.get('/', (req, res) => {
  res.json({
    message: "Welcome to this app!"
  })
});
// Set port and listen
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is runnig on port ${PORT}`);
})