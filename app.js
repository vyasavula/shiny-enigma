const express = require('express');
const bodyParser = require("body-parser");
const https = require("https");
const date = require(__dirname + "/date-export.js"); //The exported file is imported through this line.
//defining an Array
let items = ["Buy food", "Get food", "Cook food", "Yoga"];
let workItems = [];

//app
const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));

//GET statements
app.get("/", function(req,res) {
  let day = date.getDate();
  res.render("list", {listTitle: day, newListItems:items});
});

//Work Route fet
app.get("/work", function(req,res){
  res.render("list",{listTitle: "Work list", newListItems:workItems}); //DOnt get confused here, because you are passing on a string.

});
//about me get
app.get("/about", function(req, res){
  res.render("about");
});






//post methods
app.post("/", function(req, res) {
  //console.log(req.body);
  let item = req.body.newItem;
  if (req.body.list === "Work"){
    workItems.push(item);
    res.redirect("/work");
  }else{
    items.push(item);
    res.redirect("/");
  }
});



//listen
app.listen(3000, function() {
  console.log("You have just started your server!!!Mate!!!!");
});




// --------------IMPORTANT-------------------
// Always try to use const and let variables, there are very few cases where we incorporate var in our projects.


//Different ways to write the code
// //GET requests
// app.get('/', function(req, res) {
// var today = new Date();
// var currentday = today.getDay();
// var day = "";
//
// if(currentday === 6 || currentday === 0){
//   day = "Weekend"
// }else{
//   day = "Weekday"
// }
//
//   res.render("list", {kindOfDay: day});
// });

// app.get("/", function(req, res){
//   var weekday = new Array(7);
//     weekday[0] = "Sunday";
//     weekday[1] = "Monday";
//     weekday[2] = "Tuesday";
//     weekday[3] = "Wednesday";
//     weekday[4] = "Thursday";
//     weekday[5] = "Friday";
//     weekday[6] = "Saturday";
//     var today = new Date();
//   var currentday = today.getDay();
//   var day = weekday[currentday];
//   if (currentday === 6 || currentday === 0){
//     day
//   }else {
//     day
//   }
// res.render("list", {kindOfDay: day});
// })

// //var day = "";
// switch (currentday) {
//   case 0:
//     day = "Sunday";
//     break;
//   case 1:
//     day = "Monday";
//     break;
//   case 2:
//     day = "Tueday";
//     break;
//   case 3:
//     day = "Wednesday";
//     break;
//   case 4:
//     day = "Thursday";
//     break;
//   case 5:
//     day = "Friday";
//     break;
//   case 6:
//     day = "Saturday";
//     break;
//   default:
//     console.log("There is an error");
// }
// res.render("list", {
//   kindOfDay: day
// });
// });
// //work post (Spare fr reference)
// app.post("/work", function(req,res){
//
//   let item = req.body.newItem;
//   workItems.push(item);
//   res.redirect("/work");
// });
