var m = moment();
var month = m.format('MMM');
var date = m.format('Mo');
var day = m.format('dddd');
var year = m.format('YYYY');
var hour = m.get('hour');
var minute = m.get('minute');
var dateTime = m.format("LLLL");

// Display the current day on top of the page
$("#currentDay").text(dateTime);
// Create table in container
// rows from 9am to 5pm
// columns for time, task, complete
// color code each row to time of day
// #00D462 for future, #2C6C6E for past, #D4B60B for current
// class each row based on time 
// allow user to enter task within a time block
// allow user to save that task in local storage