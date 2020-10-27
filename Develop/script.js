// date and time for moment.js to use
var m = moment();
var hour = m.get('hour');
var dateTime = m.format("LLLL");

// Display the current day on top of the page
$("#currentDay").text(dateTime);

// listener for the save button
$(document).ready(() => {
    $(".saveBtn").on("click", function () {
        // put task and time into variables and save them to local storage
        var userTask = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");
        localStorage.setItem(time, userTask);
    });
    // loop through the local storage for any saved tasks and populate them on the page
    for (let i = 9; i <= 17; i++) {
        $("#" + i + "-hour .description").val(localStorage.getItem(i + "-hour"))
    }
    // updated the classes based on the current time
    function trackTime() {
        // loop through every possible hour (9 - 17)
        for (let i = 9; i <= 17; i++) {
            // pull every text area
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