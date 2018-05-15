console.log('OutlineMD');


const express = require('express');
const bodyParser = require('body-parser');

//create express app
const app = express();

//Static resource path
app.use("/asserts", express.static(__dirname + '/asserts'));
//app.use("/node_modules", express.static(__dirname + '/node_modules'));


//parse requests of content-type 
app.use(bodyParser.urlencoded({extended: true}));

//parse requests of content-type
app.use(bodyParser.json());

//Configure the database
const dbConfig = require('./config/dbConfig.js');
const mongoose = require('mongoose');

mongoose.promise = global.Promise;

//Connecting to the database
mongoose.connect(dbConfig.url).then(()=>{
    console.log('Successfully connected to database');
}).catch(err => {
    console.log('Could not connect to database, Exiting now...');
    process.exit();
});

//define a simple route
/*app.get('/', (req, res)=> {
    //res.json({"Message" : "Welcome to UTAS outline editor application."});
    res.sendFile(__dirname + '/views/index.html');
});*/


//Require template routes
require('./app/routes/template.routes.js')(app);

//listem for port request
app.listen(3000, ()=> {
    console.log("server is listening to port 3000..");
});



