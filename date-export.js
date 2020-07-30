//jshint esversion:6

module.exports.getDate= getDate; //This line will export the following function into wherever we call it.'Remember to import this module'

function getDate(){
let today = new Date();
let options = {
  weekday : "long",
  day:"numeric",
  month:"long"
};
return today.toLocaleDateString("en-US", options);
}

//For a getDay

module.exports.getDay= getDay; //This line will export the following function into wherever we call it.'Remember to import this module'

function getDay(){
let today = new Date();
let options = {
  weekday : "long",
};
return today.toLocaleDateString("en-US", options);
}
