// date and time for moment.js to use
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

// listener for the save button
$(document).ready(() => {
    $(".saveBtn").click(() => {
        // set the task
        var taskInput = $(this).siblings(".description").val();
        // set the time
        var time = $(this).parent().attr("id");
        // store the task and time
        localStorage.setItem(taskInput, time);
    });

    // loop through the local storage for any saved tasks
    for (let i = 0; i <= 8; i++) {
        $(i + "-hour .description").val(localStorage.getItem(i = "-hour"))
    }

    // Helper
    function trackTime() {
        // loop through every possible hour (9 - 17)
        for (let i = 9; i <= 17; i++) {
            // pull every coorisponding text area
            let timeBlock = document.getElementById(i);
            // if the text area id is equal to the current hour change class
            if (i === hour) {
                timeBlock.className += " present";
                // if the texa area is greater than the current hour change class
            } else if (i > hour) {
                timeBlock.className += " future";
                // if the text area is less than the current hour change class
            } else if (i < hour) {
                timeBlock.className += " past";
            }
        }

    }

    trackTime();
});