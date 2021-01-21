require('dotnev').config();
let express = require('express');
let app = express();
let sequelize = require ('./db');


let journal = require('./controllers/journalcontroller');
let user = require('./controllers/usercontroller');

sequelize.sync();

app.use(require('./middleware/headers'));

app.use(express.json());

app.use(require('./middleware/validate-session'));
app.use('/journal', journal);

app.listen(3000, function () {
    console.log("App is listening on port 3000");
});

