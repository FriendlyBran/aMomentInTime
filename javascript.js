//Start moment package, chalk package
const moment = require('moment');
const chalk = require('chalk');

//Current date
var now = moment({});

//Day of the week in letters. (step1)
var dayOfWeek = moment(now).format("e");
var weekDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var step1 = (weekDay[dayOfWeek]);

//Greeting based on hour of day: good afternoon, good morning, or good evening. (step2)
var hourOfDay = moment(now).format("k");
var step2 = "";
if (hourOfDay > 00 && hourOfDay < 12) {
    step2 = "Good morning";
}   else if (hourOfDay >= 12 && hourOfDay < 17) {
    step2 = "Good afternoon";
}   else {
    step2 = "Good evening";
}

//Display step1 and step2 with color and underline using chalk package.
console.log(chalk.green("The day of the week is " + chalk.underline(step1) + ".\n" + chalk.underline(step2)));
