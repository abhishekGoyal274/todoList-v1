const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const day = require(__dirname + "/static/logics/getdate.js");

app = express();
app.use(express.static("static"));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));

//Listening port SetUp
app.listen("3000", function() {
    console.log("Listening to port 3000!");
});

var items = [];
var property = "none";
item = "";

//Get Request SetUp
app.get('/', function(req, res) {
    var today = day.today();
    console.log(property);
    res.render('list', { Day: today, newItem: items, lastItem: item });
})

//Post Request Setup
app.post('/', function(req, res) {
    const item = req.body.newItem;
    let flag = 1;
    for (let i = 0; i < (items.length + 1); i++) {
        if (item == items[i]) {
            flag = 0;
            break;
        } else {
            flag = 1;
        }
    }
    if (flag == 0) {
        console.log("If (flag =0) " + items + "\n");
        console.log(item);
        res.redirect("/");
        property = "block";
    } else {
        items.push(req.body.newItem);
        console.log("else (flag=1) " + req.body.newItem);
        res.redirect('/');
        property = "none";
    }

})