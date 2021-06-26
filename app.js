const express = require('express');
const app = express();
const port = 3000

require('./config/environment.js')(app, express)
require('./config/routes.js')(app)

app.listen(port, () => console.info(`App listening on port ${port}`))
