const express = require('express');
const app = express();
let bodyParser = require('body-parser');
const port = 3002;
const routes = require('./routes/routes');
// parse application/json
app.use(bodyParser.json());
app.use("/api", routes);

// require all routes
require('./routes/userRoute')(app); // user specific functionality
require('./routes/feedbackRoute')(app); // feedback related functionality

app.get('/', (req, res) => res.send('Welcome to back-end of Blockr feedback system!'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));